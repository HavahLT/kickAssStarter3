import React, { Component } from 'react';
import './Edit-all-projects.css';
import Headerconnecte from '../../composants/Headerconnecte/Headerconnecte.js';
import Footer from '../../composants/Footer/Footer.js';
import imgProjet from './img/avatar.jpeg';

class EditAllProjects extends Component {
  render() {
    return (
      <div className="EditAllProjects">

        <Headerconnecte />

        <section className="allp-bloc">
          <div className="container">
          <h2 className="kickass-h2">Mes projets</h2>

          <div className="allp-row-projet kickass-flex">
            <div className="allp-single-projet">
              <img src={imgProjet} />
              <div className="allp-infos-projet">
                <h3 className="kickass-h3">Nom du projet</h3>
                <button className="allp-btn-edit">Editer le projet</button>
                <button className="allp-btn-voir">Voir le projet</button>
              </div>
            </div>

            <div className="allp-single-projet">
              <img src={imgProjet} />
              <div className="allp-infos-projet">
                <h3 className="kickass-h3">Nom du projet</h3>
                <button className="allp-btn-edit">Editer le projet</button>
                <button className="allp-btn-voir">Voir le projet</button>
              </div>
            </div>

            <div className="allp-single-projet">
              <img src={imgProjet} />
              <div className="allp-infos-projet">
                <h3 className="kickass-h3">Nom du projet</h3>
                <button className="allp-btn-edit">Editer le projet</button>
                <button className="allp-btn-voir">Voir le projet</button>
              </div>
            </div>

          </div>

          <div className="allp-row-projet kickass-flex">
            <div className="allp-single-projet">
              <img src={imgProjet}  />
              <div className="allp-infos-projet">
                <h3 className="kickass-h3">Nom du projet</h3>
                <button className="allp-btn-edit">Editer le projet</button>
                <button className="allp-btn-voir">Voir le projet</button>
              </div>
            </div>

            <div className="allp-single-projet">
              <img src={imgProjet}  />
              <div className="allp-infos-projet">
                <h3 className="kickass-h3">Nom du projet</h3>
                <button className="allp-btn-edit">Editer le projet</button>
                <button className="allp-btn-voir">Voir le projet</button>
              </div>
            </div>

            <div className="allp-single-projet">
              <img src={imgProjet}  />
              <div className="allp-infos-projet">
                <h3 className="kickass-h3">Nom du projet</h3>
                <button className="allp-btn-edit">Editer le projet</button>
                <button className="allp-btn-voir">Voir le projet</button>
              </div>
            </div>

          </div>

          <div className="allp-row-projet kickass-flex">
            <div className="allp-single-projet">
              <img src={imgProjet}  />
              <div className="allp-infos-projet">
                <h3 className="kickass-h3">Nom du projet</h3>
                <button className="allp-btn-edit">Editer le projet</button>
                <button className="allp-btn-voir">Voir le projet</button>
              </div>
            </div>

            <div className="allp-single-projet">
              <img src={imgProjet}  />
              <div className="allp-infos-projet">
                <h3 className="kickass-h3">Nom du projet</h3>
                <button className="allp-btn-edit">Editer le projet</button>
                <button className="allp-btn-voir">Voir le projet</button>
              </div>
            </div>

            <div className="allp-single-projet">
              <img src={imgProjet}  />
              <div className="allp-infos-projet">
                <h3 className="kickass-h3">Nom du projet</h3>
                <button className="allp-btn-edit">Editer le projet</button>
                <button className="allp-btn-voir">Voir le projet</button>
              </div>
            </div>

          </div>
</div>
        </section>

        <Footer />



      </div>
    );
  }
}

export default EditAllProjects;
