import React from 'react';
import { Globe, MapPin } from 'lucide-react';

const TimelineEducation = () => {
  const milestones = [
    {
      type: 'Education',
      title: 'B.E. in Computer Science & Engineering',
      institution: 'KLE Technological University, Hubballi',
      period: 'Aug 2023 – Jun 2027',
      grade: 'CGPA: 8.96 / 10',
      details: [
        'Relevant Coursework: DSA, ML & Deep Learning, Generative AI, DBMS, Cloud Computing.'
      ]
    },
    {
      type: 'Certification',
      title: 'Mastering Data Structures & Algorithms using C and C++',
      institution: 'Udemy (76 hours)',
      period: '2026',
      grade: 'Certificate',
      details: [
        'Comprehensive study of data structures and algorithms.'
      ]
    },
    {
      type: 'Certification',
      title: 'JNCIA-Junos (Junos Associate)',
      institution: 'HPE Juniper Networking',
      period: '2025',
      grade: 'Certificate',
      details: [
        'Foundational networking and routing knowledge.'
      ]
    },
    {
      type: 'Certification',
      title: 'Jenkins & DevOps Mindset',
      institution: 'Infosys Springboard',
      period: '2025',
      grade: 'Certificate',
      details: [
        'Completed courses: Jenkins Configuration for DevOps & Understanding DevOps Tools.'
      ]
    },
    {
      type: 'Award',
      title: 'Best Paper Award',
      institution: 'SCI 2026 Conference',
      period: '2026',
      grade: 'Winner',
      details: [
        'Awarded for few-shot rare syndrome recognition research.'
      ]
    },
    {
      type: 'Hackathon',
      title: 'Participant — "Innovate with GolStats"',
      institution: 'University Grants Commission (MoE)',
      period: '2025',
      grade: 'Participant',
      details: [
        'Participated in the national hackathon.'
      ]
    },
    {
      type: 'Outreach',
      title: 'Volunteer Organiser',
      institution: 'DTSI Community Outreach Initiative, Dharwad',
      period: '2022',
      grade: 'Organizer',
      details: [
        'Engaged with 50+ residents for community tech outreach.'
      ]
    }
  ];

  const languages = [
    { name: 'English', fluency: 'Proficient' },
    { name: 'Hindi', fluency: 'Fluent' },
    { name: 'Kannada', fluency: 'Fluent' },
    { name: 'Urdu', fluency: 'Native' }
  ];

  return (
    <section id="education" className="section-padding education-apple-section">
      <div className="container">
        
        {/* Header */}
        <div className="section-header">
          <span className="sub-tag">Academic & Experience</span>
          <h2>Education & Leadership</h2>
          <p>
            Academic standing at KLE Tech, research accomplishments, and community outreach.
          </p>
        </div>

        <div className="edu-apple-grid">
          
          {/* Timeline Column */}
          <div className="timeline-apple-column">
            <div className="timeline-apple-list">
              {milestones.map((item, idx) => (
                <div key={idx} className="timeline-apple-item glass-card">
                  <div className="item-top-bar">
                    <span className="badge badge-outline">{item.type}</span>
                    <span className="item-date code-font">{item.period}</span>
                  </div>

                  <h4 className="item-title">{item.title}</h4>
                  <p className="item-inst">{item.institution}</p>

                  <div className="item-grade">{item.grade}</div>

                  <ul className="item-bullets">
                    {item.details.map((b, bIdx) => (
                      <li key={bIdx}>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="edu-side-column">
            
            {/* KLE Card */}
            <div className="glass-card kle-apple-card">
              <div className="kle-header">
                <span className="badge badge-cyan">Degree Program</span>
                <span className="kle-loc code-font"><MapPin size={13}/> Hubballi, IN</span>
              </div>

              <h3 className="kle-degree">B.E. Computer Science</h3>
              <p className="kle-inst-name">KLE Technological University</p>

              <div className="cgpa-box mt-3">
                <span className="cgpa-val">8.96</span>
                <span className="cgpa-lbl">CGPA out of 10.0</span>
              </div>

              <div className="mt-3">
                <span className="cw-lbl">Relevant Modules:</span>
                <div className="project-apple-tech mt-2">
                  <span className="tech-pill">DSA</span>
                  <span className="tech-pill">Machine Learning</span>
                  <span className="tech-pill">Deep Learning</span>
                  <span className="tech-pill">Generative AI</span>
                  <span className="tech-pill">DBMS</span>
                  <span className="tech-pill">Cloud</span>
                </div>
              </div>
            </div>

            {/* Languages Card */}
            <div className="glass-card lang-apple-card">
              <div className="lang-header">
                <Globe size={18} className="text-muted" />
                <h4>Languages</h4>
              </div>

              <div className="lang-apple-grid">
                {languages.map((l) => (
                  <div key={l.name} className="lang-apple-item">
                    <span className="l-name">{l.name}</span>
                    <span className="l-fluency code-font">{l.fluency}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>

      <style>{`
        .edu-apple-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 2.5rem;
        }

        .timeline-apple-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .timeline-apple-item {
          padding: 1.75rem;
        }

        .item-top-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.75rem;
        }

        .item-date { font-size: 0.78rem; color: var(--text-muted); }

        .item-title { font-size: 1.2rem; line-height: 1.3; margin-bottom: 0.3rem; color: var(--text-main); }

        .item-inst { font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.5rem; }

        .item-grade { font-size: 0.82rem; font-weight: 600; color: var(--accent-apple-blue); margin-bottom: 0.85rem; font-family: var(--font-code); }

        .item-bullets {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          li { font-size: 0.88rem; color: var(--text-muted); line-height: 1.5; }
        }

        /* Side Column */
        .edu-side-column {
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
        }

        .kle-apple-card, .lang-apple-card {
          padding: 2rem;
        }

        .kle-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem; }
        .kle-loc { font-size: 0.78rem; color: var(--text-muted); display: flex; align-items: center; gap: 0.2rem; }

        .kle-degree { font-size: 1.4rem; margin-bottom: 0.25rem; color: var(--text-main); }
        .kle-inst-name { font-size: 0.9rem; color: var(--text-muted); }

        .cgpa-box {
          background: rgba(52, 199, 89, 0.08);
          border: 1px solid rgba(52, 199, 89, 0.2);
          padding: 1rem;
          border-radius: 16px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .cgpa-val { font-size: 2rem; font-weight: 600; color: #16a34a; }
        .cgpa-lbl { font-size: 0.78rem; color: var(--text-muted); }

        .cw-lbl { font-size: 0.8rem; color: var(--text-muted); }

        .lang-header { display: flex; align-items: center; gap: 0.5rem; margin-bottom: 1.25rem; h4 { font-size: 1.1rem; color: var(--text-main); } }

        .lang-apple-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.75rem;
        }

        .lang-apple-item {
          background: rgba(0, 0, 0, 0.03);
          border: 1px solid var(--border-glass);
          padding: 0.75rem;
          border-radius: 12px;
          display: flex;
          flex-direction: column;
        }

        .l-name { font-size: 0.88rem; font-weight: 500; color: var(--text-main); }
        .l-fluency { font-size: 0.72rem; color: var(--text-muted); }

        @media (max-width: 900px) {
          .edu-apple-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
};

export default TimelineEducation;
