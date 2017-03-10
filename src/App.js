import React, { Component } from 'react';
import './Reset.css';
import './App.css';
import Header from './Header/Header.js';
import Bandeau from './Bandeau/Bandeau.js';
import Projetsaleatoires from './Projetsaleatoires/Projetsaleatoires.js';
import Partenaires from './Partenaires/Partenaires.js';
import Footer from './Footer/Footer.js';
import './Data.js';

class App extends Component {
  render() {
    return (
      <div className="App">


      <div className="container-principal">
        <Header></Header>
        <Bandeau></Bandeau>
        <div className="container">
          <Projetsaleatoires></Projetsaleatoires>
        </div>
        <Partenaires></Partenaires>
        <Footer></Footer>
      </div>



      </div>
    );
  }
}

export default App;
