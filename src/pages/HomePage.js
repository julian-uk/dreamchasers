import React from 'react';
import HeroBanner from '../components/home/HeroBanner';
//import NextMatchBanner from '../components/home/NextMatchBanner';
import NextFixturesRow from '../components/home/NextFixturesRow';
import NewsGrid from '../components/news/NewsGrid';
import FeaturedProducts from '../components/shop/FeaturedProducts';
import GalleryGrid from '../components/gallery/GalleryGrid';

function HomePage() {
  return (
    <div>
      <HeroBanner />
      <section className="container">
      <NextFixturesRow />
      </section>
      <section style={{ padding: '2rem' }}>
        <NewsGrid />
      </section>
      <section className="container">
        <GalleryGrid />
      </section>      
      <section style={{ padding: '2rem' }}>
        <h2>Shop Dream Chaser Gear</h2>
        <FeaturedProducts />
      </section>
    </div>
  );
}

export default HomePage;
