import { useParams, Link } from 'react-router-dom';
import { useState, useMemo } from 'react';
import { ChevronRight, Phone, Package } from 'lucide-react';
import catalogData from '../data/catalog.json';
import './Catalog.css';

export default function CategoryDetail() {
  const { categoryId } = useParams();
  const [selectedSub, setSelectedSub] = useState(null);

  // Ищем категорию в данных
  const category = useMemo(() => 
    (catalogData.categories || []).find(c => c.id === categoryId), 
  [categoryId]);

  // Все товары этой категории
  const allProducts = useMemo(() => 
    (catalogData.products || []).filter(p => p.categoryId === categoryId),
  [categoryId]);

  // Собираем список всех ПОДкатегорий (Группа 2 уровня из Excel)
  const subCategories = useMemo(() => {
    const subs = new Set();
    allProducts.forEach(p => {
      if (p.subCategory) subs.add(p.subCategory);
    });
    return Array.from(subs).sort();
  }, [allProducts]);

  // Решаем, что показывать на странице
  const displayProducts = useMemo(() => {
    // Если подразделы есть, но мы еще ничего не выбрали - товаров на экране быть не должно
    if (subCategories.length > 0 && !selectedSub) return [];
    // Если подразделы есть и выбран конкретный - фильтруем по нему
    if (subCategories.length > 0) return allProducts.filter(p => p.subCategory === selectedSub);
    // Иначе (если подразделов нет вообще) - показываем всё скопом
    return allProducts;
  }, [allProducts, subCategories, selectedSub]);

  if (!category) return <div className="container py-4">Категория не нужна</div>;

  return (
    <div className="container py-4">
      <div className="breadcrumb">
        <Link to="/">Главная</Link>
        <ChevronRight size={14} className="mx-1" />
        <Link to="/catalog">Каталог</Link>
        <ChevronRight size={14} className="mx-1" />
        
        {selectedSub ? (
          <span className="clickable-crumb" onClick={() => setSelectedSub(null)} style={{cursor: 'pointer', color: 'var(--color-primary)', textDecoration: 'underline'}}>
            {category.title}
          </span>
        ) : (
          <span>{category.title}</span>
        )}

        {selectedSub && (
          <>
            <ChevronRight size={14} className="mx-1" />
            <span>{selectedSub}</span>
          </>
        )}
      </div>

      <header className="page-header" style={{marginBottom: '2rem'}}>
        <h1 className="page-title">{selectedSub || category.title}</h1>
        <p className="page-subtitle">{category.desc}</p>
      </header>

      {/* ШАГ 1: Показываем подразделы, если они есть и ни один не выбран */}
      {subCategories.length > 0 && !selectedSub ? (
        <div className="grid grid-3 catalog-list">
          {subCategories.map(sub => (
            <div key={sub} className="category-card-main sub-card" onClick={() => setSelectedSub(sub)} style={{cursor: 'pointer'}}>
              <div className="catalog-header-icon" style={{width: '40px', height: '40px', marginBottom: '1rem'}}>
                <Package size={24} />
              </div>
              <h3>{sub}</h3>
              <div className="card-footer">
                <span className="count">
                  {allProducts.filter(p => p.subCategory === sub).length} поз.
                </span>
                <ChevronRight size={18} />
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* ШАГ 2: Список товаров (таблица) */
        <div className="products-table-wrapper">
          <table className="products-table">
            <thead>
              <tr>
                <th style={{width: '80px'}}>Фото</th>
                <th>Наименование</th>
                <th>Размеры, мм</th>
                <th>Масса</th>
              </tr>
            </thead>
            <tbody>
              {displayProducts.map(product => (
                <tr key={product.id}>
                  <td>
                    {product.image ? (
                       <div style={{width: '60px', height: '60px', borderRadius: '4px', overflow: 'hidden'}}>
                         <img src={product.image} alt={product.name} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                       </div>
                    ) : <div style={{width: '60px', height: '60px', background: '#eee'}}></div>}
                  </td>
                  <td><strong>{product.name}</strong></td>
                  <td>{product.dimensions || '-'}</td>
                  <td>{product.weight || '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
          
          <div className="info-alert mt-4">
             <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <Phone size={20} />
              <strong style={{ fontSize: '1.1rem' }}>Уточнить наличие и стоимость</strong>
            </div>
            <p>Для получения прайс-листа и расчета доставки, пожалуйста, свяжитесь с отделом продаж:</p>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '1rem' }}>
              +7 (937) 620-05-90
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
