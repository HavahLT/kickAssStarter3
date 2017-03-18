import React, { Component } from 'react';
import '../../Reset.css';
import '../../App.css';
import Headerconnecte from '../../composants/Headerconnecte/Headerconnecte.js';
import Bandeau from '../../composants/Bandeau/Bandeau.js';
import Projetsaleatoires from '../../composants/Projetsaleatoires/Projetsaleatoires.js';
import Partenaires from '../../composants/Partenaires/Partenaires.js';
import Footer from '../../composants/Footer/Footer.js';
import '../../Data.js';

class Homeconnected extends Component {
  render() {
    return (
      <div className="App">
      <div className="container-principal">
        <Headerconnecte />
        <Bandeau />
        <div className='container'>
          <Projetsaleatoires />
        </div>
          <Partenaires />
        </div>

        <Footer />
      </div>
    );
  }
}


export default Homeconnected;
