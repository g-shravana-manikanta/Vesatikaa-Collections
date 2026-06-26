import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import FilterBar from '../components/FilterBar';
import ProductCard from '../components/ProductCard';
import productsData from '../data/products.json';
import './Gallery.css';

const FILTER_MAP = {
  All: null,
  Kurtis: 'Kurtis',
  Sarees: 'Sarees',
  Lehengas: 'Lehengas',
};

export default function Gallery() {
  const [searchParams] = useSearchParams();
  const [activeFilter, setActiveFilter] = useState('All');

  useEffect(() => {
    const col = searchParams.get('collection');
    if (col) {
      const matched = Object.keys(FILTER_MAP).find(
        k => k.toLowerCase() === col.toLowerCase()
      );
      if (matched) setActiveFilter(matched);
    }
  }, [searchParams]);

  const { products } = productsData;
  const filtered = FILTER_MAP[activeFilter]
    ? products.filter(p => p.collection === FILTER_MAP[activeFilter])
    : products;

  return (
    <main className="page-wrapper">
      <div className="page-header">
        <div className="container">
          <h1>Product Gallery</h1>
          <p>All {products.length} pieces — filter by collection and inquire directly on WhatsApp.</p>
        </div>
      </div>

      <section className="gallery-section">
        <div className="container">
          <FilterBar active={activeFilter} onChange={setActiveFilter} />

          <div className="gallery-count" aria-live="polite" aria-atomic="true">
            Showing <strong>{filtered.length}</strong> {filtered.length === 1 ? 'piece' : 'pieces'}
            {activeFilter !== 'All' ? ` in ${activeFilter}` : ''}
          </div>

          <div className="gallery-grid">
            {filtered.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="gallery-empty">
              <p>No products found in this collection.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}