
import { Link } from 'react-router-dom';
import { ChevronRight, Phone, Mail, MapPin, User, FileText } from 'lucide-react';
import './Contacts.css';

export default function Contacts() {
  return (
    <div className="container page-content">
      <div className="breadcrumbs">
        <Link to="/">Главная</Link>
        <ChevronRight size={14} className="mx-1" />
        <span>Контакты</span>
      </div>

      <h1 className="page-title">Контакты завода ЖБИ "СКАЛА" в Казани</h1>
      <h2 style={{ marginBottom: '2rem' }}>Контактная информация</h2>

      <div className="contacts-grid">
        <div className="contact-card">
          <div className="card-header">
            <User size={24} color="var(--color-primary)" />
            <h3 style={{ margin: 0, marginLeft: '0.5rem' }}>Лыков Тимур Юрьевич</h3>
          </div>
          <p className="text-muted" style={{marginTop: '1rem'}}>+7 (937) 620 - XX - XX</p>
          <p className="text-muted"><a href="tel:+79376200590" style={{fontWeight: 600}}>+7 (937) 620 - 05 - 90</a></p>
          <button className="btn-outline" style={{marginTop: '1rem'}}>Написать</button>
        </div>

        <div className="contact-card">
          <h3 style={{ marginBottom: '1rem' }}>Главный офис в Казани</h3>
          <p className="text-muted"><MapPin size={16} style={{display: 'inline', marginRight: '0.5rem'}}/>г. Казань, ул. Тулпар, 3, А</p>
          <p className="text-muted">пн-сб 8:00–18:00, без перерыва</p>
          <p className="text-muted" style={{marginTop: '0.5rem'}}>+7 (937) 620 - XX - XX</p>
          <p className="text-muted"><a href="tel:+79376200590" style={{fontWeight: 600}}>+7 (937) 620 - 05 - 90</a></p>

          <div className="map-container" style={{marginTop: '1.5rem'}}>
             <iframe src="https://yandex.ru/map-widget/v1/?um=constructor:51d8caa8596b82dc0c20c0daa95046261e4ff034b5a6be7b0bdaba70016aa580&source=constructor" width="100%" height="300" frameBorder="0"></iframe>
          </div>
        </div>

        <div className="contact-card">
          <h3 style={{ marginBottom: '1rem' }}>Склад</h3>
          <p className="text-muted"><MapPin size={16} style={{display: 'inline', marginRight: '0.5rem'}}/>пгт Васильево, ул. Совхоз, д. 10а</p>
          <p className="text-muted">пн-пт 8:00–17:00</p>
          <p className="text-muted" style={{marginTop: '0.5rem'}}>+7 (937) 620 - XX - XX</p>
          <p className="text-muted"><a href="tel:+79376200590" style={{fontWeight: 600}}>+7 (937) 620 - 05 - 90</a></p>
          <p className="text-muted" style={{marginTop: '0.5rem'}}><Mail size={16} style={{display: 'inline', marginRight: '0.5rem'}}/><a href="mailto:skala16@inbox.ru">skala16@inbox.ru</a></p>

          <div className="map-container" style={{marginTop: '1.5rem'}}>
             <iframe src="https://yandex.ru/map-widget/v1/?um=constructor:c78947f547dc9b9cfad1d6eb4587102a8c0e5668b12618fa66b4d88461841e64&source=constructor" width="100%" height="300" frameBorder="0"></iframe>
          </div>
        </div>
      </div>

      <div className="contact-form-section" style={{marginTop: '3rem', padding: '2rem', background: 'var(--color-bg-secondary)', borderRadius: 'var(--radius-md)'}}>
        <h2 style={{marginBottom: '0.5rem'}}>Нужна консультация? Задайте вопрос прямо сейчас!</h2>
        <p className="text-muted" style={{marginBottom: '2rem'}}>Наши менеджеры предоставят консультацию и оформят заявку на необходимую продукцию.</p>

        <form className="contact-form">
           <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem', marginBottom: '1rem'}}>
              <input type="text" placeholder="Ваше имя" style={{padding: '0.75rem', borderRadius: '4px', border: '1px solid #ccc'}} />
              <input type="tel" placeholder="Телефон" style={{padding: '0.75rem', borderRadius: '4px', border: '1px solid #ccc'}} />
              <input type="email" placeholder="E-mail" style={{padding: '0.75rem', borderRadius: '4px', border: '1px solid #ccc'}} />
           </div>
           <textarea placeholder="Сообщение" rows="4" style={{width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid #ccc', marginBottom: '1rem'}}></textarea>

           <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
               <button type="button" className="btn-outline" style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                   <FileText size={16}/> Прикрепить файл
               </button>
               <div>
                   <button type="submit" className="btn-primary" style={{padding: '0.75rem 2rem', background: 'var(--color-primary)', color: 'white', border: 'none', borderRadius: '4px', fontWeight: 600}}>Оставить заявку</button>
               </div>
           </div>
           <p style={{fontSize: '0.8rem', color: '#666', marginTop: '1rem'}}>
               Нажимая «Отправить», вы даете согласие на обработку персональных данных в соответствии с политикой конфиденциальности и принимаете условия пользовательского соглашения.
           </p>
        </form>
      </div>
    </div>
  );
}
