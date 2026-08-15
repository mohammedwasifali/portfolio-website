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
  // Create a massive array to simulate infinite scroll seamlessly without JS jump glitches
  const infiniteCategories = Array(50).fill(categories).flat();

  React.useEffect(() => {
    if (onModalChange) {
      onModalChange(!!selectedProject);
    }
  }, [selectedProject, onModalChange]);

  React.useEffect(() => {
    // Track width for BOTH desktop and mobile
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
        // Ensure we start at the 'All' category of that copy (index % 7 == 0)
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
      // Real-time calculation for Haptics during scroll
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

      // Trigger Haptic Feedback exactly when a new item crosses the center!
      if (closestIdx !== -1 && closestIdx !== lastVibratedIdx.current) {
        lastVibratedIdx.current = closestIdx;
        if (navigator.vibrate) {
          // A tiny 10ms click vibration (supported on Android, ignored silently on iOS Safari)
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
          
          // Note: We removed the teleport jump logic here. 
          // By using a massive 50-copy array, the user can swipe 175 times before hitting a wall.
          // This avoids the glitchy touch-interruption that iOS Safari experiences during scroll teleporting!
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
          {/* Mobile Fixed Center Line */}
          <div 
            className="mobile-fixed-line" 
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
                  transition: 'all 0.8s cubic-bezier(0.22, 1, 0.36, 1)',
                  borderRadius: '9999px',
                  background: 'linear-gradient(180deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.05) 100%)',
                  backdropFilter: 'blur(30px) saturate(250%)',
                  WebkitBackdropFilter: 'blur(30px) saturate(250%)',
                  border: '1px solid rgba(255, 255, 255, 0.6)',
                  boxShadow: 'inset 0 6px 10px rgba(255,255,255,0.9), inset 0 -4px 6px rgba(0,0,0,0.1), 0 15px 30px rgba(0,0,0,0.2)',
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
        <div className="projects-apple-grid">
          {filteredProjects.map((project) => {
            return (
              <div key={project.id} className="project-apple-card glass-card">
                
                <div className="card-top-row">
                  <span className="badge badge-ai">{project.category}</span>
                  <span className="metric-tag code-font">{project.accuracy}</span>
                </div>

                <h3 className="project-apple-title">{project.title}</h3>
                <p className="project-apple-summary">{project.summary}</p>

                <div className="project-apple-tech">
                  {project.tech.map((t, idx) => (
                    <span key={idx} className="tech-pill">{t}</span>
                  ))}
                </div>

                <div className="project-apple-footer">
                  <span className="role-text">{project.role}</span>
                  <button 
                    onClick={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      const deltaX = (rect.left + rect.width / 2) - window.innerWidth / 2;
                      const deltaY = rect.top - window.innerHeight / 2;
                      setModalOrigin({ x: deltaX, y: deltaY });
                      setSelectedProject(project);
                    }}
                    className="btn btn-secondary btn-sm pill-action"
                  >
                    <span>Details</span>
                    <ArrowUpRight size={14} />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className={`modal-backdrop ${isClosing ? 'closing' : ''}`} onClick={handleClose}>
          <div 
            className={`modal-content glass-card ${isClosing ? 'closing' : ''}`} 
            onClick={(e) => e.stopPropagation()}
            style={{ transformOrigin: `calc(50% + ${modalOrigin.x}px) calc(50% + ${modalOrigin.y}px)` }}
          >
            <button className="modal-close-btn" onClick={handleClose}>
              <X size={18} />
            </button>

            <div className="modal-header">
              <span className="badge badge-cyan">{selectedProject.category}</span>
              <h3 className="modal-title mt-2">{selectedProject.title}</h3>
              <p className="modal-authors">{selectedProject.role} • {selectedProject.period}</p>
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

        .projects-apple-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
          gap: 1.75rem;
        }

        .project-apple-card {
          padding: 2rem;
          display: flex;
          flex-direction: column;
        }

        .card-top-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.25rem;
        }

        .metric-tag {
          font-size: 0.78rem;
          color: var(--accent-apple-blue);
          font-weight: 600;
        }

        .project-apple-title {
          font-size: 1.35rem;
          line-height: 1.3;
          margin-bottom: 0.65rem;
          color: var(--text-main);
        }

        .project-apple-summary {
          font-size: 0.92rem;
          color: var(--text-muted);
          line-height: 1.55;
          margin-bottom: 1.25rem;
          flex-grow: 1;
        }

        .project-apple-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 0.35rem;
          margin-bottom: 1.5rem;
        }

        .project-apple-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid var(--border-glass);
          padding-top: 1.25rem;
        }

        .role-text {
          font-size: 0.78rem;
          color: var(--text-muted);
        }

        .pill-action {
          padding: 0.4rem 0.9rem;
          font-size: 0.8rem;
        }

        .modal-bullet-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          li { display: flex; align-items: flex-start; gap: 0.5rem; font-size: 0.9rem; color: var(--text-muted); }
        }

        .mobile-fixed-line {
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
            z-index: 2; /* Forces text to render completely ON TOP of the fixed line */
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

          .mobile-fixed-line {
            display: block;
            position: absolute;
            bottom: 4px; /* Sits right below the text */
            height: 4px;
            left: 50%;
            transform: translateX(-50%);
            /* Sleek glowing Apple-style slider indicator */
            background: linear-gradient(90deg, #3b82f6, #8b5cf6); /* Sapphire to Indigo */
            box-shadow: 0 0 10px rgba(59, 130, 246, 0.8);
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
