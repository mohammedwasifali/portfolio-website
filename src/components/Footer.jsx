import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-container">
      <div className="container">
        
        <div className="footer-top">
          
          <div className="footer-brand">
            <a href="#about" className="apple-logo">
            </a>
            <p className="footer-tagline">
              Engineering intelligent deep learning models, metric learning systems, and clinical AI frameworks.
            </p>
          </div>

          <div className="footer-links-group">
            <div className="footer-col">
              <span className="col-title">Navigation</span>
              <a href="#about">Overview</a>
              <a href="#research">Research</a>
              <a href="#projects">Projects</a>
              <a href="#skills">Skills</a>
              <a href="#education">Education</a>
              <a href="#contact">Contact</a>
            </div>

            <div className="footer-col">
              <span className="col-title">Featured Works</span>
              <a href="#research">SCI 2026 Best Paper</a>
              <a href="#research">CML 2026 FGDD</a>
              <a href="#projects">CEVI Clinical AI</a>
              <a href="#projects">UAV Spatio-Temporal</a>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <p className="copyright-text">
            © {new Date().getFullYear()} Mohammed Wasif Ali. All rights reserved.
          </p>

          <div className="footer-right-actions">
            <div className="social-icons">
              <a href="https://github.com/mohammedwasifali" target="_blank" rel="noopener noreferrer" className="social-btn" title="GitHub">
                <Github size={16} />
              </a>
              <a href="https://www.linkedin.com/in/mohammed-wasif-ali-27484b2a2/" target="_blank" rel="noopener noreferrer" className="social-btn" title="LinkedIn">
                <Linkedin size={16} />
              </a>
              <a href="mailto:mdwali0912@gmail.com" className="social-btn" title="Email">
                <Mail size={16} />
              </a>
            </div>

            <button onClick={scrollToTop} className="btn-back-to-top" title="Scroll to Top">
              <ArrowUp size={16} />
            </button>
          </div>
        </div>

      </div>

      <style>{`
        .footer-container {
          background: #ffffff;
          border-top: 1px solid var(--border-glass);
          padding: 4rem 0 2rem 0;
          position: relative;
          z-index: 10;
        }

        .footer-top {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 3rem;
          margin-bottom: 3.5rem;
        }

        .footer-brand {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 1rem;
        }

        .footer-tagline {
          font-size: 0.92rem;
          color: var(--text-muted);
          max-width: 380px;
          line-height: 1.6;
        }

        .footer-links-group {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        }

        .footer-col {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;

          a {
            color: var(--text-muted);
            text-decoration: none;
            font-size: 0.88rem;
            transition: color 0.2s ease;

            &:hover {
              color: var(--accent-apple-blue);
            }
          }
        }

        .col-title {
          font-family: var(--font-apple);
          font-weight: 600;
          font-size: 0.95rem;
          color: var(--text-main);
          margin-bottom: 0.25rem;
        }

        .footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 2rem;
          border-top: 1px solid var(--border-glass);
        }

        .copyright-text {
          font-size: 0.85rem;
          color: var(--text-dim);
        }

        .footer-right-actions {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .social-icons {
          display: flex;
          gap: 0.5rem;
        }

        .social-btn {
          width: 34px; height: 34px;
          border-radius: 9999px;
          background: rgba(0, 0, 0, 0.04);
          border: 1px solid var(--border-glass);
          color: var(--text-muted);
          display: flex; align-items: center; justify-content: center;
          text-decoration: none;
          transition: all 0.2s ease;

          &:hover {
            color: var(--text-main);
            background: rgba(0, 0, 0, 0.08);
          }
        }

        .btn-back-to-top {
          width: 36px;
          height: 36px;
          border-radius: 9999px;
          background: #1d1d1f;
          border: none;
          color: #ffffff;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.25s ease;

          &:hover {
            background: #333336;
            transform: translateY(-2px);
          }
        }

        @media (max-width: 768px) {
          .footer-top {
            grid-template-columns: 1fr;
          }
          .footer-bottom {
            flex-direction: column;
            gap: 1.5rem;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
