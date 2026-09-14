import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, FileText } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Footer({ onOpenContact }) {
  const { personal } = portfolioData;

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-left">
            <Link to="/" className="nav-logo footer-logo">
              <div className="logo-wrapper">
                <div className="logo-text-group">
                  <span className="logo-bracket">&#123;</span>
                  <div className="logo-main">
                    <span className="logo-function">hajra</span>
                    <span className="logo-dot">(</span>
                    <span className="logo-name">shahbaz</span>
                    <span className="logo-dot">)</span>
                    <span className="logo-domain">.dev</span>
                  </div>
                  <span className="logo-bracket">&#125;</span>
                </div>
              </div>
            </Link>

            <p className="footer-tagline">
              Software Engineering Undergraduate at COMSATS Lahore. Focused on clean code, algorithms, and real-world software solutions.
            </p>

            <div className="footer-social">
              <a
                href={personal.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="GitHub"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
              </a>
              <a
                href={personal.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a
                href={personal.socials.email}
                className="social-link"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>


          <div className="footer-nav">
            <div className="footer-nav-column">
              <h4>Navigation</h4>
              <Link to="/">Home</Link>
              <Link to="/projects">Projects</Link>
              <a href="/#about">About</a>
              <a href="/#skills">Skills</a>
              <a href="/#experience">Experience</a>
            </div>

            <div className="footer-nav-column">
              <h4>Direct Contact</h4>
              <a href={personal.socials.email}>{personal.email}</a>
              <a href={personal.socials.phone}>{personal.phone}</a>
              <button
                onClick={onOpenContact}
                style={{ textAlign: 'left', color: 'var(--text-muted)', fontSize: '0.94rem', margin: '0.5rem 0' }}
              >
                Quick Connect Popup
              </button>
            </div>

            <div className="footer-nav-column">
              <h4>Curriculum Vitae</h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
                Download official resume:
              </p>
              <a
                href={personal.cvPath}
                download="Hajra_Shahbaz_CV.docx"
                className="footer-cv-btn"
              >
                <FileText size={16} />
                <span>Download CV</span>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            &copy; {new Date().getFullYear()} Hajra Shahbaz. All rights reserved.
          </p>
          <p style={{ color: 'var(--text-subtle)', fontSize: '0.82rem' }}>
            Lahore, Pakistan &bull; COMSATS University Islamabad
          </p>
        </div>
      </div>
    </footer>
  );
}
