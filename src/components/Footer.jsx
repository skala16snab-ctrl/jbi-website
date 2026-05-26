import { Link } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <Link to="/" className="footer-logo">
            <span className="logo-text">СКАЛА</span>
          </Link>

          <div className="footer-contacts">
            <div className="footer-contact-item">
              <a href="mailto:skala.ooo@inbox.ru" className="contact-val">skala.ooo@inbox.ru</a>
              <a href="tel:+79376200590" className="contact-val" style={{fontWeight: 'bold'}}>+7 (937) 620-05-90</a>
            </div>
            <div className="footer-contact-item">
              <span className="contact-val">пн-сб 8:00-18:00</span>
              <a href="https://yandex.ru/maps/-/CDrnIR0n" target="_blank" rel="noreferrer" className="contact-val">
                г. Казань, ул. Тулпар, 3А
              </a>
            </div>
          </div>

          <div className="footer-actions">
            <button className="btn-primary call-btn">Заказать звонок</button>
            <a href="#" className="whatsapp-link" title="WhatsApp">
              <MessageCircle size={32} color="#25D366" />
            </a>
          </div>
        </div>

        <div className="footer-bottom-menu">
          <Link to="/about">О компании</Link>
          <Link to="/catalog">Каталог</Link>
          <Link to="/reviews">Отзывы</Link>
          <Link to="/delivery">Доставка и оплата</Link>
          <Link to="/contacts">Контакты</Link>
        </div>
      </div>
    </footer>
  );
}
