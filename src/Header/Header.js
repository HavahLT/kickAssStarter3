import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <header className="kickass-flex kickass-menu">


          <div className="kickass-logo" id="k-logo">
            <i className="fa fa-hourglass-half" aria-hidden="true"></i>
            <h1 className="kickass-h1">KickAssStarter</h1>
          </div>
          <div className="kickass-menu-btn" id="k-btn">
            <button className="kickass-btn" type="button" name="button"><i className="fa fa-plus" aria-hidden="true"></i>Créer un projet</button>
          </div>
          <div className="kickass-search" id="k-search">
            <i className="fa fa-search fa-flip-horizontal" aria-hidden="true"></i>
            <input type="text"></input>
          </div>
          <div className="kickass-flex kickass-sign-login" id="k-log">
            <div className="kickass-sign">
              <p>S'inscrire</p>
            </div>
            <div className="kickass-login">
              <p>Se connecter</p>
            </div>
          </div>


        </header>
      </div>
    );
  }
}

export default Header;
