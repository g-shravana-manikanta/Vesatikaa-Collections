import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import ProductCard from '../components/ProductCard';
import productsData from '../data/products.json';
import './Home.css';

const COLLECTION_HIGHLIGHTS = [
  {
    id: 'kurtis',
    name: 'Kurtis',
    tagline: 'Everyday Elegance',
    icon: '🪷',
    bg: '#F2D9D0',
    accent: '#4A1942',
    description: 'From breezily casual to artfully formal — kurtis that go wherever you do.',
  },
  {
    id: 'sarees',
    name: 'Sarees',
    tagline: 'Timeless Grace',
    icon: '✨',
    bg: '#E8D5F5',
    accent: '#4A1942',
    description: 'Heritage weaves — Banarasi, Chanderi, Kanjivaram — reimagined for today.',
  },
  {
    id: 'lehengas',
    name: 'Lehengas',
    tagline: 'Bridal Splendour',
    icon: '👑',
    bg: '#FFE8D6',
    accent: '#4A1942',
    description: 'Statement pieces for brides, celebrations, and moments that matter.',
  },
];

const BRAND_VALUES = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
        <path d="M8 12l2 2 4-4"/>
      </svg>
    ),
    title: 'Handpicked Fabrics',
    body: 'Every piece is personally sourced from renowned weavers and artisan clusters across India — quality you can feel.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'Boutique Styling',
    body: 'Not just selling — our team helps you find the right silhouette, drape, and occasion match for your unique style.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
    title: 'Direct Inquiry',
    body: 'Skip the cart — connect on WhatsApp for real-time availability, sizing guidance, and personal attention.',
  },
];

export default function Home() {
  const featuredProducts = productsData.products.slice(0, 3);

  return (
    <main>
      <HeroSection />

      {/* Collection Highlights */}
      <section className="home-collections">
        <div className="container">
          <p className="section-subtitle" style={{ textAlign: 'center' }}>Explore Our World</p>
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '3rem' }}>The Collections</h2>
          <div className="home-collections__grid">
            {COLLECTION_HIGHLIGHTS.map(c => (
              <Link key={c.id} to={`/gallery?collection=${c.id}`} className="collection-card" style={{ '--card-bg': c.bg, '--card-accent': c.accent }}>
                <div className="collection-card__bg" style={{ backgroundColor: c.bg }} />
                <div className="collection-card__body">
                  <span className="collection-card__icon" aria-hidden="true">{c.icon}</span>
                  <p className="collection-card__tagline">{c.tagline}</p>
                  <h3 className="collection-card__name">{c.name}</h3>
                  <p className="collection-card__desc">{c.description}</p>
                  <span className="collection-card__cta">Explore →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="home-featured">
        <div className="container">
          <div className="home-featured__header">
            <div>
              <p className="section-subtitle">Editor's Picks</p>
              <h2 className="section-title">Featured This Season</h2>
            </div>
            <Link to="/gallery" className="btn-secondary">View All</Link>
          </div>
          <div className="home-featured__grid">
            {featuredProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Brand Values */}
      <section className="home-values">
        <div className="container">
          <p className="section-subtitle" style={{ textAlign: 'center' }}>The VESatikaa Promise</p>
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '3rem' }}>Why VESatikaa</h2>
          <div className="home-values__grid">
            {BRAND_VALUES.map((v, i) => (
              <div key={i} className="value-card">
                <div className="value-card__icon">{v.icon}</div>
                <h3 className="value-card__title">{v.title}</h3>
                <p className="value-card__body">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="home-cta">
        <div className="container home-cta__inner">
          <div>
            <h2 className="home-cta__title">Ready to find your perfect look?</h2>
            <p className="home-cta__sub">Browse 12+ handpicked pieces or chat with us directly on WhatsApp.</p>
          </div>
          <div className="home-cta__actions">
            <Link to="/gallery" className="btn-gold">Browse Gallery</Link>
            <Link to="/contact" className="btn-secondary home-cta__contact">Contact Us</Link>
          </div>
        </div>
      </section>
    </main>
  );
}