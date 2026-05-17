import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <Link to="/" className="footer-logo">
              <span className="logo-text">ЖБИ<span className="logo-accent">СКАЛА</span></span>
            </Link>
            <p className="footer-desc">
              Производство сборных железобетонных конструкций для дорожного, гражданского и промышленного строительства. Высокое качество и надежность.
            </p>
          </div>
          
          <div className="footer-col">
            <h4 className="footer-title">Навигация</h4>
            <div className="footer-links">
              <Link to="/catalog">Каталог продукции</Link>
              <Link to="/production">О производстве</Link>
              <Link to="/delivery">Доставка</Link>
              <Link to="/about">О заводе</Link>
              <Link to="/news">Новости</Link>
            </div>
          </div>
          
          <div className="footer-col">
            <h4 className="footer-title">Каталог</h4>
            <div className="footer-links">
              <Link to="/catalog/civil">Гражданское стр-во</Link>
              <Link to="/catalog/network">Инженерные сети</Link>
              <Link to="/catalog/roads">Дорожное строительство</Link>
              <Link to="/catalog/energy">Нефтегаз и Энергетика</Link>
            </div>
          </div>
          
          <div className="footer-col">
            <h4 className="footer-title">Контакты</h4>
            <div className="footer-contact-items">
              <a href="tel:+79376200590" className="footer-contact-item">
                <Phone size={18} />
                <div>
                  <div className="contact-val">+7 (937) 620-05-90</div>
                  <div className="contact-lbl">Основной номер</div>
                </div>
              </a>
              <a href="mailto:skala16@inbox.ru" className="footer-contact-item">
                <Mail size={18} />
                <div className="contact-val">skala16@inbox.ru</div>
              </a>
              <div className="footer-contact-item">
                <MapPin size={18} />
                <div>
                  <div className="contact-val">г. Казань, ул. Тулпар, 3А</div>
                  <div className="contact-lbl">Пн-Сб 8:00 - 18:00</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Завод ЖБИ "СКАЛА" (ООО "ПК СКАЛА"). Все права защищены. Сайт носит исключительно информационный характер.</p>
        </div>
      </div>
    </footer>
  );
}
