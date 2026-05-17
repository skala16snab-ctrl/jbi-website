import React from 'react';
import SiteHeader from './layout/SiteHeader';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="page-wrapper">
      <SiteHeader />
      <main className="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
}
