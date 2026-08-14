import React, { useState } from 'react';
import { Brain, Code2, Eye, Server, Layers } from 'lucide-react';

const SkillsRadar = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sliderStyle, setSliderStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const tabsRef = React.useRef([]);

  const categories = ['All', 'ML & Deep Learning', 'Languages & Core CS', 'Data & Analytics', 'Systems & Infrastructure'];

  React.useEffect(() => {
    const activeIndex = categories.indexOf(selectedCategory);
    const activeTab = tabsRef.current[activeIndex];
    if (activeTab) {
      setSliderStyle({
        left: activeTab.offsetLeft,
        width: activeTab.offsetWidth,
        opacity: 1
      });
    }
  }, [selectedCategory, categories]);

  const skillGroups = [
    {
      category: 'ML & Deep Learning',
      icon: Brain,
      color: '#5e5ce6', // Indigo
      skills: ['PyTorch', 'Scikit-learn', 'Few-Shot Learning', 'Transformer Architectures', 'Deep Learning']
    },
    {
      category: 'Languages & Core CS',
      icon: Code2,
      color: '#ff9500', // Gold
      skills: ['Python', 'C', 'C++', 'SQL', 'Data Structures & Algorithms', 'OS, DBMS & OOP']
    },
    {
      category: 'Data & Analytics',
      icon: Eye,
      color: '#30b0c7', // Teal
      skills: ['Pandas', 'NumPy', 'Exploratory Data Analysis', 'Data Preprocessing', 'Feature Engineering']
    },
    {
      category: 'Systems & Infrastructure',
      icon: Server,
      color: '#34c759', // Emerald
      skills: ['Linux', 'Git', 'Cloud Computing Concepts', 'FastAPI', 'React']
    }
  ];

  return (
    <section id="skills" className="section-padding skills-apple-section">
      <div className="container">
        
        {/* Header */}
        <div className="section-header">
          <span className="sub-tag">Technical Competencies</span>
          <h2>Skills & Technologies</h2>
          <p>
            Frameworks, languages, and infrastructure tools utilized in ML engineering and clinical systems.
          </p>
        </div>

        {/* iOS Segmented Control */}
        <div className="segmented-control-container" style={{ display: 'flex', justifyContent: 'center', marginBottom: '3rem' }}>
          <div className="segmented-control" style={{ 
            display: 'inline-flex', background: 'rgba(0,0,0,0.05)', padding: '4px', 
            borderRadius: '9999px', flexWrap: 'wrap', justifyContent: 'center', gap: '2px', position: 'relative'
          }}>
            <div 
              style={{
                position: 'absolute',
                top: '4px',
                height: 'calc(100% - 8px)',
                left: `${sliderStyle.left}px`,
                width: `${sliderStyle.width}px`,
                opacity: sliderStyle.opacity,
                transition: 'all 1.4s cubic-bezier(0.22, 1, 0.36, 1)',
                borderRadius: '9999px',
                background: 'linear-gradient(180deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.05) 100%)',
                backdropFilter: 'blur(30px) saturate(250%)',
                WebkitBackdropFilter: 'blur(30px) saturate(250%)',
                border: '1px solid rgba(255, 255, 255, 0.6)',
                boxShadow: 'inset 0 6px 10px rgba(255,255,255,0.9), inset 0 -4px 6px rgba(0,0,0,0.1), 0 15px 30px rgba(0,0,0,0.2)',
                zIndex: 1
              }}
            />
            {categories.map((cat, idx) => (
              <button
                key={cat}
                ref={el => tabsRef.current[idx] = el}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: '0.6rem 1.2rem',
                  borderRadius: '9999px',
                  border: 'none',
                  background: 'transparent',
                  color: selectedCategory === cat ? '#1d1d1f' : '#6e6e73',
                  fontWeight: selectedCategory === cat ? '600' : '500',
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  transition: 'all 0.8s ease',
                  position: 'relative',
                  zIndex: selectedCategory === cat ? 2 : 0
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="skills-apple-grid">
          {skillGroups
            .filter(group => selectedCategory === 'All' || group.category === selectedCategory)
            .map((group) => {
              const IconComp = group.icon;
              return (
                <div key={group.category} className="skill-apple-card glass-card">
                  <div className="group-card-header">
                    <div className="icon-wrapper" style={{ color: group.color, background: `${group.color}15` }}>
                      <IconComp size={22} />
                    </div>
                    <h3>{group.category}</h3>
                  </div>

                  <div className="premium-skills-container">
                    {group.skills.map((skill) => (
                      <div key={skill} className="premium-skill-pill">
                        <span className="pill-dot" style={{ background: group.color, boxShadow: `0 0 8px ${group.color}` }}></span>
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
        </div>

      </div>

      <style>{`
        .skills-apple-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
          gap: 2rem;
        }

        .skill-apple-card {
          padding: 2.5rem;
          border-radius: 28px;
        }

        .group-card-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2rem;
          padding-bottom: 1.25rem;
          border-bottom: 1px solid rgba(0,0,0,0.06);

          h3 { font-size: 1.35rem; color: var(--text-main); font-weight: 600; letter-spacing: -0.02em; margin: 0; }
        }

        .icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: 12px;
        }

        .premium-skills-container {
          display: flex;
          flex-wrap: wrap;
          gap: 0.85rem;
        }

        .premium-skill-pill {
          padding: 0.7rem 1.25rem;
          background: rgba(255, 255, 255, 0.4);
          backdrop-filter: blur(30px) saturate(200%);
          -webkit-backdrop-filter: blur(30px) saturate(200%);
          border: 1px solid rgba(255, 255, 255, 0.8);
          border-bottom: 1px solid rgba(255, 255, 255, 0.4);
          border-radius: 9999px;
          font-size: 0.92rem;
          font-weight: 500;
          color: var(--text-main);
          box-shadow: 0 4px 15px rgba(0,0,0,0.03), inset 0 1px 1px rgba(255, 255, 255, 0.8);
          transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          cursor: default;
        }

        .pill-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
        }

        .premium-skill-pill:hover {
          background: rgba(255, 255, 255, 0.8);
          transform: translateY(-3px) scale(1.03);
          box-shadow: 0 10px 25px rgba(0,0,0,0.08), inset 0 1px 1px rgba(255, 255, 255, 1);
        }

        @media (max-width: 900px) {
          .skills-apple-grid { grid-template-columns: 1fr; }
          .skill-apple-card { padding: 1.75rem; }
        }
      `}</style>
    </section>
  );
};

export default SkillsRadar;
