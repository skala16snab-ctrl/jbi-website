import React from 'react';
import { Mail, Phone, Clock, MapPin } from 'lucide-react';
import './SiteHeader.css';

export default function HeaderInfo() {
  return (
    <div className="header-info">
      <div className="container header-info-inner">
        <div className="header-logo">
          <div className="logo-placeholder">
            <span className="logo-icon">⛰️</span>
            <span className="logo-text">СКАЛА</span>
          </div>
        </div>
        
        <div className="header-contacts">
          <div className="contact-item">
            <Mail size={16} color="var(--color-primary)" />
            <span>skala16@inbox.ru</span>
          </div>
          <div className="contact-item">
            <Phone size={16} color="var(--color-primary)" />
            <a href="tel:+79376200590" style={{ fontWeight: 500 }}>+7 (937) 620 - 05 - 90</a>
          </div>
          <div className="contact-item">
            <Clock size={16} color="var(--color-primary)" />
            <span>пн-сб 8:00-18:00</span>
          </div>
          <div className="contact-item">
            <MapPin size={16} color="var(--color-primary)" />
            <span>г. Казань, ул. Тулпар, 3</span>
          </div>
        </div>
        
      </div>
    </div>
  );
}
