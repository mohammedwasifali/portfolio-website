import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, CheckCircle2, Copy, ArrowUpRight, Instagram, MessageCircle, Code2 } from 'lucide-react';

const XIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedField, setCopiedField] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;

    setIsSubmitting(true);
    
    // Construct mailto link with the form data
    const mailtoLink = `mailto:mdwali0912@gmail.com?subject=${encodeURIComponent(formData.subject || 'New Contact Form Submission')}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    
    // Trigger the email client
    window.location.href = mailtoLink;

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1000);
  };

  const handleCopy = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2500);
  };

  return (
    <section id="contact" className="section-padding contact-apple-section">
      <div className="container">
        
        {/* Header */}
        <div className="section-header">
          <span className="sub-tag">Get in Touch</span>
          <h2>Connect & Collaborate</h2>
          <p>
            Open for AI Engineering positions, clinical research initiatives, or technical inquiries.
          </p>
        </div>

        <div className="contact-apple-grid">
          
          {/* Left Column */}
          <div className="contact-apple-info">
            <div className="glass-card contact-card-apple">
              <h3>Contact Details</h3>
              <p className="card-sub-apple">Reach out directly via email or phone.</p>

              <div className="contact-row-apple">
                <Mail size={18} className="text-muted" />
                <div className="c-text">
                  <span className="c-lbl">Email</span>
                  <span className="c-val code-font">mdwali0912@gmail.com</span>
                </div>
                <button 
                  onClick={() => handleCopy('mdwali0912@gmail.com', 'email')}
                  className="btn-copy-apple"
                  title="Copy Email"
                >
                  {copiedField === 'email' ? <CheckCircle2 size={15} className="text-emerald" /> : <Copy size={15} />}
                </button>
              </div>

              <div className="contact-row-apple">
                <Phone size={18} className="text-muted" />
                <div className="c-text">
                  <span className="c-lbl">Phone</span>
                  <span className="c-val code-font">+91 9482892540</span>
                </div>
                <button 
                  onClick={() => handleCopy('+91 9482892540', 'phone')}
                  className="btn-copy-apple"
                  title="Copy Phone"
                >
                  {copiedField === 'phone' ? <CheckCircle2 size={15} className="text-emerald" /> : <Copy size={15} />}
                </button>
              </div>

              <div className="contact-row-apple">
                <MapPin size={18} className="text-muted" />
                <div className="c-text">
                  <span className="c-lbl">Location</span>
                  <span className="c-val">Hubballi, Karnataka, India</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-card social-card-apple">
              <h4>Profiles</h4>
              <div className="social-apple-row">
                <a href="https://github.com/mohammedwasifali" target="_blank" rel="noopener noreferrer" className="social-apple-btn">
                  <Github size={18} />
                  <span>GitHub</span>
                  <ArrowUpRight size={14} />
                </a>

                <a href="https://www.linkedin.com/in/mohammed-wasif-ali-27484b2a2/" target="_blank" rel="noopener noreferrer" className="social-apple-btn">
                  <Linkedin size={18} />
                  <span>LinkedIn</span>
                  <ArrowUpRight size={14} />
                </a>

                <a href="https://leetcode.com/u/3IggeK1dwH/" target="_blank" rel="noopener noreferrer" className="social-apple-btn">
                  <Code2 size={18} />
                  <span>LeetCode</span>
                  <ArrowUpRight size={14} />
                </a>

                <a href="https://www.instagram.com/mohammed_wasif_ali/" target="_blank" rel="noopener noreferrer" className="social-apple-btn">
                  <Instagram size={18} />
                  <span>Instagram</span>
                  <ArrowUpRight size={14} />
                </a>

                <a href="https://www.threads.com/@mohammed_wasif_ali" target="_blank" rel="noopener noreferrer" className="social-apple-btn">
                  <MessageCircle size={18} />
                  <span>Threads</span>
                  <ArrowUpRight size={14} />
                </a>

                <a href="https://x.com/wasif51606" target="_blank" rel="noopener noreferrer" className="social-apple-btn">
                  <XIcon size={18} />
                  <span>X</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="contact-apple-form-col">
            <div className="glass-card form-card-apple">
              <h3>Send Message</h3>

              {isSubmitted ? (
                <div className="form-success-apple">
                  <CheckCircle2 size={40} className="text-emerald" />
                  <h4>Message Delivered</h4>
                  <p>Mohammed Wasif Ali will respond to your email shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-apple-form mt-3">
                  <div className="form-row-2">
                    <div className="input-group-apple">
                      <label htmlFor="name">Name</label>
                      <input 
                        type="text" 
                        id="name"
                        name="name" 
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div className="input-group-apple">
                      <label htmlFor="email">Email</label>
                      <input 
                        type="email" 
                        id="email"
                        name="email" 
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="you@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="input-group-apple">
                    <label htmlFor="subject">Subject</label>
                    <input 
                      type="text" 
                      id="subject"
                      name="subject" 
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="e.g. AI Engineering Collaboration"
                    />
                  </div>

                  <div className="input-group-apple">
                    <label htmlFor="message">Message</label>
                    <textarea 
                      id="message"
                      name="message" 
                      rows="4"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Share your message or opportunity details..."
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary w-full mt-2" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>

      <style>{`
        .contact-apple-grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 2.5rem;
        }

        .contact-apple-info {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .contact-card-apple, .social-card-apple, .form-card-apple {
          padding: 2.25rem;
          h3, h4 { color: var(--text-main); }
        }

        .card-sub-apple { font-size: 0.88rem; color: var(--text-muted); margin-bottom: 1.5rem; }

        .contact-row-apple {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          padding: 0.85rem;
          background: rgba(0, 0, 0, 0.03);
          border: 1px solid var(--border-glass);
          border-radius: 14px;
          margin-bottom: 0.85rem;
        }

        .c-text { display: flex; flex-direction: column; flex-grow: 1; }
        .c-lbl { font-size: 0.7rem; color: var(--text-dim); text-transform: uppercase; }
        .c-val { font-size: 0.9rem; font-weight: 500; color: var(--text-main); }

        .btn-copy-apple {
          background: none; border: none; color: var(--text-muted); cursor: pointer; padding: 0.4rem;
          &:hover { color: var(--text-main); }
        }

        .social-card-apple h4 { font-size: 1.1rem; margin-bottom: 1rem; }

        .social-apple-row {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.85rem;
        }

        .social-apple-btn {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.85rem 1rem;
          background: rgba(0, 0, 0, 0.03);
          border: 1px solid var(--border-glass);
          border-radius: 14px;
          color: var(--text-main);
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 500;
          transition: background 0.2s ease;

          &:hover { background: rgba(0, 0, 0, 0.06); }
        }

        /* Form */
        .contact-apple-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .form-row-2 {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
        }

        .input-group-apple {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;

          label { font-size: 0.82rem; color: var(--text-muted); }

          input, textarea {
            background: rgba(255, 255, 255, 0.9);
            border: 1px solid var(--border-glass);
            border-radius: 12px;
            padding: 0.75rem 1rem;
            color: var(--text-main);
            font-family: var(--font-apple);
            font-size: 0.92rem;
            outline: none;
            transition: border-color 0.2s ease;

            &:focus {
              border-color: var(--accent-apple-blue);
              box-shadow: 0 0 10px rgba(0, 113, 227, 0.15);
            }
          }
        }

        .form-success-apple {
          text-align: center;
          padding: 3rem 1rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.85rem;
          h4 { color: var(--text-main); }
          p { color: var(--text-muted); }
        }

        @media (max-width: 900px) {
          .contact-apple-grid { grid-template-columns: 1fr; }
          .form-row-2 { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
};

export default ContactSection;
