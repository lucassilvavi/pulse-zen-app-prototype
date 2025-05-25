import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Components
import Layout from './components/Layout';

// Pages
import OnboardingWelcome from './pages/onboarding/Welcome';
import OnboardingBenefits from './pages/onboarding/Benefits';
import OnboardingFeatures from './pages/onboarding/Features';
import OnboardingSetup from './pages/onboarding/Setup';
import Home from './pages/Home';
import Breathing from './pages/Breathing';
import BreathingSession from './pages/BreathingSession';
import SOS from './pages/SOS';
import SOSSession from './pages/SOSSession';
import Journal from './pages/Journal';
import JournalEntry from './pages/JournalEntry';
import Profile from './pages/Profile';

const App: React.FC = () => {
  // Simple state to check if user has completed onboarding
  // In a real app, this would be stored in localStorage or a backend
  const [onboardingComplete, setOnboardingComplete] = React.useState(false);

  const completeOnboarding = () => {
    setOnboardingComplete(true);
  };

  return (
    <Router>
      <Layout>
        <Routes>
          {/* Redirect to onboarding or home based on onboarding status */}
          <Route path="/" element={
            onboardingComplete ? <Navigate to="/home" /> : <Navigate to="/onboarding/welcome" />
          } />

          {/* Onboarding Flow */}
          <Route path="/onboarding/welcome" element={<OnboardingWelcome />} />
          <Route path="/onboarding/benefits" element={<OnboardingBenefits />} />
          <Route path="/onboarding/features" element={<OnboardingFeatures />} />
          <Route path="/onboarding/setup" element={<OnboardingSetup onComplete={completeOnboarding} />} />

          {/* Main App Routes */}
          <Route path="/home" element={<Home />} />
          <Route path="/breathing" element={<Breathing />} />
          <Route path="/breathing/session" element={<BreathingSession />} />
          <Route path="/sos" element={<SOS />} />
          <Route path="/sos/session" element={<SOSSession />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/journal/entry" element={<JournalEntry />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;