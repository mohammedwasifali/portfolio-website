import React, { useState, useEffect } from 'react';
import { FolderGit2, BookOpen, Brain, GraduationCap, Mail, FileText } from 'lucide-react';

const StickyNav = ({ onOpenResume, isHidden }) => {
  const [isScrolledDown, setIsScrolledDown] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          
          // If scrolled down more than 150px and moving down, hide
          if (currentScrollY > lastScrollY && currentScrollY > 150) {
            setIsScrolledDown(true);
          } else {
            // Scrolling up or at the very top, show
            setIsScrolledDown(false);
          }
          
          lastScrollY = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    const handleMouseMove = (e) => {
      // If the user moves their cursor to the top 100px of the screen, force show it
      if (e.clientY < 100) {
        setIsScrolledDown(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const shouldHide = isHidden || isScrolledDown;

  return (
    <div className={`sticky-nav-wrapper ${shouldHide ? 'whoosh-out' : ''}`}>
      <div className="hero-nav-tabs animate-fade-in" style={{ animationDelay: '0.3s' }}>
        <a href="#projects" className="hero-nav-tab">
          <FolderGit2 size={16} />
          <span>Projects</span>
        </a>
        <a href="#research" className="hero-nav-tab">
          <BookOpen size={16} />
          <span>Research</span>
        </a>
        <a href="#skills" className="hero-nav-tab">
          <Brain size={16} />
          <span>Skills</span>
        </a>
        <a href="#education" className="hero-nav-tab">
          <GraduationCap size={16} />
          <span>Education</span>
        </a>
        <a href="#contact" className="hero-nav-tab">
          <Mail size={16} />
          <span>Contact</span>
        </a>
        <button onClick={onOpenResume} className="hero-nav-tab">
          <FileText size={16} />
          <span>CV</span>
        </button>
      </div>
      
      <style>{`
        .sticky-nav-wrapper {
          position: sticky;
          top: 1.5rem;
          z-index: 1000;
          width: 100%;
          display: flex;
          justify-content: center;
          pointer-events: none;
          margin-bottom: 2rem;
          margin-top: -2rem; /* Pull it slightly up closer to the hero section */
          transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        .whoosh-out {
          transform: translateY(-100px) scale(0.5) rotate(5deg);
          opacity: 0;
          pointer-events: none;
        }

        .hero-nav-tabs {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          justify-content: center;
          padding: 0.5rem;
          pointer-events: auto;
        }

        .hero-nav-tab {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.85rem 1.5rem;
          background: rgba(255, 255, 255, 0.35);
          backdrop-filter: blur(40px) saturate(200%);
          -webkit-backdrop-filter: blur(40px) saturate(200%);
          border: 1px solid rgba(255, 255, 255, 0.8);
          border-bottom: 1px solid rgba(255, 255, 255, 0.4);
          border-radius: 9999px;
          color: var(--text-main);
          font-weight: 500;
          font-size: 0.95rem;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
          box-shadow: 0 8px 32px rgba(0,0,0,0.06), inset 0 1px 1px rgba(255, 255, 255, 0.5);
        }

        .hero-nav-tab:hover {
          background: rgba(255, 255, 255, 0.55);
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 12px 40px rgba(0,0,0,0.08), inset 0 1px 1px rgba(255, 255, 255, 0.8);
          color: var(--accent-apple-blue);
        }
        
        @media (max-width: 768px) {
          .sticky-nav-wrapper {
            top: 0.5rem;
            margin-top: -1rem;
          }
          .hero-nav-tab {
            padding: 0.75rem 1.25rem;
            font-size: 0.85rem;
          }
        }
      `}</style>
    </div>
  );
};

export default StickyNav;
