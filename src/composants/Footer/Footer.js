import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="Footer">

<footer className="kickass-footer">
  <div className="container kickass-flex">

    <div className="kickass-footer-menu">
      <p className="kickass-p-bold">A propos</p>
      <ul>
        <li>Qui sommes nous</li>
        <li>L'équipe</li>
        <li>Projets Records</li>
        <li>Presse</li>
        <li>Nous recrutons !</li>
        <li>Nos métiers</li>
        <li>Gallerie photos</li>
        <li>Nos locaux</li>

      </ul>
    </div>

    <div className="kickass-footer-menu">
      <p className="kickass-p-bold">Guide d'utilisation</p>
      <ul>
        <li>Aide en ligne</li>
        <li>Forum</li>
        <li>Conditions d'utilisation</li>
        <li>Confidentialité</li>
        <li>Contact</li>
        <li>Les tutos de KickAsss</li>
        <li>Foire aux questions</li>
        <li>Chat</li>
      </ul>
    </div>


    <div className="kickass-footer-menu">
      <p className="kickass-p-bold">Pour aller plus loin</p>
        <ul>
          <li>Blog</li>
          <li>Inspirations</li>
          <li>Formations</li>
          <li>KickAsss</li>
          <li>Newsletter</li>
          <li>Nos partenaires</li>
          <li>Boutique KickAssStarter</li>
        </ul>
    </div>


    <div className="kickass-footer-btn-resp">
      <button className="kickass-btn kickass-footer-btn" type="button" name="button"><i className="fa fa-plus" aria-hidden="true"></i>Créer un projet</button>
    </div>

  </div>

  <div className="container kickass-footer-border"></div>

  <div className="container">
    <div className="kickass-flex kickass-footer-bottom">
      <div className="kickass-footer-logo">
        <i className="fa fa-hourglass-half" aria-hidden="true"></i>
        <h1>KickAssStarter</h1>
      </div>
      <div className="kickass-flex kickass-footer-social">
        <i className="fa fa-facebook" aria-hidden="true"></i>
        <i className="fa fa-twitter" aria-hidden="true"></i>
        <i className="fa fa-instagram" aria-hidden="true"></i>
        <i className="fa fa-linkedin" aria-hidden="true"></i>
        <i className="fa fa-play" aria-hidden="true"></i>
      </div>
      <div className="kickass-footer-lang-resp">
        <div className="kickass-footer-language">Français <i className="fa fa-eur" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  </div>
</footer>







      </div>
    );
  }
}

export default Footer;
