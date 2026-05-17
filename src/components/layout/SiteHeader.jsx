import React from 'react';
import TopBar from './TopBar';
import HeaderInfo from './HeaderInfo';
import Navbar from './Navbar';
import './SiteHeader.css';

export default function SiteHeader() {
  return (
    <header className="site-header">
      <TopBar />
      <HeaderInfo />
      <Navbar />
    </header>
  );
}
