import React from 'react';
import { X, Mail, Phone, MessageSquare, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ContactModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const { personal } = portfolioData;

  return (
    <div className={'modal-overlay ' + (isOpen ? 'open' : '')} onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={18} />
        </button>

        <div className="modal-header">
          <h3 className="modal-title">Get in Touch</h3>
          <p className="modal-subtitle">Feel free to connect directly via email, phone, or WhatsApp.</p>
        </div>

        <div className="contact-options">
          <a href={personal.socials.email} className="contact-option">
            <div className="option-icon">
              <Mail size={22} />
            </div>
            <div className="option-info">
              <h4>Email</h4>
              <p>{personal.email}</p>
            </div>
          </a>

          <a href={personal.socials.phone} className="contact-option">
            <div className="option-icon">
              <Phone size={22} />
            </div>
            <div className="option-info">
              <h4>Direct Call</h4>
              <p>{personal.phone}</p>
            </div>
          </a>

          <a href={personal.socials.whatsapp} target="_blank" rel="noopener noreferrer" className="contact-option">
            <div className="option-icon">
              <MessageSquare size={22} />
            </div>
            <div className="option-info">
              <h4>WhatsApp</h4>
              <p>{personal.phone}</p>
            </div>
          </a>

          <div className="contact-option" style={{ cursor: 'default' }}>
            <div className="option-icon" style={{ background: 'rgba(255,255,255,0.08)' }}>
              <MapPin size={22} />
            </div>
            <div className="option-info">
              <h4>Location</h4>
              <p>{personal.location}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
