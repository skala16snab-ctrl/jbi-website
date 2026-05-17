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
          Мы рады приветствовать вас на сайте завода ЖБИ "СКАЛА". 
          Наш завод специализируется на изготовлении сборных железобетонных изделий для дорожного, 
          общегражданского, промышленного строительства, для строительства инженерных сетей и 
          коммуникаций, благоустройства территорий, нефтегазового строительства.
        </p>

        <p>
          Специалисты компании принимают активное участие в разработке рабочей документации строительных 
          объектов, в изготовлении и реализации сборных железобетонных изделий и конструкций. Коллектив 
          состоит из высококвалифицированных специалистов, имеющих многолетний опыт в сфере производства 
          сборных ЖБИ.
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
