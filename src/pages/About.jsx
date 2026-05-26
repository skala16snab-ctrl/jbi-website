import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function About() {
  return (
    <div className="container page-content">
      <div className="breadcrumbs">
        <Link to="/">Главная</Link>
        <ChevronRight size={14} className="mx-1" />
        <span>О заводе</span>
      </div>

      <h1 className="page-title">О заводе "СКАЛА"</h1>
      
      <div className="content-block mt-4">
        <p>
          Завод “Скала” более 15 лет производит и продает бетон и ЖБИ оптом и в розницу.
        </p>

        <p>
          В собственности есть автопарк, состоящий из 12 единиц техники.
        </p>

        <p>
          Изготовление любых изделий по Вашему техническому заданию. Доставка по всей России.
        </p>

        <br />
        <h2 style={{ marginBottom: '1rem' }}>Наши преимущества</h2>
        <div className="grid grid-2" style={{ gap: '1.5rem', marginBottom: '2rem' }}>
          <div className="card">
            <h4>Широчайший ассортимент</h4>
            <p className="text-muted" style={{ marginTop: '0.5rem' }}>Огромное количество сборных железобетонных изделий: звенья труб, плиты, лотки, колонны, балки.</p>
          </div>
          <div className="card">
            <h4>Реальные и конкурентные цены</h4>
            <p className="text-muted" style={{ marginTop: '0.5rem' }}>Мы являемся заводом-производителем, работа с нами означает отсутствие наценок посредников.</p>
          </div>
        </div>

        <div className="info-alert">
          <strong>Мы всегда рады общению с нашими клиентами!</strong>
          <p style={{ marginTop: '0.5rem' }}>
            Если у вас есть какие-либо пожелания, предложения, замечания, касающиеся работы нашего 
            завода — звоните нам: <strong>+7 (937) 620-05-90</strong>.
          </p>
        </div>
      </div>
    </div>
  );
}
