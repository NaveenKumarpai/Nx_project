import React from 'react';
import './app.css';
import HeroImage from './Images/music.jpg';
import logo from './Images/logo.png'; 
import { Header } from 'antd/es/layout/layout';

const App = () => {
  return (
    <div className='background'>
      <div className='header-container'>
        <img src={logo} alt="AI" className="logo" />
        <div className="header">
          <li>Home</li>
          <li>Procurement</li>
          <li>Services</li>
          <li>Hrms</li>
          <li>Events</li>
        </div>
      </div>
      <section >
        <img src={HeroImage} alt="AI" className="hero-image" />
      </section>
    </div>
  );
}

export default App;
