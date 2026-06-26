# VESatikaaShop — Boutique Indian Fashion Portfolio

A fashion collection portfolio website for **VESatikaa Collections**, a boutique based in Hyderabad, India.

## About

VESatikaaShop showcases a curated selection of Indian ethnic wear — Kurtis, Sarees, and Lehengas — with a luxury editorial aesthetic. Customers browse the gallery, filter by collection, and inquire about products directly via WhatsApp.

## Key Technologies

- **React 19** + **Vite 8** — component-based SPA with fast HMR
- **React Router v7** — client-side routing (Home, Collections, Gallery, Contact)
- **Plain CSS** — custom design system with CSS variables, no utility frameworks
- **Google Fonts** — Playfair Display (headings) + Inter (body)
- **Formspree** — serverless contact form handling
- **Netlify** — hosting with SPA redirect support via `netlify.toml`

## Running Locally

```bash
npm install
npm run dev
```

The app runs at `http://localhost:5173`.

## Before Going Live

1. **WhatsApp number**: Replace `919XXXXXXXXX` in these files:
   - `src/components/Navbar.jsx`
   - `src/components/HeroSection.jsx`
   - `src/components/ProductCard.jsx`
   - `src/components/Footer.jsx`
   - `src/pages/Contact.jsx`

2. **Formspree endpoint**: Replace `YOUR_FORM_ID` in `src/pages/Contact.jsx` with your Formspree form ID.

## Project Structure

```
src/
  components/     Navbar, Footer, ProductCard, FilterBar, HeroSection
  pages/          Home, Collections, Gallery, Contact
  data/           products.json — all product data
  styles/         globals.css — design tokens and utilities
```