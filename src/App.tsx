import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { Home } from './pages/Home';
import { Pricing } from './pages/Pricing';
import { Success } from './pages/Success';
import { Dashboard } from './pages/Dashboard';
import Login from './components/auth/LoginPage';
import Signup from './components/auth/SignupPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import GetStartedModal from './components/GetStartedModal';
import AIAssistantsPage from './pages/AIAssistantsPage';
import AIAutomationPage from './pages/AIAutomationPage';
import CustomAIPage from './pages/CustomAIPage';
import AIAgentPage from './pages/AIAgentPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import ServicesPage from './pages/ServicesPage';
import DemosPage from './pages/DemosPage';
import AboutPage from './pages/AboutPage';
import Contact from './components/Contact';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';

function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <AuthProvider>
      <div className="bg-background text-on-background font-sans selection:bg-primary-container selection:text-on-primary-fixed">
        {showModal && <GetStartedModal onClose={() => setShowModal(false)} />}
        <Navbar />

        <main className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/success" element={<Success />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/ai-assistants" element={<AIAssistantsPage />} />
            <Route path="/ai-automation" element={<AIAutomationPage />} />
            <Route path="/custom-ai" element={<CustomAIPage />} />
            <Route path="/ai-agent" element={<AIAgentPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:id" element={<BlogPostPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/demos" element={<DemosPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<PrivacyPolicyPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
