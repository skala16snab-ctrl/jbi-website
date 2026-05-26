import { Link } from 'react-router-dom';
import { ChevronRight, Truck, Map, Clock } from 'lucide-react';

export default function Delivery() {
  return (
    <div className="container page-content">
      <div className="breadcrumbs">
        <Link to="/">Главная</Link>
        <ChevronRight size={14} className="mx-1" />
        <span>Доставка</span>
      </div>

      <h1 className="page-title">Условия доставки</h1>
      <p className="page-subtitle">Быстрая и надежная доставка ЖБИ на ваш объект строго в оговоренные сроки.</p>

      <div className="grid grid-3" style={{ marginBottom: '3rem' }}>
        <div className="card">
          <Truck size={32} color="var(--color-primary)" style={{ marginBottom: '1rem' }} />
          <h3 style={{ marginBottom: '0.5rem' }}>Собственный автопарк</h3>
          <p className="text-muted">Длинномеры (20 тонн, 12 метров), манипуляторы для доставки и выгрузки.</p>
        </div>
        <div className="card">
          <Map size={32} color="var(--color-primary)" style={{ marginBottom: '1rem' }} />
          <h3 style={{ marginBottom: '0.5rem' }}>География доставок</h3>
          <p className="text-muted">Осуществляем доставку по всему региону и в соседние области. Возможен самовывоз.</p>
        </div>
        <div className="card">
          <Clock size={32} color="var(--color-primary)" style={{ marginBottom: '1rem' }} />
          <h3 style={{ marginBottom: '0.5rem' }}>Точность и сроки</h3>
          <p className="text-muted">Логистический отдел оптимизирует маршруты, обеспечивая прибытие транспорта в согласованное время.</p>
        </div>
      </div>

      <div className="content-block">
        <h2>Самовывоз</h2>
        <p>
          Также вы можете забрать продукцию собственным автотранспортом со склада нашего завода. 
          Погрузка изделий в открытые кузова осуществляется бесплатно силами завода (мостовыми и козловыми кранами).
        </p>

        <div className="info-alert" style={{ marginTop: '2rem' }}>
          <strong>Расчет стоимости доставки</strong>
          <p style={{ marginTop: '0.5rem' }}>
            Стоимость доставки рассчитывается индивидуально для каждого заказа в зависимости от объема, 
            веса продукции и удаленности объекта. Для точного расчета звоните нам: <strong>+7 (937) 620 - 05 - 90</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
