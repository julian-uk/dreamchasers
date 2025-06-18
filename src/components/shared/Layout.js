import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main style={{ padding: '1rem' }}>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
