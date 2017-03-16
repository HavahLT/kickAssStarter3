import React, {Component} from 'react';
import './Projetsaleatoires.css';
import projet1 from "./imageprojet1.jpg";
import projet2 from "./imageprojet2.jpg";
import projet3 from "./imageprojet3.jpg";
import projet4 from "./imageprojet4.jpg";



class Projetsaleatoires extends Component {
    render() {
        return (
            <div className="Projetsaleatoires">
                <h2 className='kickass-h2'>Les Projets</h2>
                <div className='container-card'>
                    <div className='kickass-card'>
                        <div className='container-image'>
                            <img className='miniature-projet' src={projet1} alt="imageprojet"/>
                        </div>
                        <h3 className=' titre-projet kickass-h3 positionnement-element-card'>Goulash Disco</h3>
                        <h4 className='kickass-auteur positionnement-element-card'>Yves Taquet</h4>
                        <div className='container-notif'>
                            <div className='container-detail-projet'>
                                <i className="fa fa-money positionnement-element-card color-money" aria-hidden="true"></i>
                                <p className="espace-icone color-money">1330 euros</p>
                            </div>
                            <div className='container-detail-projet'>
                                <i className="fa fa-hourglass-half positionnement-element-card color-sablier" aria-hidden="true"></i>
                                <p className='espace-icone color-sablier'>J -3</p>
                            </div>
                            <div className='container-detail-projet'>
                                <div className='effet-coeur'>
                                <i className="fa fa-heart-o positionnement-element-card faa-pulse animated coeur animated-hover" aria-hidden="true"></i>
                              </div>
                                <p className="espace-icone color-like">19</p>
                            </div>
                        </div>
                    </div>
                    <div className='kickass-card'>
                        <div className='container-image'>
                            <img className='miniature-projet' src={projet2} alt="imageprojet"/>
                        </div>
                        <h3 className='titre-projet kickass-h3 positionnement-element-card'>Ink is my blood</h3>
                        <h4 className='kickass-auteur positionnement-element-card'>EncreSympathique</h4>
                        <div className='container-notif'>
                            <div className='container-detail-projet'>
                                <i className="fa fa-money positionnement-element-card color-money" aria-hidden="true"></i>
                                <p className="espace-icone color-money">1330 euros</p>
                            </div>
                            <div className='container-detail-projet'>
                                <i className="fa fa-hourglass-half positionnement-element-card color-sablier" aria-hidden="true"></i>
                                <p className='espace-icone color-sablier'>J -3</p>
                            </div>
                            <div className='container-detail-projet'>
                                <i className="fa fa-heart-o positionnement-element-card coeur" aria-hidden="true"></i>
                                <p className="espace-icone color-like">19</p>
                            </div>
                        </div>
                    </div>
                    <div className='kickass-card'>
                        <div className='container-image'>
                            <img className='miniature-projet' src={projet3} alt="imageprojet"/>
                        </div>

                        <div className='container-projet'>
                        <h3 className='titre-projet kickass-h3 positionnement-element-card'>Dancing Devils</h3>
                        <h4 className='kickass-auteur positionnement-element-card'>Melody Battentier</h4>
                            <div className='container-detail-projet'>
                                <i className="fa fa-money positionnement-element-card color-money" aria-hidden="true"></i>
                                <p className="espace-icone color-money">1330 euros</p>
                            </div>
                            <div className='container-detail-projet'>
                                <i className="fa fa-hourglass-half positionnement-element-card color-sablier" aria-hidden="true"></i>
                                <p className='espace-icone color-sablier'>J -3</p>
                            </div>
                            <div className='container-detail-projet'>
                                <i className="fa fa-heart-o positionnement-element-card coeur" aria-hidden="true"></i>
                                <p className="espace-icone color-like">19</p>
                            </div>
                      </div>
                    </div>
                    <div className='kickass-card'>
                        <div className='container-image'>
                            <img className='miniature-projet' src={projet4} alt="imageprojet"/>
                        </div>
                        <h3 className='titre-projet kickass-h3 positionnement-element-card'>Awas</h3>
                        <h4 className='kickass-auteur positionnement-element-card'>Martignoni</h4>
                        <div className='container-projet'>
                            <div className='container-detail-projet'>
                                <i className="fa fa-money positionnement-element-card color-money" aria-hidden="true"></i>
                                <p className="espace-icone color-money">1330 euros</p>
                            </div>
                            <div className='container-detail-projet'>
                                <i className="fa fa-hourglass-half positionnement-element-card color-sablier" aria-hidden="true"></i>
                                <p className='espace-icone color-sablier'>J -3</p>
                            </div>
                            <div className='container-detail-projet'>
                                <i className="fa fa-heart-o positionnement-element-card coeur" aria-hidden="true"></i>
                                <p className="espace-icone color-like">19</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="positionnement-bouton">
                <button className="kickass-btn">Tous les projets</button>
              </div>
            </div>
        );
    }
}

export default Projetsaleatoires;
