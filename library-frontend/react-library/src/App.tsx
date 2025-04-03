import React from 'react';
import './App.css';
import { Navbar } from './layouts/HeaderAndFooter/Navbar';
import { TopBooks } from './layouts/Home/TopBooks';
import { Carousel } from './layouts/Home/Carousel';

function App() {
  return (
    <div>
      <Navbar/>
      <TopBooks/>
      <Carousel/>
    </div>
  );
}

export default App;
