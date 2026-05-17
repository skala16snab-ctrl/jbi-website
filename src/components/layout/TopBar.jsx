import React from 'react';
import { MapPin, ShoppingCart } from 'lucide-react';
import './SiteHeader.css';

export default function TopBar() {
  return (
    <div className="top-bar">
      <div className="container top-bar-inner">
        <div className="top-bar-location">
          <MapPin size={16} color="var(--color-primary)" />
          <span>Казань</span>
        </div>
        <div className="top-bar-cart">
          <span>Корзина</span>
          <ShoppingCart size={18} />
        </div>
      </div>
    </div>
  );
}
