import { Link } from 'react-router-dom';
import { ChevronRight, Phone, Mail, MapPin } from 'lucide-react';
import './Contacts.css';

export default function Contacts() {
  return (
    <div className="container page-content">
      <div className="breadcrumbs">
        <Link to="/">Главная</Link>
        <ChevronRight size={14} className="mx-1" />
        <span>Контакты</span>
      </div>

      <h1 className="page-title">Контакты</h1>

      <div className="contacts-grid mt-4">
        <div className="contact-card">
          <div className="card-icon" style={{ marginBottom: '1rem', color: 'var(--color-primary)' }}>
            <MapPin size={32} />
          </div>
          <h3 style={{ marginBottom: '0.5rem' }}>Адрес</h3>
          <p className="text-muted">г. Казань, ул. Тулпар, 3А</p>
        </div>

        <div className="contact-card">
          <div className="card-icon" style={{ marginBottom: '1rem', color: 'var(--color-primary)' }}>
            <Phone size={32} />
          </div>
          <h3 style={{ marginBottom: '0.5rem' }}>Телефон</h3>
          <p className="text-muted">
            <a href="tel:+79376200590">+7 (937) 620-05-90</a>
          </p>
        </div>

        <div className="contact-card">
          <div className="card-icon" style={{ marginBottom: '1rem', color: 'var(--color-primary)' }}>
            <Mail size={32} />
          </div>
          <h3 style={{ marginBottom: '0.5rem' }}>E-mail</h3>
          <p className="text-muted">
            <a href="mailto:skala16@inbox.ru">skala16@inbox.ru</a>
          </p>
        </div>
      </div>
    </div>
  );
}
