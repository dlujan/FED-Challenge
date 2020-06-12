import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import MediaSlider from './components/MediaSlider';
import CardsLibrary from './components/CardsLibrary';
import EquipmentCards from './components/EquipmentCards';
import Footer from './components/Footer';
import './App.scss';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Hero />
        <MediaSlider />
        <CardsLibrary />
        <EquipmentCards />
        <Footer />
      </div>
    );
  }
}

export default App;
