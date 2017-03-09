import React, { Component } from 'react';
import './Bandeau.css';


class Bandeau extends Component {
  render() {
    return (
      <div className="Bandeau">
        <div className='bandeauImage'>
          <div className='bandeauPresentation'>
            <p className='kickass-p-titre couleur-font-bandeau'>Médiacités</p>
            <p className='kickass-p-bandeau couleur-font-bandeau'>Mediacités est un nouveau journal en ligne d’investigation et de décryptage, indépendant et « multi-villes ». Cela fait beaucoup ? Allons-y mot par mot…</p>
            <p className='kickass-p-bandeau couleur-font-bandeau kickass-infos'><a href="#">Plus d'infos...</a></p>
          </div>
        </div>
      </div>
    );
  }
}

export default Bandeau;
