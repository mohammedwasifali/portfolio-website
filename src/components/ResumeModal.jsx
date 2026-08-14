import React from 'react';
import { X, Printer, Download, Award, GraduationCap, Briefcase, Code2, Globe, Mail, Phone, MapPin } from 'lucide-react';

const ResumeModal = ({ onClose }) => {
  const [isClosing, setIsClosing] = React.useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 650); // Slightly less than 0.7s to prevent flicker
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className={`modal-backdrop ${isClosing ? 'closing' : ''}`} onClick={handleClose}>
      <div className={`modal-content resume-modal-card ${isClosing ? 'closing' : ''}`} onClick={(e) => e.stopPropagation()}>
        
        {/* Modal Controls Header */}
        <div className="resume-modal-top-bar no-print">
          <div className="bar-title">
            <GraduationCap size={18} className="icon-cyan" />
            <span>Mohammed Wasif Ali - Curriculum Vitae</span>
          </div>

          <div className="bar-actions">
            <button onClick={handlePrint} className="resume-print-btn">
              <Printer size={14} />
              <span>Print / Save PDF</span>
            </button>
            <button onClick={handleClose} className="modal-close-btn-static">
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div className="printable-resume-body">
          
          {/* Header */}
          <div className="resume-header">
            <h1 className="resume-name">MOHAMMED WASIF ALI</h1>
            <div className="resume-contact-line code-font">
              <span><MapPin size={12} /> Karnataka, India</span>
              <span>•</span>
              <span><Mail size={12} /> mdwali0912@gmail.com</span>
              <span>•</span>
              <span><Phone size={12} /> +91 9482892540</span>
              <span>•</span>
              <span><a href="https://github.com/mohammedwasifali" style={{color: 'inherit', textDecoration: 'none'}}>GitHub</a></span>
              <span>•</span>
              <span><a href="https://www.linkedin.com/in/mohammed-wasif-ali-27484b2a2/" style={{color: 'inherit', textDecoration: 'none'}}>LinkedIn</a></span>
            </div>
            <p className="resume-summary-text">
              Final-year CS student with hands-on experience in full-stack development, machine learning, and applied AI research. Built end-to-end systems using Python, PyTorch, FastAPI, React, and SQL across healthcare and social-impact projects, backed by peer-reviewed conference papers and a Best Paper Award.
            </p>
          </div>

          {/* Education */}
          <div className="resume-section">
            <h2 className="resume-sec-title">EDUCATION</h2>
            <div className="resume-item">
              <div className="resume-item-header">
                <strong>B.E. in Computer Science & Engineering</strong> — KLE Technological University, Hubballi
                <span className="resume-date">Aug 2023 – Jun 2027</span>
              </div>
              <div className="resume-item-sub">
                <strong>CGPA: 8.96 / 10</strong> | Relevant Coursework: DSA, ML & Deep Learning, Generative AI, DBMS, Cloud Computing
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="resume-section">
            <h2 className="resume-sec-title">TECHNICAL SKILLS</h2>
            <div className="resume-skills-block">
              <div><strong>Programming:</strong> Python (3 yrs), C (3 yrs), C++ (2 yrs), SQL (2 yrs)</div>
              <div><strong>Machine Learning & AI:</strong> PyTorch, Scikit-learn, Few-Shot Learning, Transformer Architectures, Deep Learning</div>
              <div><strong>Data & Analytics:</strong> Pandas, NumPy, Exploratory Data Analysis, Data Preprocessing & Feature Engineering</div>
              <div><strong>Core CS:</strong> Data Structures & Algorithms, Operating Systems, DBMS, Computer Networks, OOP</div>
              <div><strong>Systems & Cloud:</strong> Linux, Cloud Computing Concepts, Git</div>
            </div>
          </div>

          {/* Projects */}
          <div className="resume-section">
            <h2 className="resume-sec-title">PROJECTS</h2>
            
            <div className="resume-item">
              <div className="resume-item-header">
                <strong>Multimodal Framework for Venous Disease Assessment (CEVI)</strong>
                <span className="resume-date">Jan 2026 – Present</span>
              </div>
              <div className="resume-item-sub">Team of 4 · Team Member</div>
              <p className="resume-item-body">
                Co-developed a multimodal AI healthcare platform with a practicing vascular surgeon, combining CEAP classification, MedSAM segmentation, and Doppler reflux detection to support clinical decision-making. Achieved 77.17% CEAP classification accuracy and built a longitudinal patient data pipeline using PyTorch, React, and FastAPI.
              </p>
            </div>

            <div className="resume-item">
              <div className="resume-item-header">
                <strong>Few-Shot Recognition of Rare Genetic Syndromes Using Facial Images</strong>
                <span className="resume-date">Sept 2025 – Dec 2025</span>
              </div>
              <div className="resume-item-sub">Team of 4 · Team Lead</div>
              <p className="resume-item-body">
                Built a prototype-based few-shot recognition system using ArcFace embeddings under severe class imbalance, trained on GPU-accelerated university infrastructure. Improved Top-K retrieval accuracy for rare syndrome identification on the GMDB dataset in low-data settings; work earned a Best Paper Award.
              </p>
            </div>

            <div className="resume-item">
              <div className="resume-item-header">
                <strong>Emotion-Aware Multimodal RAG for Mental Health Support</strong>
                <span className="resume-date">Jan 2026 – May 2026</span>
              </div>
              <div className="resume-item-sub">Team of 4 · Team Member</div>
              <p className="resume-item-body">
                Developed an emotion-aware multimodal Retrieval-Augmented Generation framework integrating BLIP, OCR, Whisper, SpeechBrain, and Coqui TTS. Enabled the system to process image, text, and voice input and retrieve emotionally aligned responses; accepted for publication at ICCIS 2026 (Springer LNNS, Scopus-indexed).
              </p>
            </div>

            <div className="resume-item">
              <div className="resume-item-header">
                <strong>Blockchain-Based Tokenised Access Control System</strong>
                <span className="resume-date">Jan 2026 – May 2026</span>
              </div>
              <div className="resume-item-sub">Team of 4 · Team Lead</div>
              <p className="resume-item-body">
                Led development of a decentralised corporate access-control system on Solidity/Ethereum with Hardhat, Ethers.js, and MetaMask. Implemented role-based token authorisation, token expiry/transfer, and an immutable blockchain audit log.
              </p>
            </div>

            <div className="resume-item">
              <div className="resume-item-header">
                <strong>5G Network Slice Orchestration with Dynamic Resource Management</strong>
                <span className="resume-date">Jan 2026 – May 2026</span>
              </div>
              <div className="resume-item-sub">Team of 4 · Team Lead</div>
              <p className="resume-item-body">
                Led development of a 5G network-slicing simulation covering eMBB, URLLC, and mMTC service classes. Built dynamic resource allocation and real-time traffic monitoring using Python, Flask, React.js, and Scapy.
              </p>
            </div>
          </div>

          {/* Research & Publications */}
          <div className="resume-section">
            <h2 className="resume-sec-title">RESEARCH & PUBLICATIONS</h2>
            <ul className="resume-list">
              <li>
                <strong>Ali, M.W. et al.</strong> "Few-Shot Detection of Genetic Syndromes Using the FGDD Dataset" — <em>CML 2026 Conference</em>. Designed the few-shot framework and led experiments.
              </li>
              <li>
                <strong>Ali, M.W. et al.</strong> "Few-Shot Recognition of Rare Genetic Syndromes Using Facial Images" — <em>SCI 2026 Conference</em>. <strong>Best Paper Award</strong>. Led model development and ArcFace pipeline.
              </li>
              <li>
                <strong>Ali, M.W. et al.</strong> "Emotion-Aware Multimodal Retrieval-Augmented Generation for Mental Health Support" — <em>Accepted, ICCIS 2026 (Springer LNNS, Scopus-indexed)</em>.
              </li>
              <li>
                <strong>Ali, M.W. et al.</strong> "Event Recognition in UAV Videos Using Deep Spatio-Temporal Learning" — <em>Manuscript in preparation, 2026</em>.
              </li>
            </ul>
          </div>

          {/* Certifications & Additional Courses */}
          <div className="resume-section">
            <h2 className="resume-sec-title">CERTIFICATIONS & ADDITIONAL COURSES</h2>
            <ul className="resume-list">
              <li>Mastering Data Structures & Algorithms using C and C++ — Udemy, 76 hours, 2026</li>
              <li>JNCIA-Junos (Junos Associate) — HPE Juniper Networking, 2025</li>
              <li>Jenkins for DevOps: Jenkins Configuration for DevOps — Infosys Springboard, 2025</li>
              <li>DevOps Mindset: Understanding DevOps Tools — Infosys Springboard, 2025</li>
              <li>Programming in C, C++, Java, and Python — KR Computers, Hubballi, India, 2023</li>
            </ul>
          </div>

          {/* Achievements & Activities */}
          <div className="resume-section">
            <h2 className="resume-sec-title">ACHIEVEMENTS & ACTIVITIES</h2>
            <ul className="resume-list">
              <li><strong>Best Paper Award</strong> — SCI 2026 Conference, for few-shot rare syndrome recognition research.</li>
              <li><strong>Participant</strong> — "Innovate with GolStats" Hackathon, University Grants Commission (MoE), 2025.</li>
              <li><strong>Volunteer Organiser</strong> — DTSI Community Outreach Initiative, Dharwad (50+ residents engaged), 2022.</li>
            </ul>
          </div>

          {/* Languages */}
          <div className="resume-section">
            <h2 className="resume-sec-title">LANGUAGES</h2>
            <p className="resume-lang-text">English (proficient) | Hindi (fluent) | Kannada (fluent) | Urdu (native)</p>
          </div>

        </div>

      </div>

      <style>{`
        .resume-modal-card {
          width: 100%;
          max-width: 820px;
          max-height: 90vh;
          overflow-y: auto;
          padding: 2rem;
          background: #000000;
          color: #ffffff;
          border-radius: 24px;
          border: 1px solid rgba(255, 255, 255, 0.15);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
        }

        .resume-modal-top-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 1rem;
          margin-bottom: 1.5rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        }

        .bar-title {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 700;
          font-size: 1rem;
          color: #ffffff;
        }

        .bar-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .resume-print-btn {
          background: rgba(255, 255, 255, 0.1);
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.2);
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          border-radius: 9999px;
          font-weight: 500;
          font-size: 0.85rem;
          cursor: pointer;
          transition: all 0.2s;
        }

        .resume-print-btn:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-1px);
        }

        .modal-close-btn-static {
          background: none;
          border: none;
          color: #aaaaaa;
          cursor: pointer;
          transition: color 0.2s;
        }
        .modal-close-btn-static:hover { 
          color: #ffffff; 
        }

        .printable-resume-body {
          color: #ffffff;
          font-size: 0.92rem;
          line-height: 1.5;
        }

        .resume-header {
          text-align: center;
          border-bottom: 2px solid rgba(255, 255, 255, 0.2);
          padding-bottom: 1rem;
          margin-bottom: 1.25rem;
        }

        .resume-name {
          font-size: 1.8rem;
          letter-spacing: 0.05em;
          margin-bottom: 0.3rem;
          color: #ffffff;
        }

        .resume-contact-line {
          font-size: 0.8rem;
          color: #00d2ff;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          margin-bottom: 0.6rem;
          flex-wrap: wrap;

          span { display: inline-flex; align-items: center; gap: 0.2rem; }
        }

        .resume-summary-text {
          font-style: italic;
          font-size: 0.88rem;
          color: #dddddd;
          max-width: 680px;
          margin: 0 auto;
        }

        .resume-section {
          margin-bottom: 1.25rem;
        }

        .resume-sec-title {
          font-size: 0.95rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: #00d2ff;
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
          padding-bottom: 0.25rem;
          margin-bottom: 0.75rem;
        }

        .resume-item {
          margin-bottom: 0.85rem;
        }

        .resume-item-header {
          display: flex;
          justify-content: space-between;
          font-size: 0.92rem;
          color: #ffffff;
        }

        .resume-date {
          font-family: var(--font-code);
          font-size: 0.78rem;
          color: #bbbbbb;
        }

        .resume-item-sub {
          font-size: 0.82rem;
          color: #bbbbbb;
          margin-bottom: 0.25rem;
        }

        .resume-item-body {
          font-size: 0.88rem;
          color: #dddddd;
        }

        .resume-list {
          padding-left: 1.25rem;
          li { margin-bottom: 0.4rem; color: #dddddd; }
        }

        .resume-skills-block {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
          font-size: 0.88rem;
          color: #dddddd;
          strong { color: #ffffff; }
        }

        .resume-lang-text {
          font-size: 0.88rem;
          color: #dddddd;
        }

        @media print {
          /* Force display:none on all main app elements so they take up 0 space */
          main, footer, canvas, .ambient-background, .grid-overlay {
            display: none !important;
          }

          /* Reset structural elements so they don't force page breaks */
          html, body, #root, .app-main-wrapper {
            height: auto !important;
            min-height: 0 !important;
            padding: 0 !important;
            margin: 0 !important;
            background: #ffffff !important;
          }
          
          /* Only show the modal content cleanly */
          .resume-modal-card {
            position: static !important;
            max-width: none !important;
            max-height: none !important;
            overflow: visible !important;
            box-shadow: none !important;
            border: none !important;
            background: #ffffff !important;
            color: #000000 !important;
            padding: 0 !important;
            margin: 0 !important;
          }

          /* Hide UI buttons and backdrop during print */
          .no-print, .no-print * { 
            display: none !important; 
          }
          .modal-backdrop { 
            position: static !important; 
            background: none !important; 
            backdrop-filter: none !important; 
            padding: 0 !important;
          }

          /* Force text to solid black/dark grays for clean printing */
          .printable-resume-body, .printable-resume-body * { 
            color: #000000 !important; 
          }
          .resume-sec-title { 
            color: #000000 !important; 
            border-bottom: 1px solid #000000 !important; 
          }
          .resume-contact-line { 
            color: #333333 !important; 
          }
          .resume-item-body, .resume-list li { 
            color: #222222 !important; 
          }
        }
      `}</style>
    </div>
  );
};

export default ResumeModal;
