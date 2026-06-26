# AGENTS.md — VESatikaaShop Architecture Guide

## Project Overview

React + Vite SPA for VESatikaa Collections, a Hyderabad-based Indian fashion boutique. No backend — data comes from a static JSON file; contact is via Formspree + WhatsApp.

## Key Directories

```
src/
  components/       Reusable UI components (Navbar, Footer, ProductCard, FilterBar, HeroSection)
  pages/            Route-level page components (Home, Collections, Gallery, Contact)
  data/             products.json — single source of truth for all product data
  styles/           globals.css — CSS custom properties (design tokens) + shared utility classes
public/             favicon.svg, icons.svg
```

## Routing

React Router v7 in `App.jsx`:
- `/` → `Home.jsx`
- `/collections` → `Collections.jsx`
- `/gallery` → `Gallery.jsx` (accepts `?collection=kurtis|sarees|lehengas` query param)
- `/*` → redirected to `/index.html` by `netlify.toml` for SPA support

## Design System

All design tokens are in `src/styles/globals.css` as CSS custom properties:
- `--plum` (#4A1942) — primary brand color
- `--gold` (#C9973A) — accent
- `--ivory` (#FAF7F2) — background
- `--blush` (#F2D9D0) — card backgrounds

Shared utility classes: `.btn-primary`, `.btn-secondary`, `.btn-gold`, `.badge`, `.badge-stock`, `.badge-limited`, `.container`, `.section-title`, `.section-subtitle`, `.page-header`, `.page-wrapper`

## Data Model

`src/data/products.json` — two arrays:
- `products[]` — each has: `id, name, collection, fabric, price, availability, image, whatsappMessage`
- `collections[]` — metadata for collection cards

## WhatsApp Integration

`WHATSAPP_NUMBER` constant is defined per-file (not centralized). Files to update when going live:
- `Navbar.jsx`, `HeroSection.jsx`, `ProductCard.jsx`, `Footer.jsx`, `Contact.jsx`

The WhatsApp URL pattern: `https://wa.me/{number}?text={encodeURIComponent(message)}`

## Key Coding Conventions

- CSS co-located with component (`ComponentName.css` alongside `ComponentName.jsx`)
- No Tailwind; all styles in plain CSS using design token variables
- Product images use placehold.co URLs with collection-specific colors
- `loading="lazy"` on all product images
- Gallery filter state is local (`useState`) — no global state management needed

## Formspree

Contact form posts to `FORMSPREE_ENDPOINT` in `Contact.jsx`. Replace `YOUR_FORM_ID` with the actual ID from formspree.io. The form uses fetch + JSON, not HTML form submission.
