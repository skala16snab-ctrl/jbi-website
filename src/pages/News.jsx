import { Link } from 'react-router-dom';
import { ChevronRight, Calendar } from 'lucide-react';

const newsItems = [
  {
    id: 1,
    title: 'Модернизация формовочного цеха',
    date: '10.04.2026',
    excerpt: 'На заводе установлены новые автоматизированные линии, которые позволят увеличить объем выпускаемой продукции на 20%.'
  },
  {
    id: 2,
    title: 'Расширение ассортимента: новые дорожные плиты',
    date: '25.03.2026',
    excerpt: 'Мы начали выпуск обновленной серии дорожных плит ПДН с повышенными характеристиками морозостойкости.'
  },
  {
    id: 3,
    title: 'Пополнение собственного автопарка',
    date: '15.02.2026',
    excerpt: 'Для улучшения логистики и скорости доставки ЖБИ мы приобрели еще три новых манипулятора.'
  }
];

export default function News() {
  return (
    <div className="container page-content">
      <div className="breadcrumbs">
        <Link to="/">Главная</Link>
        <ChevronRight size={14} className="mx-1" />
        <span>Новости</span>
      </div>

      <h1 className="page-title">Новости завода</h1>
      <p className="page-subtitle">Актуальная информация о производстве и нашей компании.</p>

      <div className="grid grid-2">
        {newsItems.map(news => (
          <div key={news.id} className="card">
            <div style={{ display: 'flex', alignItems: 'center', color: 'var(--color-primary)', fontSize: '0.85rem', marginBottom: '0.75rem', fontWeight: 500 }}>
              <Calendar size={16} className="mr-2" style={{ marginRight: '0.5rem' }} />
              {news.date}
            </div>
            <h2 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>{news.title}</h2>
            <p className="text-muted" style={{ marginBottom: 0 }}>{news.excerpt}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
