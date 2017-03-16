import React, { Component } from 'react';
import './Pageprojet.css';
import Header from '../../composants/Header/Header.js';
import Footer from '../../composants/Footer/Footer.js';
import avatar from './img/avatar.jpeg';
import contr001 from './img/contributeur001.jpeg';
import contr002 from './img/contributeur002.jpeg';
import contr003 from './img/contributeur003.jpeg';
import contr004 from './img/contributeur004.jpeg';
import contr005 from './img/contributeur005.jpeg';
import contr006 from './img/contributeur006.jpeg';
import contr007 from './img/contributeur007.jpeg';
import contr008 from './img/contributeur008.jpg';
import contr009 from './img/contributeur009.jpg';
import contr010 from './img/contributeur010.jpg';

class Pageprojet extends Component {
  render() {
    return (
      <div className="Pageprojet">

        <Header />


<div className="container">
        <section className="kickass-flex section-projet">
          <div className="kickass-flex">

          <div className="pprojet-avatar">
            <img className="pprojet-img" src={avatar} alt="" />
            <div className="kickass-flex">
              <button className="pp-button-like">
              <i className="fa fa-heart" aria-hidden="true">    </i>147
              </button>
              <p className="pp-p-likes">Likes</p>
            </div>
          </div>

          <div>
            <h1 className="pp-nom-projet">Nom du projet</h1>
            <p><i className="fa fa-hourglass-half" aria-hidden="true"></i>
        J-3</p>
        <p><i className="fa fa-money" aria-hidden="true"></i>
        2880 euros</p>
        <p>collectés sur un objectif de 3000euros</p>
          </div>
</div>
          <div className="pp-les-boutons">
            <button className="pp-btn-contribute" type="button" name="button"><i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
Contribuer</button>
            <button className="pp-btn-edit" type="button" name="button"><i class="fa fa-pencil" aria-hidden="true"></i>
Editer mon projet</button>
          </div>

        </section>

        <section className="pp-infos-projet">
          <h2 className="kickass-h2">A propos du projet</h2>
          <p className="kickass-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

        </section>

      </div>
        <section className="pp-meilleurs-contr">
          <div className="container">
          <h2 className="kickass-h2">Les 10 meilleurs contributeurs</h2>

          <div>

            <div className="kickass-flex col-contributeur">
              <img className="pp-img-meill-contr" src={contr001} />
              <img className="pp-img-meill-contr" src={contr003} />
              <img className="pp-img-meill-contr" src={contr010} />
              <img className="pp-img-meill-contr" src={contr007} />
              <img className="pp-img-meill-contr" src={contr005} />
            </div>

            <div className="kickass-flex col-contributeur">
              <img className="pp-img-meill-contr" src={contr009} />
              <img className="pp-img-meill-contr" src={contr002} />
              <img className="pp-img-meill-contr" src={contr008} />
              <img className="pp-img-meill-contr" src={contr004} />
              <img className="pp-img-meill-contr" src={contr006} />
            </div>


          </div>

          <div className="pp-info-img"></div>
</div>
        </section>

        <Footer />


      </div>
    );
  }
}

export default Pageprojet;
