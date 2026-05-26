import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './HeroSlider.css';

const slides = [
  {
    id: 1,
    title: 'СВАИ',
    description: 'Сечение от 15 до 25 см, длина от 2 до 7 метров',
    image: 'https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop', // Construction site placeholder
  },
  {
    id: 2,
    title: 'ФУНДАМЕНТНЫЕ БЛОКИ',
    description: 'ФБС различных размеров для надежного основания',
    image: 'https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop', // Construction placeholder
  },
  {
    id: 3,
    title: 'ПЛИТЫ ПЕРЕКРЫТИЯ',
    description: 'Пустотные плиты ПК и ПБ высокого качества',
    image: 'https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop', // Construction placeholder
  }
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="hero-slider">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`slide ${index === currentSlide ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="container slide-content-wrapper">
            <div className="slide-card">
              <h1 className="slide-title">{slide.title}</h1>
              <p className="slide-description">{slide.description}</p>
              <button className="slide-button">Подробнее</button>
            </div>
          </div>
        </div>
      ))}
      
      <button className="slider-control prev" onClick={prevSlide}>
        <ChevronLeft size={32} />
      </button>
      <button className="slider-control next" onClick={nextSlide}>
        <ChevronRight size={32} />
      </button>
      
      <div className="slider-pagination">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`pagination-dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}
