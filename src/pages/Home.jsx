import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Factory, Truck, ShieldCheck, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import './Home.css';

import HeroSlider from '../components/home/HeroSlider';

export default function Home() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <>
      <HeroSlider />

      <section className="features section">
        <div className="container">
          <div className="grid grid-3 features-grid">
            <motion.div className="feature-card" initial="hidden" whileInView="visible" viewport={{ once:true }} variants={fadeInUp}>
              <Factory className="feature-icon" size={40} />
              <h3 className="feature-title">Собственное производство</h3>
              <p className="text-muted">Контроль качества на всех этапах. Современные производственные линии.</p>
            </motion.div>
            <motion.div className="feature-card" initial="hidden" whileInView="visible" viewport={{ once:true }} variants={fadeInUp} transition={{ delay: 0.2 }}>
              <ShieldCheck className="feature-icon" size={40} />
              <h3 className="feature-title">Гарантия качества по ГОСТ</h3>
              <p className="text-muted">Вся продукция сертифицирована, проходит строгий лабораторный контроль.</p>
            </motion.div>
            <motion.div className="feature-card" initial="hidden" whileInView="visible" viewport={{ once:true }} variants={fadeInUp} transition={{ delay: 0.4 }}>
              <Truck className="feature-icon" size={40} />
              <h3 className="feature-title">Доставка на объект</h3>
              <p className="text-muted">Свой автопарк длинномеров и манипуляторов. Точно в срок.</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="catalog-highlight section bg-secondary">
        <div className="container">
          <h2 className="section-title">Основные направления</h2>
          <div className="grid grid-4 cat-grid">
            <Link to="/catalog/civil" className="cat-card">
              <div className="cat-icon-wrap"><CheckCircle2 size={32} /></div>
              <h3>Гражданское строительство</h3>
              <p className="text-muted">Сваи, плиты перекрытия, перемычки, ФБС</p>
            </Link>
            <Link to="/catalog/network" className="cat-card">
              <div className="cat-icon-wrap"><CheckCircle2 size={32} /></div>
              <h3>Инженерные сети</h3>
              <p className="text-muted">Кольца (КС), лотки теплотрасс</p>
            </Link>
            <Link to="/catalog/roads" className="cat-card">
              <div className="cat-icon-wrap"><CheckCircle2 size={32} /></div>
              <h3>Дорожное строительство</h3>
              <p className="text-muted">Плиты дорожные ПДН, бордюры</p>
            </Link>
            <Link to="/catalog/energy" className="cat-card">
              <div className="cat-icon-wrap"><CheckCircle2 size={32} /></div>
              <h3>Нефтегаз и энергетика</h3>
              <p className="text-muted">Стойки СВ, опоры ЛЭП</p>
            </Link>
          </div>
          <div className="center-btn">
            <Link to="/catalog" className="btn btn-outline">Смотреть весь каталог</Link>
          </div>
        </div>
      </section>

      <section className="cta section">
        <div className="container cta-container">
          <div className="cta-content">
            <h2>Готовы сделать заказ или нужна консультация?</h2>
            <p>Наши специалисты подберут необходимые изделия по вашему проекту и организуют доставку.</p>
            <div className="cta-contacts">
              <div className="cta-phone">+7 (937) 620-05-90</div>
              <div className="cta-email">skala16@inbox.ru</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
