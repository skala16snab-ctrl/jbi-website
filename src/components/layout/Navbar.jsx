import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import './SiteHeader.css';

export default function Navbar() {
  return (
    <div className="navbar-wrapper">
      <div className="container navbar-inner">
        <nav className="navbar-nav">
          <Link to="/" className="nav-link">Главная</Link>
          <Link to="/about" className="nav-link">О компании</Link>
          <Link to="/catalog" className="nav-link">Каталог</Link>
          <Link to="/delivery" className="nav-link">Доставка и оплата</Link>
          <Link to="/shipments" className="nav-link">Наши отгрузки</Link>
          <Link to="/contacts" className="nav-link">Контакты</Link>
        </nav>
        
        <div className="navbar-search">
          <input type="text" placeholder="Поиск товаров" className="search-input" />
          <Search size={18} className="search-icon" />
        </div>
        

      </div>
    </div>
  );
}
