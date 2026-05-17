import { Link } from 'react-router-dom';
import { Layers, ChevronRight } from 'lucide-react';
import catalogData from '../data/catalog.json';
import './Catalog.css';

export const categories = catalogData.categories || [];

export default function Catalog() {
  return (
    <div className="container py-4">
      <div className="breadcrumb">
        <Link to="/">Главная</Link>
        <ChevronRight size={14} />
        <span>Каталог</span>
      </div>

      <header className="catalog-header">
        <div className="catalog-header-icon">
          <Layers size={32} />
        </div>
        <div>
          <h1>Каталог продукции</h1>
          <p className="text-muted">Полный перечень железобетонных изделий производства завода "СКАЛА"</p>
        </div>
      </header>

      <div className="grid grid-3 catalog-list">
        {categories.map(category => (
          <Link key={category.id} to={`/catalog/${category.id}`} className="category-card-main">
            <h3>{category.title}</h3>
            <p>{category.desc}</p>
            <div className="card-footer">
              <span className="count">
                {catalogData.products.filter(p => p.categoryId === category.id).length} товаров
              </span>
              <ChevronRight size={18} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
