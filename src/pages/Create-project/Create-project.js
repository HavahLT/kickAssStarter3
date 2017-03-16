import React, { Component } from 'react';
import './Create-project.css';
//import '../../App.css';
import Header from '../../composants/Header/Header.js';
import Footer from '../../composants/Footer/Footer.js';
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
          <p className="conseil-intro">Trois <span className="p-blue">petits conseils</span> pour bien réussir son projet !</p>
          <div className="kickass-flex">

            <div className="conseil">
              <img className='img-conseil' src={conseil1} alt="imageprojet"/>
              <h4 className="conseil-h4">Conseil n°1</h4>
              <p className="p-conseil">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            </div>

            <div className="conseil">
              <img className='img-conseil' src={conseil2} alt="imageprojet"/>
              <h4 className="conseil-h4">Conseil °2</h4>
              <p className="p-conseil">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            </div>

            <div className="conseil">
              <img className='img-conseil' src={conseil3} alt="imageprojet"/>
              <h4 className="conseil-h4">Conseil n°3</h4>
              <p className="p-conseil">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            </div>

          </div>
        </section>

        <section className="bloc-formulaire">

          <div className="container">

            <h2 className="kickass-h2">Votre projet</h2>
            <p className="conseil-form">Tous les champs sont <span className="p-blue">obligatoires.</span> Ne prenez pas cette étape à la légère !</p>

            <form className="">
              <div className="form-creation-projet">
                <div className="col-label">
                  <label className="label-form">Nom du projet</label>
                  <label className="label-form">Description</label>
                  <label className="label-form">URL de votre image</label>
                  <label className="label-form">Combien voulez-vous collecter ?</label>
                </div>

                <div className="col-input">
                  <input type="text" name="name" value=""></input>
                  <textarea name="description" rows="8" cols="40"></textarea>
                  <input type="text" name="url" value=""></input>
                  <div>
                  <input type="text" name="name" value=""></input>
                  <select className="" name="">
                    <option value="valeur1">€</option>
                    <option value="valeur1">£</option>
                    <option value="valeur1">$</option>
                  </select>
                </div>
                </div>
            </div>

            <div className="btn-form">
              <button className="kickass-btn" type="submit" name="button">Envoyer ma proposition</button>
            </div>

            </form>

            <form className="">
              <div className="">


                <div className="cp-row-projet">
                  <label className="label-form">Nom du projet</label>
                  <input type="text" name="name" value=""></input>
                </div>

                <div className="cp-row-projet">
                  <label className="label-form">Description</label>
                  <textarea name="description" rows="8" cols="40"></textarea>
                </div>

                <div className="cp-row-projet">
                  <label className="label-form">URL de votre image</label>
                  <input type="text" name="url" value=""></input>
                </div>

                <div className="cp-row-projet">
                  <label className="label-form">Combien voulez-vous collecter ?</label>

                  <input type="text" name="name" value=""></input>

                </div>
                <div className="cp-row-projet">
                  <select className="" name="">
                    <option value="valeur1">€</option>
                    <option value="valeur1">£</option>
                    <option value="valeur1">$</option>
                  </select>
                </div>

            </div>

            <div className="btn-form">
              <button className="kickass-btn" type="submit" name="button">Envoyer ma proposition</button>
            </div>

            </form>

          </div>

        </section>
        <section>
          <Footer/>
        </section>

      </div>
    );
  }
}

export default Pagecreateproject;
