import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { Home } from './pages/Home';
// import { Pricing } from './pages/Pricing';   // pricing page disabled for now
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
import ITPage from './pages/ITPage';
import DemoPage from './pages/DemoPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import UseCasesPage from './pages/UseCasesPage';

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
            {/* Pricing page disabled for now — restore by uncommenting the import,
                this route, and the entries marked "pricing disabled" in Navbar,
                Footer and Home. */}
            {/* <Route path="/pricing" element={<Pricing />} /> */}
            <Route path="/pricing" element={<Navigate to="/contact" replace />} />
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
            <Route path="/it" element={<ITPage />} />
            <Route path="/demo" element={<DemoPage />} />
            <Route path="/terms" element={<TermsOfServicePage />} />
            <Route path="/features" element={<AIAssistantsPage />} />
            <Route path="/security" element={<CustomAIPage />} />
            <Route path="/use-cases" element={<UseCasesPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
