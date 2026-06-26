import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const blogPosts: Record<string, {
  id: number;
  title: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  tag: string;
  content: string;
}> = {
  '1': {
    id: 1,
    title: 'Beyond Pixels and Predictions: How VLMs Will Make Self-Driving Cars Truly Smart',
    image: 'https://images.pexels.com/photos/210126/pexels-photo-210126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    author: 'WCT Team',
    date: 'January 26, 2026',
    readTime: '12 min read',
    tag: 'Research',
    content: `The Promise and Peril of Self-Driving Cars

The vision for autonomous vehicles has captivated the technology industry for decades. Self-driving cars promise to revolutionize transportation, reduce accidents caused by human error, and provide mobility to those unable to drive. However, recent incidents have highlighted that we're still far from achieving the dream of fully autonomous vehicles that can navigate any situation with human-level competence.

The Need for Deeper Understanding

Current autonomous driving systems, while proficient in perception, often lack the contextual awareness and common-sense reasoning that human drivers naturally possess. They can detect objects with remarkable precision, but understanding what those objects mean in context—and making appropriate decisions—remains a significant challenge.

Enter Vision Language Models (VLMs), a transformative technology that bridges the gap between visual perception and linguistic understanding. These multimodal AI systems represent the next frontier in making self-driving cars truly intelligent.

---

The Current Landscape: Traditional Methods and CNNs

Traditional Perception Techniques

Modern autonomous vehicles rely on sophisticated sensor fusion, combining data from cameras, LiDAR, radar, and ultrasonic sensors to build a comprehensive picture of their environment. These systems excel at detecting objects, tracking their movement, maintaining lane position, and identifying traffic signs.

The Role of Convolutional Neural Networks (CNNs)

At the heart of most autonomous driving perception systems are Convolutional Neural Networks (CNNs). These deep learning models have revolutionized computer vision, enabling vehicles to:

- Recognize and classify objects (cars, pedestrians, cyclists, traffic signs)
- Segment scenes to understand drivable surfaces
- Detect lane markings and road boundaries
- Track objects across video frames

Limitations of CNNs and Traditional Approaches

Despite their impressive capabilities, CNNs and traditional methods face significant limitations:

Data Dependency: CNNs require massive amounts of labeled training data. More critically, they struggle with "out-of-distribution" scenarios—situations not adequately represented in their training data.

Lack of Contextual Understanding: While CNNs excel at identifying objects, they struggle with interpreting their meaning in a broader context. A CNN might perfectly identify a red octagon as a "stop sign," but it doesn't truly understand what "stopping" means or why it's necessary.

Computational Expense: Real-time processing of multiple high-resolution camera feeds through complex CNN architectures demands significant computational resources.

---

Case Study: The Waymo School Bus Incidents

In late 2024, Waymo robotaxis were involved in multiple incidents where they drove past stopped school buses with flashing lights and extended stop arms. These incidents occurred in Austin, Texas, and Atlanta, Georgia.

In each case, the robotaxi failed to stop for the school bus as legally required, potentially endangering children who might be boarding or exiting. These weren't isolated glitches; they represented a pattern that triggered investigations by both the NTSB and NHTSA.

What makes these incidents particularly revealing is that Waymo's system almost certainly perceived the school bus and its signals. The problem wasn't detection—it was understanding. The system likely classified these visual elements correctly, but failed to grasp the critical context: a stopped school bus with these signals means children may be present and crossing, creating an imminent safety hazard.

A human driver seeing a stopped school bus with flashing lights doesn't need to consciously process each element. The entire scene is instantly understood through years of cultural knowledge, training, and common sense. This holistic, context-aware understanding is precisely what current autonomous systems lack.

---

Introducing Visual Language Models (VLMs)

What are VLMs?

Vision Language Models represent a paradigm shift in artificial intelligence. Unlike traditional computer vision systems that process images in isolation, VLMs combine computer vision with natural language processing to create systems that can both see and understand.

At their core, VLMs consist of two main components:
- A vision encoder that processes visual information (images or video)
- A large language model (LLM) that brings linguistic understanding and reasoning capabilities

How VLMs Work

VLMs are trained on massive datasets of image-text pairs, learning to map relationships between visual patterns and language-based concepts. When processing a scene, a VLM doesn't just identify objects—it can answer questions about the scene, describe what's happening, explain relationships between objects, and reason about implications and potential outcomes.

---

VLM Advantages for Self-Driving Cars

Superior Contextual Understanding

VLMs excel at interpreting the meaning and implications of visual scenes. Rather than simply detecting a "school bus object," a VLM understands that a stopped school bus with specific signals represents a complex traffic situation with safety-critical requirements.

Semantic Reasoning and Common Sense

VLMs can integrate semantic information with visual cues to make more intelligent decisions. They can reason about the intent of pedestrians, the difference between a parked car and one about to pull out, and the implications of weather conditions on road safety.

Handling Novelty and Edge Cases

One of the most powerful capabilities of VLMs is zero-shot learning—the ability to handle situations they've never explicitly been trained on by applying broader understanding and reasoning.

Improved Decision-Making and Interpretability

VLMs can provide natural language explanations for their decisions: "I am stopping because there is a school bus ahead with flashing lights and an extended stop arm, indicating children may be present." This explainability is crucial for debugging, building trust, and meeting regulatory requirements.

---

Challenges and Future Outlook

Current Challenges

Computational Resources: VLMs are significantly more computationally intensive than CNNs. Running large language models in real-time on vehicle hardware presents serious engineering challenges.

Latency Requirements: Autonomous driving demands split-second decisions. Current VLMs may not yet meet the stringent latency requirements for all driving scenarios.

The Road Ahead

The trajectory is clear: as VLMs become more efficient and capable, they will play an increasingly central role in autonomous driving systems. Rather than replacing existing stacks, VLMs are likely to act as a semantic reasoning layer—closing the gap between seeing and understanding.

---

Conclusion

The Waymo school bus incidents serve as a crucial reminder that perception alone is insufficient for truly autonomous driving. Vision Language Models offer a path forward. By combining visual perception with linguistic understanding and reasoning, VLMs can interpret driving scenarios in their full context and make decisions based on genuine comprehension rather than pattern matching.

The future of autonomous driving won't be built on pixels and predictions alone. It will be built on systems that can truly reason about the complex, ambiguous, context-dependent scenarios that make up real-world driving. VLMs are the key to making that future a reality.`,
  },
  '2': {
    id: 2,
    title: 'The Future of AI Engineering: Building Production-Ready Systems',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'WCT Team',
    date: 'January 26, 2026',
    readTime: '7 min read',
    tag: 'Engineering',
    content: 'Discover how modern AI engineering is transforming businesses by building production-ready systems that deliver measurable results and real operational value...',
  },
};

