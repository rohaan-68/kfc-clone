import React from 'react';
import Navbar from './components/Navbar';
import Food from './components/Main';
import Slider from './components/Slider';
import Footer from './components/Footer';

function App() {
  return (
    <div id="home" className="dark:bg-black ">
      <Navbar />
      <Slider />
      <Food />
      <Footer />
    </div>
  );
}

export default App;
