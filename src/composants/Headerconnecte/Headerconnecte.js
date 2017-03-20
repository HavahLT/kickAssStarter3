import React, {Component} from 'react';
import '../Header/Header.css';
import './Headerconnecte.css';
import {Link} from 'react-router';

class Headerconnecte extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: false
        };
        this.handleClick = this.handleClick.bind(this);

        this.state = {
            isToggleOnn: false
        };
        this.handleClick2 = this.handleClick2.bind(this);

    }
    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }
    handleClick2() {
        this.setState(prevState => ({
            isToggleOnn: !prevState.isToggleOnn
        }));
    }

    render() {
        return (
            <div className="Headerconnecte">
                <div className="kickass-menu-fixed">
                    <header className="kickass-flex kickass-menu">

                        <div className="kickass-logo" id="k-logo">
                            <i className="fa fa-hourglass-half" aria-hidden="true"></i>
                            <Link to={`/`}>
                            <h1 className="kickass-h1">KickAssStarter</h1>
                          </Link>
                        </div>
                        <div className="kickass-menu-btn" id="k-btn">
                            <button className="kickass-btn" type="button" name="button">
                                <i className="fa fa-plus" aria-hidden="true"></i>Créer un projet</button>
                        </div>
                        <div className="kickass-search" id="k-search">
                            <form>
                                <i className="fa fa-search fa-flip-horizontal" aria-hidden="true"></i>
                                <input type="text"></input>
                                <button className="btn-go" type="submit">Go</button>
                            </form>
                        </div>
                        <div className='container-flex'>
                            <div className="container-connecte" id="k-log">
                                <div onClick={this.handleClick}>
                                    <p>Connecté</p>
                                </div>
                            </div>
                            <div className='container-menu-2'>
                                <div onClick={this.handleClick2}>
                                    <p>Mon Compte</p>
                                </div>
                            </div>

                        </div>

                    </header>

                </div>

                <div className="menu-deroulant" style={{
                    display: this.state.isToggleOnn
                        ? 'flex'
                        : 'none'
                }}>
                    <div className="menu-deroulant">
                        <p className="container-menu-3">Mes projets</p>
                        <p className="container-menu-3 border">Déconnexion</p>
                    </div>

                </div>


            </div>
        );
    }
}

export default Headerconnecte;
