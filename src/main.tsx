import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import AIAssistantsPage from './pages/AIAssistantsPage.tsx';
import AIAutomationPage from './pages/AIAutomationPage.tsx';
import CustomAIPage from './pages/CustomAIPage.tsx';
import AboutPage from './pages/AboutPage.tsx';
import AgentsPage from './pages/AgentsPage.tsx';
import BlogPage from './pages/BlogPage.tsx';
import Contact from './components/Contact.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/ai-assistants" element={<AIAssistantsPage />} />
        <Route path="/ai-automation" element={<AIAutomationPage />} />
        <Route path="/custom-ai" element={<CustomAIPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/agents" element={<AgentsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  </StrictMode>
);
