import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import productsData from '../data/products.json';
import './Collections.css';

const COLLECTION_INFO = {
  Kurtis: {
    tagline: 'Everyday Elegance',
    description: 'Handpicked kurtis in luxurious fabrics — from breezy cottons to resplendent silks, crafted for the modern Indian woman.',
    color: '#F2D9D0',
  },
  Sarees: {
    tagline: 'Timeless Grace',
    description: 'Exquisite sarees from the finest weaving traditions of India — Banarasi, Chanderi, and Kanjivaram, reimagined for today.',
    color: '#E8D5F5',
  },
  Lehengas: {
    tagline: 'Bridal Splendour',
    description: 'Statement lehengas for brides, bridesmaids, and festive occasions — adorned with zardozi, mirrors, and heritage craftsmanship.',
    color: '#FFE8D6',
  },
};

const CATEGORIES = ['Kurtis', 'Sarees', 'Lehengas'];

export default function Collections() {
  const { products } = productsData;

  return (
    <main className="page-wrapper">
      <div className="page-header">
        <div className="container">
          <h1>Our Collections</h1>
          <p>Three curated worlds of Indian fashion, each with its own story.</p>
        </div>
      </div>

      {CATEGORIES.map(category => {
        const info = COLLECTION_INFO[category];
        const items = products.filter(p => p.collection === category).slice(0, 4);

        return (
          <section key={category} className="collection-section">
            <div className="container">
              <div className="collection-section__header" style={{ '--accent-color': info.color }}>
                <div className="collection-section__swatch" style={{ backgroundColor: info.color }} aria-hidden="true" />
                <div>
                  <p className="collection-section__tagline">{info.tagline}</p>
                  <h2 className="collection-section__title">{category}</h2>
                  <p className="collection-section__desc">{info.description}</p>
                </div>
              </div>

              <div className="collection-section__grid">
                {items.map(p => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>

              <div className="collection-section__footer">
                <Link
                  to={`/gallery?collection=${category.toLowerCase()}`}
                  className="btn-secondary"
                >
                  View All {category} →
                </Link>
              </div>
            </div>
          </section>
        );
      })}
    </main>
  );
}