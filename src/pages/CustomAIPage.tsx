import React from 'react';
import { Brain, Wrench, Puzzle, CheckCircle, ArrowRight, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useDarkMode } from '../hooks/useDarkMode';
import Navbar from '../components/Navbar';
import { supabase } from '../lib/supabase';

// You'll need to add your OpenAI API key to your environment variables
const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

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

async function processReceiptWithOpenAI(imageUrl: string) {
  if (!OPENAI_API_KEY) {
    throw new Error('OpenAI API key not configured. Please add VITE_OPENAI_API_KEY to your environment variables.');
  }

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${OPENAI_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "user",
          content: [
            { type: "text", text: RECEIPT_JSON_PROMPT },
            {
              type: "image_url",
              image_url: {
                url: imageUrl,
              },
            },
          ],
        },
      ],
      max_tokens: 1000,
    }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(`OpenAI API error: ${response.status} - ${errorData.error?.message || 'Unknown error'}`);
  }

  const data = await response.json();
  const outputText = data.choices[0].message.content;

  // Parse JSON safely
  try {
    return JSON.parse(outputText);
  } catch (parseError) {
    return {
      error: "Failed to parse AI response as JSON",
      raw_output: outputText,
    };
  }
}

function createFancyReceiptDisplay(data: any): string {
  const formatAmount = (amount: string | null) => {
    if (!amount) return 'N/A';
    return amount.startsWith('$') ? amount : `$${amount}`;
  };

  const formatDate = (date: string | null) => {
    if (!date) return 'Not detected';
    return new Date(date).toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return `
    <div class="bg-white rounded-lg border-2 border-gray-200 p-4 shadow-sm">
      <!-- Header -->
      <div class="text-center border-b border-gray-200 pb-3 mb-4">
        <h3 class="text-xl font-bold text-gray-900">${data.merchant_name || 'Unknown Merchant'}</h3>
        <p class="text-sm text-gray-600">${formatDate(data.date)}</p>
        ${data.business_category ? `<span class="inline-block mt-1 px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">${data.business_category}</span>` : ''}
      </div>

      <!-- Line Items -->
      ${data.line_items && data.line_items.length > 0 ? `
        <div class="mb-4">
          <h4 class="font-semibold text-gray-800 mb-2 flex items-center">
            <svg class="w-4 h-4 mr-2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
            </svg>
            Items Purchased
          </h4>
          <div class="space-y-2">
            ${data.line_items.map((item: any, index: number) => `
              <div class="flex justify-between items-center py-2 px-3 bg-gray-50 rounded border-l-4 border-blue-400">
                <span class="text-gray-800 font-medium">${item.description || `Item ${index + 1}`}</span>
                <span class="font-bold text-gray-900">${formatAmount(item.amount)}</span>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}

      <!-- Totals -->
      <div class="border-t border-gray-200 pt-3">
        <div class="space-y-2">
          ${data.tax_amount ? `
            <div class="flex justify-between text-sm text-gray-600">
              <span>Tax:</span>
              <span>${formatAmount(data.tax_amount)}</span>
            </div>
          ` : ''}
          <div class="flex justify-between items-center text-lg font-bold text-gray-900 bg-green-50 px-3 py-2 rounded">
            <span>Total:</span>
            <span class="text-green-700">${formatAmount(data.total_amount)}</span>
          </div>
        </div>
      </div>

      <!-- Payment Method -->
      ${data.payment_method ? `
        <div class="mt-3 pt-3 border-t border-gray-200">
          <div class="flex items-center text-sm text-gray-600">
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
            </svg>
            <span>Payment: ${data.payment_method}</span>
          </div>
        </div>
      ` : ''}

      <!-- Confidence Badge -->
      ${data.category_confidence ? `
        <div class="mt-3 pt-3 border-t border-gray-200">
          <div class="flex items-center justify-between">
            <span class="text-xs text-gray-500">AI Confidence:</span>
            <span class="px-2 py-1 text-xs rounded-full ${
              data.category_confidence === 'High' ? 'bg-green-100 text-green-800' :
              data.category_confidence === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
              'bg-red-100 text-red-800'
            }">${data.category_confidence}</span>
          </div>
        </div>
      ` : ''}

      <!-- Notes -->
      ${data.notes ? `
        <div class="mt-3 pt-3 border-t border-gray-200">
          <p class="text-sm text-gray-600"><strong>Notes:</strong> ${data.notes}</p>
        </div>
      ` : ''}
    </div>
  `;
}

const CustomAIPage = () => {
  const isDark = useDarkMode();
  // Force dark theme for consistency
  const forceDark = true;

  const services = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Custom AI Tools',
      description: 'AI tools designed around your specific business needs.'
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: 'Business-Specific Automations',
      description: 'Automation tailored to your workflows, not generic templates.'
    },
    {
      icon: <Puzzle className="w-8 h-8" />,
      title: 'AI Integrations',
      description: 'Connect AI with your existing systems and software.'
    }
  ];

  const benefits = [
    'Better fit for your business',
    'More flexibility',
    'Improved efficiency',
    'Less workarounds',
    'Scales as you grow'
  ];

  const steps = [
    {
      number: '1',
      title: 'Understand your business needs',
      description: 'We learn about your unique workflows and requirements'
    },
    {
      number: '2',
      title: 'Design the AI solution',
      description: 'Create a solution tailored to your specific objectives'
    },
    {
      number: '3',
      title: 'Build and test',
      description: 'Develop and thoroughly test the custom AI solution'
    },
    {
      number: '4',
      title: 'Deploy and refine',
      description: 'Launch your solution and continuously improve performance'
    }
  ];

  const targetAudience = [
    'Small and medium-sized businesses',
    'Teams with unique workflows',
    'Companies outgrowing generic tools',
    'Businesses seeking tailored solutions'
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
              Custom AI Solutions Built for Your Business
            </h1>
            <p className={`text-xl md:text-2xl mb-8 max-w-3xl mx-auto ${
              'text-gray-300'
            }`}>
              We design custom AI solutions tailored to your workflows, data, and goals — without forcing you into one-size-fits-all software.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold flex items-center justify-center"
              >
                Get Started <ArrowRight className="ml-2" size={20} />
              </a>
              <a 
                href="#how-it-works"
                onClick={(e) => {
                  e.preventDefault();
                  const section = document.getElementById('how-it-works');
                  if (section) {
                    const navHeight = 80;
                    const elementPosition = section.getBoundingClientRect().top + window.pageYOffset;
                    const offsetPosition = elementPosition - navHeight;
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth'
                    });
                  }
                }}
                className={`px-8 py-4 rounded-lg font-semibold ${
                  'bg-white/10 hover:bg-white/20 text-white'
                }`}
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Custom AI */}
      <section className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-white">Why Custom AI</h2>
            <p className="text-xl leading-relaxed text-gray-300">
              Off-the-shelf AI tools don't always fit how a business actually works. Custom AI solutions are designed to match your processes, tools, and objectives.
            </p>
          </div>
        </div>
      </section>

      {/* What We Build */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">What We Build</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="rounded-xl p-8 text-center bg-gray-800 border border-gray-700">
                <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-6 mx-auto bg-purple-500/20">
                  <div className="text-purple-500">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">{service.title}</h3>
                <p className="text-gray-300">
                  {service.description}
                </p>
                
                {/* Demo button for Custom AI Tools */}
                {service.title === 'Custom AI Tools' && (
                  <div className="mt-4">
                    <button
                      onClick={() => {
                        const modal = document.createElement('div');
                        modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
                        modal.innerHTML = `
                          <div class="bg-white rounded-2xl p-8 max-w-lg mx-4 text-center shadow-2xl">
                            <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                              </svg>
                            </div>
                            <h3 class="text-2xl font-bold text-gray-900 mb-2">Receipt Processing Demo</h3>
                            <p class="text-gray-600 mb-6">See our AI extract structured data from receipt images</p>
                            
                            <div class="mb-6">
                              <input type="file" id="receiptUpload" accept="image/*" class="hidden" />
                              <label for="receiptUpload" class="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold cursor-pointer transition-colors">
                                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                                </svg>
                                Upload Receipt
                              </label>
                            </div>
                            
                            <div id="processingStatus" class="hidden mb-4">
                              <div class="bg-blue-50 rounded-lg p-3">
                                <div class="text-blue-600 font-semibold">Processing...</div>
                                <div class="text-blue-500 text-sm">Extracting data from your receipt</div>
                              </div>
                            </div>
                            
                            <div id="errorStatus" class="hidden mb-4">
                              <div class="bg-red-50 rounded-lg p-3">
                                <div class="text-red-600 font-semibold">Error</div>
                                <div class="text-red-500 text-sm" id="errorMessage">Something went wrong processing your receipt</div>
                              </div>
                            </div>
                            
                            <div id="results" class="hidden mb-6">
                              <div class="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 text-left border border-green-200">
                                <div class="flex items-center mb-4">
                                  <div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                                    <svg class="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                  </div>
                                  <h4 class="font-bold text-gray-900 text-lg">Receipt Processed Successfully!</h4>
                                </div>
                                <div id="receiptDisplay" class="space-y-4"></div>
                              </div>
                            </div>
                            
                            <div class="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-4 mb-6">
                              <div class="text-sm text-blue-600 font-semibold mb-1">What we extract:</div>
                              <div class="text-xs text-blue-500">Merchant, date, total, items, tax, category</div>
                            </div>
                            
                            <div class="text-xs text-gray-500 mb-4">
                              Upload any receipt image (PNG, JPG, etc.) to see the AI in action
                            </div>
                            <button onclick="this.parentElement.parentElement.remove()" class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                              Close
                            </button>
                          </div>
                        `;
                        document.body.appendChild(modal);
                        
                        // Handle file upload
                        const fileInput = modal.querySelector('#receiptUpload');
                        const processingStatus = modal.querySelector('#processingStatus');
                        const errorStatus = modal.querySelector('#errorStatus');
                        const errorMessage = modal.querySelector('#errorMessage');
                        const results = modal.querySelector('#results');
                        
                        fileInput.addEventListener('change', async (e) => {
                          const file = e.target.files[0];
                          if (!file) return;
                          
                          // Show processing status
                          processingStatus.classList.remove('hidden');
                          results.classList.add('hidden');
                          errorStatus.classList.add('hidden');
                          
                          try {
                            // Upload to Supabase storage
                            const fileName = `receipt_${Date.now()}_${file.name}`;
                            
                            // Upload with upsert option to bypass some RLS restrictions
                            const { data: uploadData, error: uploadError } = await supabase.storage
                              .from('Receipts')
                              .upload(fileName, file, {
                                cacheControl: '3600',
                                upsert: false
                              });
                            
                            if (uploadError) {
                              console.error('Upload error details:', uploadError);
                              throw new Error(`Upload failed: ${uploadError.message}. You may need to configure storage policies in Supabase.`);
                            }
                            
                            // Get public URL
                            const { data: { publicUrl } } = supabase.storage
                              .from('Receipts')
                              .getPublicUrl(fileName);
                            
                            // Process with OpenAI directly
                            const result = await processReceiptWithOpenAI(publicUrl);
                            
                            // Create fancy display
                            const receiptDisplay = modal.querySelector('#receiptDisplay');
                            receiptDisplay.innerHTML = createFancyReceiptDisplay(result);
                            
                            // Hide processing, show results
                            processingStatus.classList.add('hidden');
                            results.classList.remove('hidden');
                            
                            // Clean up - delete from Supabase after processing
                            await supabase.storage
                              .from('Receipts')
                              .remove([fileName]);
                            
                          } catch (error) {
                            console.error('Error processing receipt:', error);
                            processingStatus.classList.add('hidden');
                            errorStatus.classList.remove('hidden');
                            errorMessage.textContent = error.message || 'Failed to process receipt. Please try again.';
                          }
                        });
                        
                        modal.addEventListener('click', (e) => {
                          if (e.target === modal) {
                            modal.remove();
                          }
                        });
                      }}
                      className="flex items-center space-x-2 text-green-600 hover:text-green-700 font-semibold transition-colors duration-200"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                      </svg>
                      <span>See Demo</span>
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-white">Benefits for Your Business</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-4 flex-shrink-0" />
                  <span className="text-lg text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Pricing Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">Custom AI Solutions Pricing</h2>
            <p className="text-xl max-w-2xl mx-auto text-gray-300">
              Tailored AI solutions built specifically for your business
            </p>
          </div>
          
          <div className="max-w-md mx-auto">
            <div className="relative rounded-2xl p-8 border-2 transition-all duration-300 hover:scale-105 bg-gradient-to-br from-blue-900/50 to-purple-900/50 border-blue-500">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2 text-white">Custom Solution</h3>
                <div className="mb-4">
                  <span className="text-lg text-gray-400">Starts at </span>
                  <span className="text-4xl font-bold text-white">$499</span>
                  <span className="text-lg text-gray-400">/month</span>
                </div>
                <p className="text-gray-300">
                  AI solutions built specifically for your unique business needs
                </p>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">
                    Custom AI model development
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">
                    Business-specific integrations
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">
                    Tailored workflow automation
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">
                    Dedicated development team
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">
                    Ongoing support & optimization
                  </span>
                </div>
              </div>
              
              <Link 
                to="/contact"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
          
          {/* Additional Info */}
          <div className="text-center mt-12">
            <p className="text-lg mb-4 text-gray-300">
              Pricing varies based on complexity and requirements
            </p>
            <p className="text-sm text-gray-400">
              <Link to="/contact" className="text-purple-600 hover:text-purple-700 font-semibold">Contact us</Link> for a detailed quote based on your specific needs
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">How It Works</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto bg-purple-500/20 text-purple-400 text-2xl font-bold">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">{step.title}</h3>
                <p className="text-gray-300">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-white">Who This Is For</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {targetAudience.map((audience, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-purple-500 mr-4 flex-shrink-0" />
                  <span className="text-lg text-gray-300">{audience}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="contact" className="py-20 bg-gradient-to-r from-blue-600/20 to-blue-800/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Looking for an AI solution that fits your business?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
            Let's discuss how we can build a custom AI solution tailored to your specific needs and workflows.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <a 
              href="mailto:contact@willscybertech.com"
              className="flex items-center text-lg font-semibold text-purple-600 hover:text-purple-700"
            >
              <Mail className="w-5 h-5 mr-2" />
              contact@willscybertech.com
            </a>
            <a 
              href="tel:+1234567890"
              className="flex items-center text-lg font-semibold text-purple-600 hover:text-purple-700"
            >
              <Phone className="w-5 h-5 mr-2" />
              (123) 456-7890
            </a>
          </div>
          
          <Link 
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold"
          >
            Get Started
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t bg-gray-900 border-gray-700">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <span className="text-2xl font-bold text-white">Will's Cyber Tech</span>
            </div>
            <div className="flex space-x-6">
              <a href="mailto:contact@willscybertech.com" className="text-gray-400 hover:text-white">
                Contact
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CustomAIPage;