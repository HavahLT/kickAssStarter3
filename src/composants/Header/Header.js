import React, {Component} from 'react';
import './Header.css';
import '../../pages/Create-project/Create-project.css';
import Footer from '../../composants/Footer/Footer.js';
import conseil1 from '../../pages/Create-project/img/img-conseil1.jpg';
import conseil2 from '../../pages/Create-project/img/img-conseil2.jpg';
import conseil3 from '../../pages/Create-project/img/img-conseil3.jpg';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            toggleSinscrire: false
        };
        this.sinscrireClick = this.sinscrireClick.bind(this);

        this.state = {
            toggleCreeCompte: false
        };
        this.creerCompteClick = this.creerCompteClick.bind(this);

        this.state = {
            toggleCreeProject: false
        };
        this.creeProjectClick = this.creeProjectClick.bind(this);
    }

    sinscrireClick() {
        this.setState(prevState => ({
            toggleSinscrire: !prevState.toggleSinscrire
        }));
    }
    creerCompteClick() {
        this.setState(prevState => ({
            toggleCreeCompte: !prevState.toggleCreeCompte
        }));
    }
    creeProjectClick() {
        this.setState(prevState => ({
            toggleCreeProject: !prevState.toggleCreeProject
        }));
    }


    render() {
        return (
            <div className="Header">
              <div className="kickass-menu-fixed">
                <header className="kickass-flex kickass-menu">

                    <div className="kickass-logo" id="k-logo">
                        <i className="fa fa-hourglass-half" aria-hidden="true"></i>
                        <h1 className="kickass-h1">KickAssStarter</h1>
                    </div>
                    <div className="kickass-menu-btn" id="k-btn" onClick={this.creeProjectClick}>
                        <a><button className="kickass-btn" type="button" name="button">
                            <i className="fa fa-plus" aria-hidden="true"></i>Créer un projet</button></a>
                    </div>
                    <div className="kickass-search" id="k-search">
                        <form>
                          <i className="fa fa-search fa-flip-horizontal" aria-hidden="true"></i>
                          <input type="text"></input>
                          <button className="btn-go" type="submit">Go</button>
                      </form>
                    </div>
                    <div className="kickass-flex kickass-sign-login" id="k-log">
                        <div className="kickass-sign" onClick={this.sinscrireClick}>
                            <p>S'inscrire</p>
                        </div>
                        <div className="kickass-login" onClick={this.creerCompteClick}>
                            <p>Se connecter</p>
                        </div>
                    </div>

                </header>
</div>
                {/* modal creer compte */}

                <div className="kick-compte-container" style={{
                    display: this.state.toggleSinscrire
                        ? 'flex'
                        : 'none'
                }}>
                    <div className="user-compte-form">
                        <div className="user-compte-titre">
                            <h3 className="kickass-h3">Création de compte</h3>
                        </div>

                        <form methode="post" action="">
                            <input className="user-compte-input" type="text" placeholder="Nom"></input>
                            <input className="user-compte-input" type="text" placeholder="Prénom"></input>
                            <input className="user-compte-input" type="mail" placeholder="Email"></input>
                            <input className="user-compte-input" type="password" placeholder="Mot de passe"></input>
                            <input className="user-compte-input" type="password" placeholder="Comfirmer mot de passe"></input>

                            <button className="user-compte-submit">
                                <span className="user-compte-submit-span">Valider</span>
                            </button>
                        </form>

                    </div>
                </div>

                {/* modal connection */}

                <div className="kick-connect-container" style={{
                    display: this.state.toggleCreeCompte
                        ? 'flex'
                        : 'none'
                }}>
                <div className="user-connect-form">
                      <div className="user-compte-titre">
                        <h3 className="kickass-h3">Connexion</h3>
                      </div>

                        <form methode="post" action="">
                            <input className="user-connect-input" type="mail" placeholder="Email"></input>
                            <input className="user-connect-input" type="password" placeholder="Mot de passe"></input>
                            <p className="f-pwd">Mot de passe oublié ?</p>
                            <button className="user-compte-submit">
                                <span className="user-compte-submit-span">Valider</span>
                            </button>
                            <p className="p-inscription">Pas encore de compte ? Inscrivez-vous !</p>
                        </form>

                    </div>
                </div>


{/* Attention ce code dessus est copier par la page CreatProjecJs pour activer la function onClick ici */}

{/* Creer un compte */}

                <div className="Pagecreateproject" style={{
                    display: this.state.toggleCreeProject
                        ? 'block'
                        : 'none'
                }}>


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
                          <div className="cp-row-select">
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
                  <section >
                    <Footer/>
                  </section>

                </div>

            </div>
        );
    }
}

export default Header;