const BlogPostPage = () => {
  const { id } = useParams();
  const post = id ? blogPosts[id] : null;

  if (!post) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-slate-100 font-sans">
        <Navbar />
        <div className="pt-40 pb-20 px-8 text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-blue-400 hover:text-blue-300 transition-colors">
            Back to Blog
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-slate-100 font-sans">
      <Navbar />

      <div className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Back Link */}
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-blue-400 transition-colors mb-10"
          >
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_back</span>
            Back to Blog
          </Link>

          {/* Hero Image */}
          <div className="w-full h-80 md:h-96 overflow-hidden rounded-xl mb-10 bg-zinc-900 border border-zinc-800">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="px-3 py-1 text-xs font-semibold tracking-[0.18em] uppercase text-blue-400 bg-blue-900/30 border border-blue-700/20 rounded-full">
              {post.tag}
            </span>
            <span className="text-xs text-zinc-400 uppercase tracking-widest">{post.readTime}</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">{post.title}</h1>

          {/* Author / Date */}
          <div className="flex items-center gap-6 text-zinc-400 text-sm mb-10 pb-10 border-b border-zinc-800">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>person</span>
              {post.author}
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>calendar_today</span>
              {post.date}
            </div>
          </div>

          {/* Content */}
          <div className="text-zinc-400 text-lg leading-relaxed whitespace-pre-wrap blog-content">
            {post.content}
          </div>

          {/* Back CTA */}
          <div className="mt-16 pt-10 border-t border-zinc-800">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm font-bold text-blue-400 hover:gap-3 hover:text-blue-300 transition-all"
            >
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_back</span>
              Back to Blog
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPostPage;
