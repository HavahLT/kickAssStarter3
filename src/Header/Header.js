import React, { Component } from 'react';
import './Header.css';

class Header extends Component {

  constructor(props){
    super(props);
    this.state={isToggleOn: false};
    this.handleClick = this.handleClick.bind(this);

    this.state={isToggleOnn: false};
    this.handleClick2 = this.handleClick2.bind(this);

  }
  handleClick(){
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }
  handleClick2(){
    this.setState(prevState => ({
      isToggleOnn: !prevState.isToggleOnn
    }));
  }

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
            <div className="kickass-sign" onClick={this.handleClick}>
              <p>S'inscrire</p>
            </div>
            <div className="kickass-login" onClick={this.handleClick2}>
              <p>Se connecter</p>
            </div>
          </div>

        </header>

      {/* modal creer compte */}

        <div className="kick-compte-container" style={{display:this.state.isToggleOn? 'flex' : 'none'}}>
     <div className="user-compte-form">
       <div className="user-compte-titre"> <h2 >Créer votre compte</h2></div>

       <form methode ="post" action="">
       <input className="user-compte-input" type="text" placeholder="Nom"></input>
       <input className="user-compte-input" type="text" placeholder="Prénom"></input>
       <input className="user-compte-input" type="mail" placeholder="Email"></input>
       <input className="user-compte-input" type="password" placeholder="Mot de passe"></input>
       <input className="user-compte-input" type="password" placeholder="Comfirmer mot de passe"></input>
       <input className="user-compte-submit" type="submit" value="Valider"/>
       </form>

     </div>
    </div>

    {/* modal connection */}

    <div className="kick-connect-container" style={{display:this.state.isToggleOnn? 'flex' : 'none'}}>
               <div className="user-connect-form">
                 <h2 className="user-connect-titre">Connectez vous</h2>

                 <form methode ="post" action="">
                 <input className="user-connect-input" type="mail" placeholder="Email"></input>
                 <input className="user-connect-input" type="password" placeholder="Mot de passe"></input>
                 <input className="user-compte-submit" type="submit" value="Valider"/>
               </form>

               </div>
              </div>

      </div>
    );
  }
}

export default Header;
