import React, { useState } from 'react';
import CanvasBackground from './components/CanvasBackground';
import Hero from './components/Hero';
import ResearchPublications from './components/ResearchPublications';
import ProjectsShowcase from './components/ProjectsShowcase';
import SkillsRadar from './components/SkillsRadar';
import TimelineEducation from './components/TimelineEducation';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import StickyNav from './components/StickyNav';

function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isSectionModalOpen, setIsSectionModalOpen] = useState(false);

  const isNavHidden = isResumeOpen || isSectionModalOpen;

  return (
    <div className="app-main-wrapper">
      {/* Dynamic Animated Canvas Background */}
      <CanvasBackground />

      {/* Subtle Tech Grid Background */}
      <div className="grid-overlay"></div>

      {/* Main Section Content */}
      <main>
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        
        {/* Sticky Global Navigation */}
        <StickyNav onOpenResume={() => setIsResumeOpen(true)} isHidden={isNavHidden} />

        <ResearchPublications onModalChange={setIsSectionModalOpen} />
        <ProjectsShowcase onModalChange={setIsSectionModalOpen} />
        <SkillsRadar />
        <TimelineEducation />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Full Resume View Modal */}
      {isResumeOpen && (
        <ResumeModal onClose={() => setIsResumeOpen(false)} />
      )}
    </div>
  );
}

export default App;
