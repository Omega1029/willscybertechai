import fs from 'fs';
import path from 'path';
import OpenAI from 'openai';
import multer from 'multer';

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

// Configure multer for file uploads
const upload = multer({
  dest: 'uploads/',
  limits: {
    fileSize: 10 * 1024 * 1024 // 10MB limit
  },
  fileFilter: (req, file, cb) => {
    // Accept only image files
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only image files are allowed'), false);
    }
  }
});

const RECEIPT_JSON_PROMPT = `
You are a receipt-processing assistant.

Extract information from the receipt image and return JSON ONLY in the following format:

{
  "merchant_name": null,
  "date": null,
  "total_amount": null,
  "currency": null,
  "tax_amount": null,
  "payment_method": null,
  "line_items": [
    {
      "description": null,
      "amount": null
    }
  ],
  "business_category": null,
  "category_confidence": null,
  "notes": null
}

Rules:
- Do NOT guess or hallucinate information.
- Use null if information is missing or unclear.
- Dates should be in YYYY-MM-DD format if visible.
- Amounts should be strings.
- Choose ONE business_category from common business expense types.
- category_confidence must be one of: High, Medium, Low.
- If line items are not clearly readable, return an empty array.
- Output JSON ONLY.
`;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Handle file upload
  upload.single('receipt')(req, res, async (err) => {
    if (err) {
      console.error('Upload error:', err);
      return res.status(400).json({ error: err.message });
    }

    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const filePath = req.file.path;

    try {
      // Read the uploaded file and convert to base64
      const imageBuffer = fs.readFileSync(filePath);
      const imageBase64 = imageBuffer.toString('base64');
      
      // Get file extension for proper mime type
      const fileExtension = path.extname(req.file.originalname).toLowerCase();
      let mimeType = 'image/jpeg'; // default
      
      if (fileExtension === '.png') mimeType = 'image/png';
      else if (fileExtension === '.gif') mimeType = 'image/gif';
      else if (fileExtension === '.webp') mimeType = 'image/webp';

      // Process with OpenAI
      const response = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "user",
            content: [
              { type: "text", text: RECEIPT_JSON_PROMPT },
              {
                type: "image_url",
                image_url: {
                  url: `data:${mimeType};base64,${imageBase64}`,
                },
              },
            ],
          },
        ],
        max_tokens: 1000,
      });

      const outputText = response.choices[0].message.content;

      // Parse JSON safely
      let result;
      try {
        result = JSON.parse(outputText);
      } catch (parseError) {
        console.error('JSON parse error:', parseError);
        result = {
          error: "Failed to parse AI response as JSON",
          raw_output: outputText,
        };
      }

      // Clean up uploaded file
      fs.unlinkSync(filePath);

      // Return the processed result
      res.status(200).json(result);

    } catch (error) {
      console.error('Processing error:', error);
      
      // Clean up uploaded file on error
      try {
        fs.unlinkSync(filePath);
      } catch (cleanupError) {
        console.error('Cleanup error:', cleanupError);
      }

      res.status(500).json({ 
        error: 'Failed to process receipt',
        details: error.message 
      });
    }
  });
}