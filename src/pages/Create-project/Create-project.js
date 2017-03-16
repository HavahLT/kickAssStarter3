import React, { Component } from 'react';
import './Create-project.css';
import Header from '../../composants/Header/Header.js';
import conseil1 from './img/img-conseil1.jpg';
import conseil2 from './img/img-conseil2.jpg';
import conseil3 from './img/img-conseil3.jpg';

class Pagecreateproject extends Component {
  render() {
    return (
      <div className="Pagecreateproject">

        <section>
          <Header />
        </section>

        <section className="bloc-conseil">
          <p className="conseil-intro">Trois petits conseils pour bien reussir son projet !</p>
          <div className="kickass-flex">

            <div className="conseil">
              <img className='img-conseil' src={conseil1} alt="imageprojet"/>
              <h3 className="kickass-h3">Conseil n°1</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            </div>

            <div className="conseil">
              <img className='img-conseil' src={conseil2} alt="imageprojet"/>
              <h3 className="kickass-h3">Conseil °2</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            </div>

            <div className="conseil">
              <img className='img-conseil' src={conseil3} alt="imageprojet"/>
              <h3 className="kickass-h3">Conseil n°3</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            </div>

          </div>
        </section>
        <section>
          <div className="container">

            <h2 className="kickass-h2">Votre projet</h2>
            <form>
              <label>Nom du projet</label>
                <input type="text" name="name" value=""></input>
              <label>Description</label>
                <textarea name="description" rows="8" cols="40"></textarea>
              <label>Uploader une image</label>
              <label>Combien voulez-vous collecter ?</label>
                <input type="text" name="name" value=""></input>
                <select className="" name="">
                  <option value="valeur1">€</option>
                  <option value="valeur1">£</option>
                  <option value="valeur1">$</option>
                </select>
              <label>A propos de vous</label>
              <input type="text" name="name" value=""></input>

            <button className="kickass-btn" type="submit" name="button">Envoyer ma proposition</button>
            </form>
          </div>

        </section>

      </div>
    );
  }
}

export default Pagecreateproject;
