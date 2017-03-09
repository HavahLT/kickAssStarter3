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
      </ul>
    </div>

    <div>
      <button className="kickass-btn" type="button" name="button"><i className="fa fa-plus" aria-hidden="true"></i>Créer un projet</button>
    </div>

  </div>

  <div className="container kickass-footer-border"></div>

  <div className="kickass-flex kickass-footer-bottom">
    <div className="kickass-flex kickass-logo">
      <i className="fa fa-hourglass-half" aria-hidden="true"></i>
      <h1 className="kickass-h1">KickAssStarter</h1>
    </div>
    <div>
      <div className="kickass-footer-language">Français <i className="fa fa-eur" aria-hidden="true"></i>
      </div>
    </div>
  </div>
</footer>







      </div>
    );
  }
}

export default Footer;
