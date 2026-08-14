import React, { useState, useEffect } from 'react';
import { FileText, Menu, X, ArrowUpRight } from 'lucide-react';

const Navbar = ({ onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['about', 'research', 'projects', 'skills', 'education', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Overview', href: '#about' },
    { name: 'Research', href: '#research' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`apple-navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-inner">
        
        {/* Brand Logo */}
        <a href="#about" className="apple-logo">
        </a>

        {/* Center Nav Links */}
        <nav className="apple-nav-links">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`apple-nav-item ${activeSection === link.href.substring(1) ? 'active' : ''}`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Action */}
        <div className="apple-nav-actions">
          <button onClick={onOpenResume} className="btn btn-secondary nav-pill-btn">
            <FileText size={15} />
            <span>CV</span>
          </button>

          <a href="#contact" className="btn btn-primary nav-pill-btn">
            <span>Collaborate</span>
            <ArrowUpRight size={14} />
          </a>

          <button
            className="apple-mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="apple-mobile-menu" onClick={() => setMobileMenuOpen(false)}>
          <div className="mobile-content" onClick={(e) => e.stopPropagation()}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`mobile-link ${activeSection === link.href.substring(1) ? 'active' : ''}`}
              >
                {link.name}
              </a>
            ))}
            <div className="mobile-actions mt-4">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="btn btn-secondary w-full"
              >
                View Full Curriculum Vitae
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .apple-navbar {
          position: fixed;
          top: 0; left: 0; width: 100%;
          height: var(--nav-height);
          z-index: 100;
          transition: all 0.3s ease;
          background: rgba(255, 255, 255, 0.65);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(0, 0, 0, 0.06);
        }

        .apple-navbar.scrolled {
          background: var(--bg-glass-nav);
          border-bottom-color: var(--border-glass);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
        }

        .nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 100%;
        }

        .apple-logo {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          text-decoration: none;
        }

        .logo-name {
          font-weight: 600;
          font-size: 1.05rem;
          color: var(--text-main);
          letter-spacing: -0.02em;
        }

        .logo-badge {
          font-size: 0.68rem;
          padding: 0.15rem 0.45rem;
          border-radius: 9999px;
          background: rgba(0, 113, 227, 0.1);
          color: var(--accent-apple-blue);
          font-weight: 600;
        }

        .apple-nav-links {
          display: flex;
          align-items: center;
          gap: 1.75rem;
        }

        .apple-nav-item {
          color: var(--text-muted);
          text-decoration: none;
          font-size: 0.88rem;
          font-weight: 500;
          transition: color 0.2s ease;

          &:hover, &.active {
            color: var(--text-main);
          }
        }

        .apple-nav-actions {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .nav-pill-btn {
          padding: 0.45rem 1rem;
          font-size: 0.82rem;
        }

        .apple-mobile-toggle {
          display: none;
          background: none;
          border: none;
          color: var(--text-main);
          cursor: pointer;
        }

        .apple-mobile-menu {
          position: fixed;
          inset: 0;
          top: var(--nav-height);
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(25px);
          z-index: 99;
          padding: 2rem 1.75rem;
        }

        .mobile-content {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .mobile-link {
          color: var(--text-muted);
          text-decoration: none;
          font-size: 1.25rem;
          font-weight: 500;

          &.active { color: var(--text-main); }
        }

        @media (max-width: 850px) {
          .apple-nav-links, .nav-pill-btn { display: none; }
          .apple-mobile-toggle { display: block; }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
