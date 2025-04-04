import React from 'react';
import './App.css';
import { Navbar } from './layouts/HeaderAndFooter/Navbar';
import { TopBooks } from './layouts/Home/TopBooks';
import { Carousel } from './layouts/Home/Carousel';
import { Hero } from './layouts/Home/Hero';
import { LibraryServices } from './layouts/Home/LibraryServices';
import { Footer } from './layouts/HeaderAndFooter/Footer';

function App() {
  return (
    <div>
      <Navbar/>
      <TopBooks/>
      <Carousel/>
      <Hero/>
      <LibraryServices/>
      <Footer/>
    </div>
  );
}

export default App;
