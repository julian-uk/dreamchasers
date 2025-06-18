import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      backgroundColor: scrolled ? '#111' : '#000',
      padding: '1rem 1.5rem',
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
      }}>
        <Link to="/" style={{ color: 'white', fontSize: '1.5rem', fontWeight: 'bold' }}>
          Dream Chaser
        </Link>

        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
        </button>


        <ul className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
          <li><NavLink to="/">Home</NavLink></li>

          <li className="navbar-dropdown">
            <span>Teams ▾</span>
            <ul className="navbar-submenu">
              <li><NavLink to="/teams/u12">U12 Boys</NavLink></li>
              <li><NavLink to="/teams/u14">U14 Boys</NavLink></li>
              <li><NavLink to="/teams/u16">U16 Boys</NavLink></li>
              <li><NavLink to="/teams/u18">U18 Boys</NavLink></li>
              <li><NavLink to="/teams/men">Men's Team</NavLink></li>
            </ul>
          </li>

          <li><NavLink to="/news">News</NavLink></li>
          <li><NavLink to="/shop">Shop</NavLink></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
