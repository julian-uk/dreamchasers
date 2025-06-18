import React from 'react';

function HeroBanner() {
  return (
    <div
      className="hero"
      style={{ backgroundImage: 'url("/assets/hero.png")' }}
    >
      <div>
        <h1>Dream Chaser Basketball</h1>
        <p>Inspiring the next generation</p>
      </div>
    </div>
  );
}

export default HeroBanner;
