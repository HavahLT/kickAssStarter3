import React, { Component } from 'react';
import './Reset.css';
import './App.css';
import Header from './Header/Header.js';
import Bandeau from './Bandeau/Bandeau.js';
import Projetsaleatoires from './Projetsaleatoires/Projetsaleatoires.js';
import Partenaires from './Partenaires/Partenaires.js';
import Footer from './Footer/Footer.js';
import './Data.js';

class Home extends Component {
  render() {
    return (
      <div className="App">


      <div className="container-principal">
        <Header />
        <Bandeau />
        <div className="container">
          <Projetsaleatoires />
        </div>

        <Footer />
      </div>



      </div>
    );
  }
}

export default Home;
