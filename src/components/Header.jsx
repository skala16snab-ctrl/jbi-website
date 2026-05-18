import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, MapPin, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import './Header.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-top">
        <div className="container header-top-inner">
          <div className="top-info">
            <span className="info-item"><MapPin size={16} /> г. Казань, ул. Тулпар, 3А</span>
            <span className="info-item"><Mail size={16} /> skala16@inbox.ru</span>
          </div>
          <div className="top-hours">Пн-Сб 8:00 - 18:00</div>
        </div>
      </div>
      
      <div className="header-main">
        <div className="container header-main-inner">
          <Link to="/" className="logo">
            <span className="logo-text">ЖБИ<span className="logo-accent">СКАЛА</span></span>
            <span className="logo-sub">Завод железобетонных изделий</span>
          </Link>
          
          <nav className={`main-nav ${mobileMenuOpen ? 'open' : ''}`}>
            <Link to="/catalog" className={location.pathname.startsWith('/catalog') ? 'active' : ''}>Каталог</Link>
            <Link to="/production" className={location.pathname === '/production' ? 'active' : ''}>Производство</Link>
            <Link to="/delivery" className={location.pathname === '/delivery' ? 'active' : ''}>Доставка</Link>
            <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>О заводе</Link>
            <Link to="/news" className={location.pathname === '/news' ? 'active' : ''}>Новости</Link>
            <Link to="/contacts" className={location.pathname === '/contacts' ? 'active' : ''}>Контакты</Link>
          </nav>
          
          <div className="header-contacts">
            <a href="tel:+79376200590" className="phone-main">
              <Phone size={20} className="phone-icon" />
              <span>+7 (937) 620-05-90</span>
            </a>
          </div>

          <button className="mobile-menu-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
    </header>
  );
}
