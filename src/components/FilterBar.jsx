import './FilterBar.css';

const FILTERS = ['All', 'Kurtis', 'Sarees', 'Lehengas'];

export default function FilterBar({ active, onChange }) {
  return (
    <div className="filter-bar" role="group" aria-label="Filter by collection">
      {FILTERS.map(f => (
        <button
          key={f}
          className={`filter-bar__btn${active === f ? ' filter-bar__btn--active' : ''}`}
          onClick={() => onChange(f)}
          aria-pressed={active === f}
        >
          {f}
        </button>
      ))}
    </div>
  );
}