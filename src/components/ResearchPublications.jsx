import React, { useState } from 'react';
import { 
  Award, 
  FileText, 
  Quote, 
  X,
  ArrowUpRight
} from 'lucide-react';

const ResearchPublications = ({ onModalChange }) => {
  const [selectedPaper, setSelectedPaper] = useState(null);
  const [copiedId, setCopiedId] = useState(null);
  const [isClosing, setIsClosing] = useState(false);
  const [modalOrigin, setModalOrigin] = useState({ x: 0, y: 0 });

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setSelectedPaper(null);
      setIsClosing(false);
    }, 650);
  };

  React.useEffect(() => {
    if (onModalChange) {
      onModalChange(!!selectedPaper);
    }
  }, [selectedPaper, onModalChange]);

  const publications = [
    {
      id: 'sci-2026-rare-syndrome',
      title: 'Few-Shot Recognition of Rare Genetic Syndromes Using Facial Images',
      venue: 'SCI 2026 Conference',
      award: 'Best Paper Award 🏆',
      status: 'Published / Accepted',
      year: '2026',
      role: 'Lead Model Development & ArcFace Pipeline',
      summary: 'Engineered an ArcFace deep metric learning pipeline paired with prototypical classifiers to identify rare genetic syndromes from limited clinical facial imagery.',
      metrics: [
        { label: 'Paper Distinction', val: 'Best Paper Award' },
        { label: 'Architecture', val: 'ArcFace + Prototypical Nets' },
        { label: 'Domain', val: 'Rare Disease Clinical AI' }
      ],
      tags: ['ArcFace', 'Few-Shot Learning', 'Clinical AI', 'PyTorch'],
      abstract: 'Rare genetic syndromes pose a severe diagnostic bottleneck due to scarce clinical samples. In this paper, we propose a few-shot deep metric learning model leveraging customized ArcFace loss and metric-space prototypical embeddings. The system projects high-dimensional facial dysmorphology features into a tightly clustered embedding space, enabling robust zero/few-shot syndrome classification even with fewer than 5 clinical photos per syndrome class.',
      citation: 'Ali, M.W. et al. "Few-Shot Recognition of Rare Genetic Syndromes Using Facial Images" — SCI 2026 Conference. (Best Paper Award)'
    },
    {
      id: 'cml-2026-fgdd',
      title: 'Few-Shot Detection of Genetic Syndromes Using the FGDD Dataset',
      venue: 'CML 2026 Conference',
      award: null,
      status: 'Accepted',
      year: '2026',
      role: 'Designed Framework & Led Experiments',
      summary: 'Achieved high accuracy by combining architectures for the FGDD multi-modal genetic dataset.',
      metrics: [
        { label: 'Model', val: 'Few-Shot Framework' },
        { label: 'Dataset', val: 'FGDD Multimodal' },
        { label: 'Domain', val: 'Clinical Genetics' }
      ],
      tags: ['FGDD', 'Few-Shot', 'Clinical AI'],
      abstract: 'Designed the few-shot framework and led experiments for the detection of genetic syndromes using the FGDD dataset.',
      citation: 'Ali, M.W. et al. "Few-Shot Detection of Genetic Syndromes Using the FGDD Dataset" — CML 2026 Conference.'
    },
    {
      id: 'iccis-2026-rag',
      title: 'Emotion-Aware Multimodal Retrieval-Augmented Generation for Mental Health Support',
      venue: 'ICCIS 2026 (Springer LNNS, Scopus-indexed)',
      award: null,
      status: 'Accepted',
      year: '2026',
      role: 'Author',
      summary: 'Developed an emotion-aware multimodal Retrieval-Augmented Generation framework integrating BLIP, OCR, Whisper, SpeechBrain, and Coqui TTS.',
      metrics: [
        { label: 'Model', val: 'Multimodal RAG' },
        { label: 'Domain', val: 'Mental Health' },
        { label: 'Publisher', val: 'Springer LNNS' }
      ],
      tags: ['Multimodal RAG', 'Emotion AI', 'SpeechBrain'],
      abstract: 'Developed an emotion-aware multimodal Retrieval-Augmented Generation framework integrating BLIP, OCR, Whisper, SpeechBrain, and Coqui TTS. Enabled the system to process image, text, and voice input and retrieve emotionally aligned responses.',
      citation: 'Ali, M.W. et al. "Emotion-Aware Multimodal Retrieval-Augmented Generation for Mental Health Support" — Accepted, ICCIS 2026 (Springer LNNS, Scopus-indexed).'
    },
    {
      id: 'uav-video-2026',
      title: 'Event Recognition in UAV Videos Using Deep Spatio-Temporal Learning',
      venue: 'Manuscript in Preparation',
      award: null,
      status: 'In Preparation / 2026',
      year: '2026',
      role: 'Author',
      summary: 'Developed a Video Swin Transformer framework tailored for aerial spatial-temporal event categorization on the benchmark ERA dataset.',
      metrics: [
        { label: 'Backbone', val: 'Deep Spatio-Temporal' },
        { label: 'Domain', val: 'UAV Spatio-Temporal' },
        { label: 'Status', val: 'In Preparation' }
      ],
      tags: ['Spatio-Temporal', 'UAV Vision', 'PyTorch'],
      abstract: 'Unmanned Aerial Vehicle (UAV) video streams suffer from severe perspective shifts, camera jitter, and complex spatial dynamics. This research implements deep spatio-temporal learning to capture long-range spatial and temporal attention across aerial video frames.',
      citation: 'Ali, M.W. et al. "Event Recognition in UAV Videos Using Deep Spatio-Temporal Learning" — Manuscript in preparation, 2026.'
    }
  ];

  const handleCopyCitation = (paper) => {
    navigator.clipboard.writeText(paper.citation);
    setCopiedId(paper.id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <section id="research" className="section-padding research-apple-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="sub-tag">Research & Publications</span>
          <h2>Peer-Reviewed Works</h2>
          <p>
            Bridging state-of-the-art computer vision, few-shot metric learning, and clinical AI frameworks.
          </p>
        </div>

        {/* Featured Paper Light Apple Style */}
        <div className="featured-apple-card glass-card">
          <div className="featured-header">
            <span className="badge badge-gold"><Award size={13} /> Best Paper Award</span>
            <span className="badge badge-ai">SCI 2026 Conference</span>
          </div>

          <div className="featured-content">
            <div className="featured-info">
              <h3 className="featured-title">
                Few-Shot Recognition of Rare Genetic Syndromes Using Facial Images
              </h3>
              <p className="featured-summary">
                Pioneered an ArcFace deep metric learning pipeline capable of classifying rare dysmorphological genetic syndromes from minimal sample counts.
              </p>
              
              <div className="featured-tags">
                <span className="tech-pill">ArcFace</span>
                <span className="tech-pill">Prototypical Networks</span>
                <span className="tech-pill">Few-Shot AI</span>
                <span className="tech-pill">Clinical Diagnostics</span>
              </div>
            </div>

            <div className="featured-action-box">
              <div className="feat-stat">
                <span className="stat-big">SCI 2026</span>
                <span className="stat-desc">Best Paper Distinction</span>
              </div>

              <button 
                onClick={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const deltaX = (rect.left + rect.width / 2) - window.innerWidth / 2;
                  const deltaY = rect.top - window.innerHeight / 2;
                  setModalOrigin({ x: deltaX, y: deltaY });
                  setSelectedPaper(publications[0]);
                }}
                className="btn btn-primary w-full"
              >
                <span>Read Overview</span>
                <ArrowUpRight size={15} />
              </button>
            </div>
          </div>
        </div>

        {/* Grid of Papers */}
        <div className="publications-apple-grid">
          {publications.map((paper) => (
            <div key={paper.id} className="pub-apple-card glass-card">
              <div className="pub-card-top">
                {paper.award ? (
                  <span className="badge badge-gold"><Award size={12} /> {paper.award}</span>
                ) : (
                  <span className="badge badge-cyan">{paper.venue}</span>
                )}
                <span className="code-font text-dim" style={{ fontSize: '0.78rem' }}>{paper.year}</span>
              </div>

              <h4 className="pub-title">{paper.title}</h4>
              <p className="pub-role">{paper.role}</p>
              <p className="pub-desc">{paper.summary}</p>

              <div className="pub-tags">
                {paper.tags.map((t, idx) => (
                  <span key={idx} className="tech-pill">{t}</span>
                ))}
              </div>

              <div className="pub-actions">
                <button 
                  onClick={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const deltaX = (rect.left + rect.width / 2) - window.innerWidth / 2;
                    const deltaY = rect.top - window.innerHeight / 2;
                    setModalOrigin({ x: deltaX, y: deltaY });
                    setSelectedPaper(paper);
                  }}
                  className="btn btn-secondary btn-sm"
                >
                  <FileText size={14} />
                  <span>Abstract</span>
                </button>

                <button 
                  onClick={() => handleCopyCitation(paper)}
                  className="btn btn-secondary btn-sm"
                >
                  {copiedId === paper.id ? (
                    <span className="text-emerald">Copied</span>
                  ) : (
                    <>
                      <Quote size={14} />
                      <span>Cite</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Abstract Modal */}
      {selectedPaper && (
        <div className={`modal-backdrop ${isClosing ? 'closing' : ''}`} onClick={handleClose}>
          <div 
            className={`modal-content glass-card ${isClosing ? 'closing' : ''}`} 
            onClick={(e) => e.stopPropagation()}
            style={{ transformOrigin: `calc(50% + ${modalOrigin.x}px) calc(50% + ${modalOrigin.y}px)` }}
          >
            <button className="modal-close-btn" onClick={handleClose}>
              <X size={18} />
            </button>

            <div className="pub-modal-header">
              <span className="badge badge-cyan">{selectedPaper.venue}</span>
              <h3 className="modal-title mt-2">{selectedPaper.title}</h3>
              <p className="modal-authors">Authors: Mohammed Wasif Ali et al.</p>
            </div>

            <div className="modal-body">
              <div className="modal-section">
                <h4>Abstract</h4>
                <p className="abstract-text">{selectedPaper.abstract}</p>
              </div>

              <div className="modal-section">
                <h4>Key Metrics & Architecture</h4>
                <div className="modal-metrics-grid">
                  {selectedPaper.metrics.map((m, idx) => (
                    <div key={idx} className="modal-metric-card">
                      <div className="modal-m-val">{m.val}</div>
                      <div className="modal-m-lbl">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button 
                onClick={() => handleCopyCitation(selectedPaper)}
                className="btn btn-secondary"
              >
                <Quote size={15} />
                <span>{copiedId === selectedPaper.id ? 'Citation Copied' : 'Copy Citation'}</span>
              </button>
              <button onClick={handleClose} className="btn btn-primary">
                <span>Close</span>
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .featured-apple-card {
          padding: 2.5rem;
          margin-bottom: 3rem;
        }

        .featured-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
        }

        .featured-content {
          display: grid;
          grid-template-columns: 1fr 260px;
          gap: 2.5rem;
          align-items: center;
        }

        .featured-title {
          font-size: 1.85rem;
          line-height: 1.25;
          margin-bottom: 1rem;
          color: var(--text-main);
        }

        .featured-summary {
          color: var(--text-muted);
          font-size: 1.05rem;
          line-height: 1.55;
          margin-bottom: 1.5rem;
        }

        .featured-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
        }

        .featured-action-box {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          padding-left: 2rem;
          border-left: 1px solid var(--border-glass);
        }

        .feat-stat {
          display: flex;
          flex-direction: column;
        }

        .stat-big {
          font-size: 1.6rem;
          font-weight: 600;
          color: #d97706;
        }

        .stat-desc {
          font-size: 0.78rem;
          color: var(--text-muted);
        }

        /* Grid */
        .publications-apple-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 1.75rem;
        }

        .pub-apple-card {
          padding: 2rem;
          display: flex;
          flex-direction: column;
        }

        .pub-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.25rem;
        }

        .pub-title {
          font-size: 1.25rem;
          line-height: 1.35;
          margin-bottom: 0.4rem;
          color: var(--text-main);
        }

        .pub-role {
          font-size: 0.82rem;
          color: var(--accent-apple-blue);
          margin-bottom: 1rem;
          font-weight: 500;
        }

        .pub-desc {
          font-size: 0.92rem;
          color: var(--text-muted);
          line-height: 1.55;
          margin-bottom: 1.25rem;
          flex-grow: 1;
        }

        .pub-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.35rem;
          margin-bottom: 1.5rem;
        }

        .pub-actions {
          display: flex;
          gap: 0.75rem;
          border-top: 1px solid var(--border-glass);
          padding-top: 1.25rem;
        }

        .btn-sm {
          padding: 0.5rem 0.75rem;
          font-size: 0.8rem;
          flex: 1;
          white-space: nowrap;
          justify-content: center;
        }

        /* Modal */
        .modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(15px);
          z-index: 300;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
        }

        .modal-content {
          width: 100%;
          max-width: 640px;
          padding: 2.25rem;
          background: #ffffff;
          position: relative;
          border-radius: 28px;
        }

        .modal-close-btn {
          position: absolute;
          top: 1.5rem; right: 1.5rem;
          background: none; border: none;
          color: var(--text-dim);
          cursor: pointer;
          &:hover { color: var(--text-main); }
        }

        .pub-modal-header { 
          padding-bottom: 1.5rem; 
          margin-bottom: 1.5rem; 
          border-bottom: 1px solid var(--border-glass); 
        }
        .modal-title { font-size: 1.4rem; line-height: 1.3; color: var(--text-main); }
        .modal-authors { font-size: 0.85rem; color: var(--text-muted); margin-top: 0.4rem; }

        .modal-section {
          margin-top: 1.5rem;
          h4 { font-size: 0.92rem; color: var(--text-muted); margin-bottom: 0.5rem; font-weight: 500; }
        }

        .abstract-text {
          font-size: 0.94rem;
          color: var(--text-main);
          line-height: 1.6;
          background: rgba(0, 0, 0, 0.03);
          padding: 1rem;
          border-radius: 12px;
          border: 1px solid var(--border-glass);
        }

        .modal-metrics-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.75rem;
        }

        .modal-metric-card {
          background: rgba(0, 0, 0, 0.03);
          border: 1px solid var(--border-glass);
          padding: 0.85rem;
          border-radius: 12px;
          text-align: center;
        }

        .modal-m-val { font-weight: 600; font-size: 1.05rem; color: var(--text-main); }
        .modal-m-lbl { font-size: 0.72rem; color: var(--text-muted); }

        .modal-footer {
          display: flex;
          gap: 1rem;
          margin-top: 2rem;
          padding-top: 1.25rem;
          border-top: 1px solid var(--border-glass);
        }

        .modal-footer .btn {
          flex: 1;
        }

        @media (max-width: 850px) {
          .featured-content { grid-template-columns: 1fr; }
          .featured-action-box { padding-left: 0; border-left: none; border-top: 1px solid var(--border-glass); padding-top: 1.5rem; }
        }
        
        @media (max-width: 500px) {
          .modal-metrics-grid {
            grid-template-columns: 1fr;
          }
          .modal-footer {
            flex-direction: column;
          }
        }
      `}</style>
    </section>
  );
};

export default ResearchPublications;
