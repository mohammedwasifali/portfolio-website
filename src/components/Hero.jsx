import React from 'react';

const Hero = ({ onOpenResume }) => {
  return (
    <section id="about" className="hero-apple-section">
      <div className="container hero-apple-container">

        {/* Main Intro Card */}
        <div className="hero-intro-card animate-fade-in" style={{ animationDelay: '0.1s' }}>

          {/* Top Half - Dynamic Mesh Gradient */}
          <div className="hero-card-top">
            {/* Grain Overlay */}
            <div className="hero-card-grain"></div>
            
            <div className="hero-card-top-bg">
              <div className="mesh-blob mesh-blob-1"></div>
              <div className="mesh-blob mesh-blob-2"></div>
              <div className="mesh-blob mesh-blob-3"></div>
              <div className="mesh-blob mesh-blob-4"></div>
            </div>
            {/* Photo Wrapper */}
            <div className="hero-photo-wrapper">
              <img src="/IMG_1984.jpeg" alt="Mohammed Wasif Ali" className="hero-photo" />
            </div>
          </div>

          {/* Bottom Half - Description */}
          <div className="hero-card-bottom">
            <h1 className="hero-apple-title">
              Mohammed Wasif Ali.
            </h1>
            <p className="hero-apple-subtitle">
              CS student with hands-on experience in full-stack development, machine learning, and applied AI research. Built end-to-end systems using Python, PyTorch, FastAPI, React, and SQL across healthcare and social-impact projects, backed by peer-reviewed conference papers and a Best Paper Award.
            </p>
          </div>
        </div>

      </div>

      <style>{`
        .hero-apple-section {
          padding-top: 5rem;
          padding-bottom: 3rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-apple-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 92%;
          max-width: 1400px;
        }

        /* Intro Card */
        .hero-intro-card {
          width: 100%;
          background: var(--bg-card);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid var(--border-glass);
          border-radius: 24px;
          overflow: hidden; /* This hides the bottom corners of the card itself */
          
          /* CRITICAL BUGFIX FOR SAFARI IPHONE: 
             Forces border-radius clipping on elements that use filter: blur() or transforms */
          -webkit-mask-image: -webkit-radial-gradient(white, black);
          transform: translateZ(0);

          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
          margin-bottom: 2rem;
          position: relative;
        }

        /* Top Half Container */
        .hero-card-top {
          height: 240px;
          position: relative;
          background: #0a1118; /* Restored deep base color for rich gas effect */
        }

        /* Grain Overlay (sits above the blur, below the photo) */
        .hero-card-grain {
          position: absolute;
          inset: 0;
          background: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
          opacity: 0.15;
          mix-blend-mode: overlay;
          z-index: 2;
          pointer-events: none;
        }

        /* The Background Layer that holds the mesh */
        .hero-card-top-bg {
          position: absolute;
          inset: 0;
          overflow: hidden; 
          filter: blur(25px); /* Single blur melts the colors into gas */
          -webkit-filter: blur(25px);
          transform: scale(1.2); /* Prevents edge bleeding */
          z-index: 1;
        }

        /* Dynamic Mesh Blobs */
        .mesh-blob {
          position: absolute;
          border-radius: 50%;
          will-change: transform;
        }

        .mesh-blob-1 {
          top: -30%; left: -10%;
          width: 70%; height: 130%;
          background: rgba(37, 99, 235, 0.9); /* Sapphire */
          animation: meshSway1 6s infinite alternate ease-in-out;
        }

        .mesh-blob-2 {
          bottom: -40%; right: -10%;
          width: 80%; height: 110%;
          background: rgba(6, 182, 212, 0.9); /* Cyber Cyan */
          animation: meshSway2 8s infinite alternate ease-in-out;
        }

        .mesh-blob-3 {
          top: 20%; left: 30%;
          width: 60%; height: 110%;
          background: rgba(16, 185, 129, 0.8); /* Emerald Green */
          animation: meshSway3 7s infinite alternate ease-in-out;
        }
        
        .mesh-blob-4 {
          top: -20%; right: 20%;
          width: 70%; height: 100%;
          background: rgba(79, 70, 229, 0.9); /* Indigo */
          animation: meshSway4 9s infinite alternate ease-in-out;
        }

        @keyframes meshSway1 {
          0% { transform: translate(0, 0) scale(1) rotate(0deg); }
          50% { transform: translate(40%, 20%) scale(1.4) rotate(45deg); }
          100% { transform: translate(10%, 40%) scale(0.9) rotate(90deg); }
        }
        
        @keyframes meshSway2 {
          0% { transform: translate(0, 0) scale(1) rotate(0deg); }
          50% { transform: translate(-40%, -20%) scale(1.3) rotate(-45deg); }
          100% { transform: translate(-50%, 20%) scale(1.1) rotate(-90deg); }
        }
        
        @keyframes meshSway3 {
          0% { transform: translate(0, 0) scale(1) rotate(0deg); }
          50% { transform: translate(-30%, -40%) scale(0.8) rotate(30deg); }
          100% { transform: translate(30%, -30%) scale(1.3) rotate(60deg); }
        }
        
        @keyframes meshSway4 {
          0% { transform: translate(0, 0) scale(1) rotate(0deg); }
          50% { transform: translate(40%, -20%) scale(1.2) rotate(-30deg); }
          100% { transform: translate(-30%, 40%) scale(0.9) rotate(45deg); }
        }

        /* Photo Wrapper */
        .hero-photo-wrapper {
          position: absolute;
          bottom: -90px;
          left: 60px;
          width: 220px;
          height: 220px;
          border-radius: 50%;
          padding: 2px;
          background: #ffffff;
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .hero-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
          border-radius: 50%;
        }

        /* Bottom Half */
        .hero-card-bottom {
          padding: 5rem 3rem 3rem 3rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .hero-apple-title {
          font-size: 2.8rem;
          line-height: 1.1;
          letter-spacing: -0.04em;
          font-weight: 700;
          color: var(--text-main);
          margin-top: 1rem;
        }

        .hero-apple-subtitle {
          font-size: 1.1rem;
          color: var(--text-muted);
          line-height: 1.6;
          font-weight: 400;
          max-width: 1000px;
        }

        @media (max-width: 768px) {
          .hero-apple-section {
            padding-top: 3rem; 
            padding-bottom: 1rem;
          }
          .hero-apple-container {
            width: 92%; 
          }
          .hero-intro-card {
            margin-bottom: 1rem;
            border-radius: 20px;
          }
          .hero-card-top {
            height: 140px; 
          }
          .hero-photo-wrapper {
            width: 90px; /* Smaller photo since it's on the left */
            height: 90px;
            bottom: -45px; /* Overlaps exactly halfway */
            left: 1.5rem; /* Left-aligned */
            transform: none; /* Remove center transform */
          }
          .hero-card-bottom {
            padding: 3.5rem 1.5rem 1.5rem 1.5rem; /* Padding matches the left alignment */
            text-align: left; /* Left-align the text to match the photo */
          }
          .hero-apple-title {
            font-size: 2rem; 
            margin-top: 0;
          }
          .hero-apple-subtitle {
            font-size: 0.95rem; 
            line-height: 1.5;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
