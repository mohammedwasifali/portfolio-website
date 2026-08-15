import React, { useState } from 'react';
import { 
  Stethoscope, 
  Brain, 
  Video, 
  Route, 
  X,
  ArrowUpRight,
  ChevronRight
} from 'lucide-react';

const ProjectsShowcase = ({ onModalChange }) => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [sliderStyle, setSliderStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const [isClosing, setIsClosing] = useState(false);
  const [modalOrigin, setModalOrigin] = useState({ x: 0, y: 0 });
  const tabsRef = React.useRef([]);
  const containerRef = React.useRef(null);
  const scrollTimeoutRef = React.useRef(null);
  const scrollInitRef = React.useRef(false);
  
  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setSelectedProject(null);
      setIsClosing(false);
    }, 650);
  };

  const categories = ['All', 'Clinical AI', 'Few-Shot Learning', 'Generative AI', 'Blockchain', 'Systems & Networks', 'Computer Vision'];
  // Create a massive array (100 copies) to simulate infinite scroll flawlessly
  const infiniteCategories = Array(100).fill(categories).flat();

  React.useEffect(() => {
    if (onModalChange) {
      onModalChange(!!selectedProject);
    }
  }, [selectedProject, onModalChange]);

  React.useEffect(() => {
    // Track width and left for BOTH desktop and mobile
    const activeIndex = categories.indexOf(activeFilter);
    const activeTab = tabsRef.current[activeIndex];
    if (activeTab) {
      setSliderStyle({
        left: activeTab.offsetLeft,
        width: activeTab.offsetWidth,
        opacity: 1
      });
    }
  }, [activeFilter, categories]);

  // Mobile scroll tracking for Infinite Picker Wheel effect
  const lastVibratedIdx = React.useRef(-1);

  React.useEffect(() => {
    if (window.innerWidth > 768) return;

    const container = containerRef.current;
    if (!container) return;

    // Center the initial view on the exact middle of the massive array
    if (!scrollInitRef.current) {
      // Delay slightly to ensure DOM is fully painted so offsetLeft is correct
      setTimeout(() => {
        const middleCopyIdx = Math.floor(infiniteCategories.length / 2);
        const startIdx = middleCopyIdx - (middleCopyIdx % categories.length); 
        const targetBtn = tabsRef.current[startIdx];
        
        if (targetBtn) {
          const containerCenter = container.offsetWidth / 2;
          const buttonCenter = targetBtn.offsetLeft + targetBtn.offsetWidth / 2;
          container.scrollTo({ left: buttonCenter - containerCenter, behavior: 'auto' });
          scrollInitRef.current = true;
        }
      }, 100);
    }

    const handleScroll = () => {
      const containerCenter = container.getBoundingClientRect().left + container.offsetWidth / 2;
      let closestIdx = -1;
      let minDistance = Infinity;

      tabsRef.current.forEach((el, idx) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const elCenter = rect.left + rect.width / 2;
        const distance = Math.abs(containerCenter - elCenter);
        if (distance < minDistance) {
          minDistance = distance;
          closestIdx = idx;
        }
      });

      if (closestIdx !== -1 && closestIdx !== lastVibratedIdx.current) {
        lastVibratedIdx.current = closestIdx;
        if (navigator.vibrate) {
          navigator.vibrate(10);
        }
      }

      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      
      scrollTimeoutRef.current = setTimeout(() => {
        if (closestIdx !== -1) {
          const cat = infiniteCategories[closestIdx];
          setActiveFilter(prev => {
            if (prev !== cat) return cat;
            return prev;
          });
        }
      }, 60); // Debounce
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, []); // Run once to attach listener

  const projects = [
    {
      id: 'few-shot-fgdd',
      title: 'Few-Shot Detection of Genetic Syndromes Using the FGDD Dataset',
      category: 'Few-Shot Learning',
      period: 'Sept 2025 - Feb 2026',
      role: 'Team Lead (Size: 4)',
      icon: Brain,
      highlightBadge: '96.56% Acc',
      accuracy: 'Top-5: 96.56%',
      summary: 'Designed a few-shot learning framework integrating FT-Transformer and Prototypical Networks using PyTorch for tabular clinical data.',
      tech: ['PyTorch', 'Python', 'FT-Transformer', 'Prototypical Networks'],
      features: [
        'Integrated FT-Transformer and Prototypical Networks.',
        'Applied to tabular clinical data classification of genetic syndromes.',
        'Achieved 96.56% Top-5 accuracy in a 10-way, 3-shot evaluation.',
        'Demonstrated a privacy-preserving alternative to image-based diagnostics.'
      ],
      deepDive: 'Designed a few-shot learning framework integrating FT-Transformer and Prototypical Networks using PyTorch and Python for tabular clinical data classification of genetic syndromes. Achieved 96.56% Top-5 accuracy in a 10-way, 3-shot evaluation, demonstrating a privacy-preserving alternative to image-based diagnostics.'
    },
    {
      id: 'event-recognition-uav',
      title: 'Event Recognition in UAV Videos Using Deep Spatio-Temporal Learning',
      category: 'Computer Vision',
      period: 'Sept 2025 - Feb 2026',
      role: 'Team Member (Size: 4)',
      icon: Video,
      highlightBadge: '69.52% Acc',
      accuracy: '69.52% Acc',
      summary: 'Developed a Video Swin Transformer-based spatio-temporal model using PyTorch and CUDA for UAV aerial event classification.',
      tech: ['PyTorch', 'CUDA', 'Video Swin Transformer'],
      features: [
        'Developed a Video Swin Transformer-based spatio-temporal model.',
        'Trained the model on the university GPU server.',
        'Achieved 69.52% classification accuracy on the ERA dataset, outperforming the FuTH-Net baseline.',
        'Implemented the model training pipeline and video preprocessing.'
      ],
      deepDive: 'Developed a Video Swin Transformer-based spatio-temporal model using PyTorch and CUDA for UAV aerial event classification on the ERA dataset. Trained the model on the university GPU server and achieved 69.52% classification accuracy, outperforming the FuTH-Net baseline. Implemented the model training pipeline and video preprocessing.'
    },
    {
      id: 'subway-route-opt',
      title: 'Subway System Route Optimization Model',
      category: 'Systems & Networks',
      period: 'Aug 2024 - Nov 2024',
      role: 'Team Lead (Size: 4)',
      icon: Route,
      highlightBadge: 'Algorithm Opt',
      accuracy: 'Optimal Route',
      summary: 'Designed a graph-based metro routing optimization system using C++ and Python implementing Dijkstra’s shortest-path algorithm.',
      tech: ['C++', 'Python', 'Graph Algorithms'],
      features: [
        'Designed a graph-based metro routing optimization system.',
        'Implemented Dijkstra’s shortest-path algorithm to compute optimal routes.',
        'Minimized travel time between stations.',
        'Simulated traffic conditions to evaluate routing efficiency for smart city transportation.'
      ],
      deepDive: 'Designed a graph-based metro routing optimization system using C++ and Python implementing Dijkstra’s shortest-path algorithm to compute optimal routes between stations and minimize travel time. Simulated traffic conditions to evaluate routing efficiency for smart city transportation planning.'
    },
    {
      id: 'cevi-clinical-ai',
      title: 'Multimodal Framework for Venous Disease Assessment (CEVI)',
      category: 'Clinical AI',
      period: 'Jan 2026 - Present',
      role: 'Team Member (Size: 4)',
      icon: Stethoscope,
      highlightBadge: 'Clinical AI Deployment',
      accuracy: '77.17% CEAP Acc',
      summary: 'Co-developed a multimodal AI healthcare platform with a practicing vascular surgeon, combining CEAP classification, MedSAM segmentation, and Doppler reflux detection.',
      tech: ['PyTorch', 'MedSAM', 'FastAPI', 'React', 'SQL'],
      features: [
        'Achieved 77.17% CEAP classification accuracy to support clinical decision-making.',
        'MedSAM zero-shot segmentation for automated venous ulcer and lesion region highlighting.',
        'Doppler reflux detection to support diagnostics.',
        'Built a longitudinal patient data pipeline using PyTorch, React, and FastAPI.'
      ],
      deepDive: 'Co-developed a multimodal AI healthcare platform with a practicing vascular surgeon, combining CEAP classification, MedSAM segmentation, and Doppler reflux detection to support clinical decision-making. Achieved 77.17% CEAP classification accuracy and built a longitudinal patient data pipeline using PyTorch, React, and FastAPI.'
    },
    {
      id: 'few-shot-syndromes',
      title: 'Few-Shot Recognition of Rare Genetic Syndromes',
      category: 'Few-Shot Learning',
      period: 'Sept 2025 - Dec 2025',
      role: 'Team Lead (Size: 4)',
      icon: Brain,
      highlightBadge: 'Best Paper Award',
      accuracy: 'Improved Top-K',
      summary: 'Built a prototype-based few-shot recognition system using ArcFace embeddings under severe class imbalance, trained on GPU-accelerated university infrastructure.',
      tech: ['PyTorch', 'ArcFace', 'Few-Shot Learning', 'Python'],
      features: [
        'Prototype-based few-shot recognition system using ArcFace embeddings.',
        'Handled severe class imbalance during training on GPU-accelerated infrastructure.',
        'Improved Top-K retrieval accuracy for rare syndrome identification on the GMDB dataset.',
        'Research earned a Best Paper Award at SCI 2026.'
      ],
      deepDive: 'Built a prototype-based few-shot recognition system using ArcFace embeddings under severe class imbalance, trained on GPU-accelerated university infrastructure. Improved Top-K retrieval accuracy for rare syndrome identification on the GMDB dataset in low-data settings; work earned a Best Paper Award.'
    },
    {
      id: 'emotion-aware-rag',
      title: 'Emotion-Aware Multimodal RAG for Mental Health Support',
      category: 'Generative AI',
      period: 'Jan 2026 - May 2026',
      role: 'Team Member (Size: 4)',
      icon: Brain,
      highlightBadge: 'ICCIS 2026 Paper',
      accuracy: 'Multimodal',
      summary: 'Developed an emotion-aware multimodal Retrieval-Augmented Generation framework integrating BLIP, OCR, Whisper, SpeechBrain, and Coqui TTS.',
      tech: ['PyTorch', 'BLIP', 'Whisper', 'SpeechBrain', 'TTS'],
      features: [
        'Emotion-aware multimodal Retrieval-Augmented Generation framework.',
        'Integrates BLIP, OCR, Whisper, SpeechBrain, and Coqui TTS.',
        'Processes image, text, and voice input to retrieve emotionally aligned responses.',
        'Accepted for publication at ICCIS 2026 (Springer LNNS, Scopus-indexed).'
      ],
      deepDive: 'Developed an emotion-aware multimodal Retrieval-Augmented Generation framework integrating BLIP, OCR, Whisper, SpeechBrain, and Coqui TTS. Enabled the system to process image, text, and voice input and retrieve emotionally aligned responses; accepted for publication at ICCIS 2026 (Springer LNNS, Scopus-indexed).'
    },
    {
      id: 'blockchain-access',
      title: 'Blockchain-Based Tokenised Access Control System',
      category: 'Blockchain',
      period: 'Jan 2026 - May 2026',
      role: 'Team Lead (Size: 4)',
      icon: Route,
      highlightBadge: 'Decentralised Auth',
      accuracy: 'Immutable Log',
      summary: 'Led development of a decentralised corporate access-control system on Solidity/Ethereum with Hardhat, Ethers.js, and MetaMask.',
      tech: ['Solidity', 'Ethereum', 'Hardhat', 'Ethers.js', 'MetaMask'],
      features: [
        'Decentralised corporate access-control system on Solidity/Ethereum.',
        'Implemented role-based token authorisation.',
        'Enabled token expiry and secure transfer mechanisms.',
        'Provided an immutable blockchain audit log for compliance and security.'
      ],
      deepDive: 'Led development of a decentralised corporate access-control system on Solidity/Ethereum with Hardhat, Ethers.js, and MetaMask. Implemented role-based token authorisation, token expiry/transfer, and an immutable blockchain audit log.'
    },
    {
      id: '5g-network-slicing',
      title: '5G Network Slice Orchestration with Dynamic Resource Mgmt',
      category: 'Systems & Networks',
      period: 'Jan 2026 - May 2026',
      role: 'Team Lead (Size: 4)',
      icon: Route,
      highlightBadge: 'Network Simulation',
      accuracy: 'Dynamic Allocation',
      summary: 'Led development of a 5G network-slicing simulation covering eMBB, URLLC, and mMTC service classes.',
      tech: ['Python', 'Flask', 'React.js', 'Scapy'],
      features: [
        '5G network-slicing simulation covering eMBB, URLLC, and mMTC service classes.',
        'Dynamic resource allocation based on real-time demands.',
        'Real-time traffic monitoring and visualization.',
        'Built using Python, Flask, React.js, and Scapy.'
      ],
      deepDive: 'Led development of a 5G network-slicing simulation covering eMBB, URLLC, and mMTC service classes. Built dynamic resource allocation and real-time traffic monitoring using Python, Flask, React.js, and Scapy.'
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="section-padding projects-apple-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="sub-tag">Portfolio & Systems</span>
          <h2>Featured AI Projects</h2>
          <p>
            End-to-end machine learning pipelines, clinical diagnostic tools, and high-performance algorithms.
          </p>
        </div>

        {/* iOS-Style Segmented Control Filter Bar */}
        <div className="segmented-wrapper" style={{ position: 'relative' }}>
          {/* Mobile Fixed Center Bubble */}
          <div 
            className="mobile-fixed-bubble" 
            style={{ width: `${sliderStyle.width}px` }} 
          />

          <div className="segmented-control-container" ref={containerRef}>
            <div className="segmented-control" style={{ position: 'relative' }}>
              <div 
                className="desktop-slider-bubble"
                style={{
                  position: 'absolute',
                  top: '4px',
                  height: 'calc(100% - 8px)',
                  left: `${sliderStyle.left}px`,
                  width: `${sliderStyle.width}px`,
                  opacity: sliderStyle.opacity,
                  transition: 'all 0.5s cubic-bezier(0.22, 1, 0.36, 1)',
                  borderRadius: '9999px',
                  background: 'linear-gradient(180deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.05) 100%)',
                  backdropFilter: 'blur(30px) saturate(250%)',
                  WebkitBackdropFilter: 'blur(30px) saturate(250%)',
                  border: '1px solid rgba(255, 255, 255, 0.6)',
                  boxShadow: 'inset 0 6px 10px rgba(255,255,255,0.9), inset 0 -4px 6px rgba(0,0,0,0.1), 0 15px 30px rgba(0,0,0,0.2)',
                  pointerEvents: 'none',
                  zIndex: 1
                }}
              />
              {infiniteCategories.map((cat, idx) => (
                <button
                  key={`${cat}-${idx}`}
                  ref={el => tabsRef.current[idx] = el}
                  onClick={(e) => {
                    setActiveFilter(cat);
                    if (window.innerWidth <= 768) {
                      const container = containerRef.current;
                      if (container) {
                        const containerCenter = container.offsetWidth / 2;
                        const buttonCenter = e.currentTarget.offsetLeft + e.currentTarget.offsetWidth / 2;
                        container.scrollTo({
                          left: buttonCenter - containerCenter,
                          behavior: 'smooth'
                        });
                      }
                    }
                  }}
                  className={`segment-btn ${activeFilter === cat ? 'active' : ''} ${idx >= categories.length ? 'mobile-only-tab' : ''}`}
                  style={{ 
                    position: 'relative', 
                    zIndex: activeFilter === cat ? 2 : 0,
                    transition: 'color 0.8s ease'
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div key={project.id} className="project-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="project-header">
                <div className="project-icon">
                  <project.icon size={20} strokeWidth={2} />
                </div>
                <div className="project-badges">
                  <span className="badge badge-primary">{project.highlightBadge}</span>
                </div>
              </div>

              <div className="project-content">
                <span className="project-category">{project.category}</span>
                <h3>{project.title}</h3>
                <p className="project-summary">{project.summary}</p>
                
                <div className="project-tech-stack">
                  {project.tech.map((t, i) => (
                    <span key={i} className="tech-chip">{t}</span>
                  ))}
                </div>
              </div>

              <div className="project-footer">
                <button 
                  className="read-more-btn"
                  onClick={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      const deltaX = (rect.left + rect.width / 2) - window.innerWidth / 2;
                      const deltaY = rect.top - window.innerHeight / 2;
                      setModalOrigin({ x: deltaX, y: deltaY });
                      setSelectedProject(project);
                    }}
                >
                  View Details <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className={`modal-overlay ${isClosing ? 'closing' : ''}`} onClick={handleClose}>
          <div 
            className="modal-content" 
            onClick={(e) => e.stopPropagation()}
            style={{
              '--origin-x': `${modalOrigin.x}px`,
              '--origin-y': `${modalOrigin.y}px`
            }}
          >
            <div className="modal-header">
              <div className="modal-title-group">
                <span className="modal-category">{selectedProject.category}</span>
                <h3>{selectedProject.title}</h3>
              </div>
              <button onClick={handleClose} className="modal-close-btn">
                <X size={20} />
              </button>
            </div>

            <div className="modal-body">
              <div className="modal-section">
                <h4>System Architecture Overview</h4>
                <p className="abstract-text">{selectedProject.deepDive}</p>
              </div>

              <div className="modal-section">
                <h4>Key Capabilities</h4>
                <ul className="modal-bullet-list">
                  {selectedProject.features.map((feat, idx) => (
                    <li key={idx}>
                      <ChevronRight size={14} className="text-blue flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="modal-section">
                <h4>Tech Stack</h4>
                <div className="project-apple-tech">
                  {selectedProject.tech.map((t, idx) => (
                    <span key={idx} className="tech-pill">{t}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button onClick={handleClose} className="btn btn-primary w-full">
                <span>Close</span>
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .segmented-control-container {
          display: flex;
          justify-content: center;
          margin-bottom: 3.5rem;
        }

        .segmented-control {
          display: inline-flex;
          background: rgba(0, 0, 0, 0.05);
          padding: 4px;
          border-radius: 9999px;
          border: 1px solid var(--border-glass);
          gap: 2px;
          flex-wrap: wrap;
        }

        .segment-btn {
          padding: 0.5rem 1.15rem;
          border-radius: 9999px;
          background: transparent;
          border: none;
          color: var(--text-muted);
          font-family: var(--font-apple);
          font-size: 0.85rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;

          &:hover { color: var(--text-main); }

          &.active {
            color: #1d1d1f;
            font-weight: 600;
          }
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2rem;
        }

        .project-card {
          background: var(--card-bg);
          border: 1px solid var(--border-glass);
          border-radius: 24px;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          animation: fadeUp 0.6s ease forwards;
          opacity: 0;
          position: relative;
          overflow: hidden;

          &::before {
            content: '';
            position: absolute;
            inset: 0;
            background: linear-gradient(135deg, rgba(255,255,255,0.4) 0%, transparent 100%);
            opacity: 0;
            transition: opacity 0.4s ease;
            z-index: 0;
          }

          &:hover {
            transform: translateY(-8px);
            box-shadow: var(--shadow-lg);
            border-color: rgba(255, 255, 255, 0.8);
            
            &::before { opacity: 1; }
            .read-more-btn { color: var(--accent-apple-blue); }
            .read-more-btn svg { transform: translateX(4px); }
          }
        }

        .project-header, .project-content, .project-footer { position: relative; z-index: 1; }

        .project-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }

        .project-icon {
          width: 48px;
          height: 48px;
          border-radius: 16px;
          background: rgba(0, 0, 0, 0.03);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-main);
        }

        .badge {
          font-size: 0.75rem;
          font-weight: 600;
          padding: 0.35rem 0.8rem;
          border-radius: 9999px;
          background: rgba(0, 0, 0, 0.05);
          color: var(--text-main);
        }

        .project-category {
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: var(--text-muted);
          margin-bottom: 0.5rem;
          display: block;
        }

        .project-content h3 {
          font-size: 1.35rem;
          line-height: 1.3;
          margin-bottom: 1rem;
        }

        .project-summary {
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.6;
        }

        .project-tech-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-top: 1.5rem;
        }

        .tech-chip {
          font-size: 0.75rem;
          padding: 0.3rem 0.75rem;
          border-radius: 6px;
          background: rgba(0, 0, 0, 0.04);
          color: var(--text-muted);
          font-weight: 500;
        }

        .project-footer {
          margin-top: auto;
          padding-top: 1.5rem;
          border-top: 1px solid var(--border-glass);
        }

        .read-more-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: none;
          border: none;
          color: var(--text-main);
          font-weight: 600;
          font-size: 0.95rem;
          cursor: pointer;
          padding: 0;
          transition: all 0.3s ease;
          
          svg { transition: transform 0.3s ease; }
        }

        /* Modern iOS Modal */
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.2);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          animation: modalFadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .modal-overlay.closing {
          animation: modalFadeOut 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .modal-content {
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(40px) saturate(200%);
          -webkit-backdrop-filter: blur(40px) saturate(200%);
          border: 1px solid rgba(255, 255, 255, 0.5);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          border-radius: 28px;
          width: 100%;
          max-width: 600px;
          max-height: 90vh;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          transform-origin: var(--origin-x) var(--origin-y);
          animation: modalZoomIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .modal-overlay.closing .modal-content {
          animation: modalZoomOut 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .modal-header {
          padding: 2rem 2rem 1.5rem;
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 1rem;
        }

        .modal-category {
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--accent-apple-blue);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 0.5rem;
          display: block;
        }

        .modal-title-group h3 {
          font-size: 1.5rem;
          line-height: 1.3;
          margin: 0;
        }

        .modal-close-btn {
          width: 32px;
          height: 32px;
          border-radius: 16px;
          background: rgba(0, 0, 0, 0.05);
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: var(--text-muted);
          transition: all 0.2s ease;
          flex-shrink: 0;

          &:hover { background: rgba(0, 0, 0, 0.1); color: var(--text-main); }
        }

        .modal-body {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .modal-section h4 {
          font-size: 1.1rem;
          margin-bottom: 1rem;
          color: var(--text-main);
        }

        .abstract-text {
          font-size: 1rem;
          line-height: 1.7;
          color: var(--text-muted);
        }

        .project-apple-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .tech-pill {
          padding: 0.4rem 1rem;
          background: var(--bg-main);
          border: 1px solid var(--border-glass);
          border-radius: 9999px;
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--text-main);
          box-shadow: 0 2px 4px rgba(0,0,0,0.02);
        }

        .modal-footer {
          padding: 1.5rem 2rem 2rem;
          border-top: 1px solid rgba(0, 0, 0, 0.05);
        }

        .modal-bullet-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          li { display: flex; align-items: flex-start; gap: 0.5rem; font-size: 0.9rem; color: var(--text-muted); }
        }

        .mobile-fixed-bubble {
          display: none;
        }

        @media (min-width: 769px) {
          .mobile-only-tab {
            display: none !important;
          }
        }

        @media (max-width: 768px) {
          .segmented-control-container {
            justify-content: flex-start;
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
            /* Allow scrolling edge-to-edge on iPhone */
            margin-left: -5%;
            margin-right: -5%;
            /* Add enough padding so first and last items can reach the center */
            padding-left: calc(50vw - 40px);
            padding-right: calc(50vw - 40px);
            padding-bottom: 1rem;
            scroll-snap-type: x mandatory;
            position: relative;
            z-index: 2; /* Forces text to render completely ON TOP of the fixed bubble so it isn't blurred! */
          }
          
          .segmented-control-container::-webkit-scrollbar {
            display: none; /* Hide scrollbar for clean iOS look */
          }

          .segmented-control {
            flex-wrap: nowrap; /* Prevents wrapping which breaks the slider bubble */
            white-space: nowrap;
            background: transparent !important; /* Removes track background */
            border: none !important;
          }

          .segment-btn {
            scroll-snap-align: center;
          }

          .desktop-slider-bubble {
            display: none; /* Hide desktop sliding bubble */
          }

          .mobile-fixed-bubble {
            display: block;
            position: absolute;
            top: 4px;
            height: calc(100% - 24px); /* Account for padding-bottom */
            left: 50%;
            transform: translateX(-50%);
            /* Copy the beautiful glass style */
            background: linear-gradient(180deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.05) 100%);
            backdrop-filter: blur(30px) saturate(250%);
            -webkit-backdrop-filter: blur(30px) saturate(250%);
            border: 1px solid rgba(255, 255, 255, 0.6);
            box-shadow: inset 0 6px 10px rgba(255,255,255,0.9), inset 0 -4px 6px rgba(0,0,0,0.1), 0 15px 30px rgba(0,0,0,0.2);
            border-radius: 9999px;
            pointer-events: none;
            transition: width 0.3s ease;
            z-index: 1; /* Sits UNDER the text container */
          }
        }
      `}</style>
    </section>
  );
};

export default ProjectsShowcase;
