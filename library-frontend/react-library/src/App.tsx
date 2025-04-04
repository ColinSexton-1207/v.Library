import React from 'react';
import './App.css';
import { Navbar } from './layouts/HeaderAndFooter/Navbar';
import { Home } from './layouts/Home/Home';
import { Footer } from './layouts/HeaderAndFooter/Footer';

export const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Footer/>
    </div>
  );
}