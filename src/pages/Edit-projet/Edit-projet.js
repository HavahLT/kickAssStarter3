import React, { Component } from 'react';
import Headerconnecte from '../../composants/Headerconnecte/Headerconnecte.js';
import Footer from '../../composants/Footer/Footer.js';
import './Edit-projet.css';


class Editprojet extends Component {
  render() {
    return (
      <div className="Editprojet">

        <Headerconnecte />

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

        <Footer />


      </div>
    );
  }
}

export default Editprojet;
