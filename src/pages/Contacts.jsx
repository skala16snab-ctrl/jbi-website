
import { Link } from 'react-router-dom';
import { ChevronRight, Phone, Mail, MapPin, User, FileText } from 'lucide-react';
import './Contacts.css';

export default function Contacts() {
  return (
    <div className="container page-content">
      <div className="breadcrumbs">
        <Link to="/">Главная</Link>
        <ChevronRight size={14} className="mx-1" />
        <span>Контакты</span>
      </div>

      <h1 className="page-title">Контакты завода ЖБИ "СКАЛА" в Казани</h1>
      <h2 style={{ marginBottom: '2rem' }}>Контактная информация</h2>

      <div className="contacts-grid">
        <div className="contact-card">
          <div className="card-header">
            <User size={24} color="var(--color-primary)" />
            <h3 style={{ margin: 0, marginLeft: '0.5rem' }}>Лыков Тимур Юрьевич</h3>
          </div>
          <p className="text-muted" style={{marginTop: '1rem'}}><a href="tel:+79376200590" style={{fontWeight: 600}}>+7 (937) 620-05-90</a></p>
          <button className="btn-outline" style={{marginTop: '1rem'}}>Написать</button>
        </div>

        <div className="contact-card">
          <h3 style={{ marginBottom: '1rem' }}>Главный офис в Казани</h3>
          <p className="text-muted"><MapPin size={16} style={{display: 'inline', marginRight: '0.5rem'}}/>г. Казань, ул. Тулпар, 3, А</p>
          <p className="text-muted">пн-сб 8:00–18:00, без перерыва</p>
          <p className="text-muted" style={{marginTop: '0.5rem'}}><a href="tel:+79376200590" style={{fontWeight: 600}}>+7 (937) 620-05-90</a></p>

          <div className="map-container" style={{marginTop: '1.5rem'}}>
             <iframe src="https://yandex.ru/map-widget/v1/?um=constructor:51d8caa8596b82dc0c20c0daa95046261e4ff034b5a6be7b0bdaba70016aa580&source=constructor" width="100%" height="300" frameBorder="0"></iframe>
          </div>
        </div>

        <div className="contact-card">
          <h3 style={{ marginBottom: '1rem' }}>Склад</h3>
          <p className="text-muted"><MapPin size={16} style={{display: 'inline', marginRight: '0.5rem'}}/>пгт Васильево, ул. Совхоз, д. 10а</p>
          <p className="text-muted">пн-пт 8:00–17:00</p>
          <p className="text-muted" style={{marginTop: '0.5rem'}}><a href="tel:+79376200590" style={{fontWeight: 600}}>+7 (937) 620-05-90</a></p>
          <p className="text-muted" style={{marginTop: '0.5rem'}}><Mail size={16} style={{display: 'inline', marginRight: '0.5rem'}}/><a href="mailto:skala16@inbox.ru">skala16@inbox.ru</a></p>

          <div className="map-container" style={{marginTop: '1.5rem'}}>
             <iframe src="https://yandex.ru/map-widget/v1/?um=constructor:c78947f547dc9b9cfad1d6eb4587102a8c0e5668b12618fa66b4d88461841e64&source=constructor" width="100%" height="300" frameBorder="0"></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
