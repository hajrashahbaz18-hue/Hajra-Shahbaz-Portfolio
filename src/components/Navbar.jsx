import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar({ onOpenContact }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;
  const toggleMobile = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMobile = () => setMobileMenuOpen(false);

  return (
    <nav className="nav-container">
      <div className="nav-content">
        <Link to="/" className="nav-logo" onClick={closeMobile}>
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

        <div className="nav-links">
          <Link to="/" className={'nav-link ' + (isActive('/') ? 'active' : '')}>
            <span className="nav-link-text">Home</span>
            <span className="nav-link-line"></span>
          </Link>
          <Link to="/projects" className={'nav-link ' + (isActive('/projects') ? 'active' : '')}>
            <span className="nav-link-text">Projects</span>
            <span className="nav-link-line"></span>
          </Link>
          <a href="/#about" className="nav-link">
            <span className="nav-link-text">About</span>
            <span className="nav-link-line"></span>
          </a>
          <a href="/#skills" className="nav-link">
            <span className="nav-link-text">Skills</span>
            <span className="nav-link-line"></span>
          </a>
          <a href="/#experience" className="nav-link">
            <span className="nav-link-text">Experience</span>
            <span className="nav-link-line"></span>
          </a>
          <a href="/#education" className="nav-link">
            <span className="nav-link-text">Education</span>
            <span className="nav-link-line"></span>
          </a>
          <button className="nav-contact-btn" onClick={onOpenContact}>
            <span>Get in Touch</span>
          </button>
        </div>

        <button
          className="mobile-menu-btn"
          aria-label="Toggle Navigation"
          onClick={toggleMobile}
        >
          <div className="menu-icon">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>

      <div className={'mobile-nav ' + (mobileMenuOpen ? 'open' : '')}>
        <div className="mobile-nav-links">
          <Link to="/" className="mobile-nav-link" onClick={closeMobile}>Home</Link>
          <Link to="/projects" className="mobile-nav-link" onClick={closeMobile}>Projects</Link>
          <a href="/#about" className="mobile-nav-link" onClick={closeMobile}>About</a>
          <a href="/#skills" className="mobile-nav-link" onClick={closeMobile}>Skills</a>
          <a href="/#experience" className="mobile-nav-link" onClick={closeMobile}>Experience</a>
          <a href="/#education" className="mobile-nav-link" onClick={closeMobile}>Education</a>
          <button
            className="mobile-nav-contact-btn"
            onClick={() => {
              closeMobile();
              onOpenContact();
            }}
          >
            Get in Touch
          </button>
        </div>
      </div>
    </nav>
  );
}
