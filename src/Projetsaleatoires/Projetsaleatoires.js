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
                        <h3 className='kickass-h3 positionnement-element-card'>Titre Projet 1</h3>
                        <h4 className='kickass-h4 positionnement-element-card'>Auteur</h4>
                        <div className='container-notif'>
                            <div className='container-detail-projet'>
                                <i className="fa fa-money positionnement-element-card" aria-hidden="true"></i>
                                <p className="espace-icone">1330 euros</p>
                            </div>
                            <div className='container-detail-projet'>
                                <i className="fa fa-hourglass-half positionnement-element-card" aria-hidden="true"></i>
                                <p className='espace-icone'>J -3</p>
                            </div>
                            <div className='container-detail-projet'>
                                <i className="fa fa-heart-o positionnement-element-card" aria-hidden="true"></i>
                                <p className="espace-icone">19</p>
                            </div>
                        </div>
                    </div>
                    <div className='kickass-card'>
                        <div className='container-image'>
                            <img className='miniature-projet' src={projet2} alt="imageprojet"/>
                        </div>
                        <h3 className='kickass-h3 positionnement-element-card'>Titre Projet 1</h3>
                        <h4 className='kickass-h4 positionnement-element-card'>Auteur</h4>
                        <div className='container-notif'>
                            <div className='container-detail-projet'>
                                <i className="fa fa-money positionnement-element-card" aria-hidden="true"></i>
                                <p className="espace-icone">1330 euros</p>
                            </div>
                            <div className='container-detail-projet'>
                                <i className="fa fa-hourglass-half positionnement-element-card" aria-hidden="true"></i>
                                <p className='espace-icone'>J -3</p>
                            </div>
                            <div className='container-detail-projet'>
                                <i className="fa fa-heart-o positionnement-element-card" aria-hidden="true"></i>
                                <p className="espace-icone">19</p>
                            </div>
                        </div>
                    </div>
                    <div className='kickass-card'>
                        <div className='container-image'>
                            <img className='miniature-projet' src={projet3} alt="imageprojet"/>
                        </div>
                        <h3 className='kickass-h3 positionnement-element-card'>Titre Projet 1</h3>
                        <h4 className='kickass-h4 positionnement-element-card'>Auteur</h4>
                        <div className='container-notif'>
                            <div className='container-detail-projet'>
                                <i className="fa fa-money positionnement-element-card" aria-hidden="true"></i>
                                <p className="espace-icone">1330 euros</p>
                            </div>
                            <div className='container-detail-projet'>
                                <i className="fa fa-hourglass-half positionnement-element-card" aria-hidden="true"></i>
                                <p className='espace-icone'>J -3</p>
                            </div>
                            <div className='container-detail-projet'>
                                <i className="fa fa-heart-o positionnement-element-card" aria-hidden="true"></i>
                                <p className="espace-icone">19</p>
                            </div>
                        </div>
                    </div>
                    <div className='kickass-card'>
                        <div className='container-image'>
                            <img className='miniature-projet' src={projet4} alt="imageprojet"/>
                        </div>
                        <h3 className='kickass-h3 positionnement-element-card'>Titre Projet 1</h3>
                        <h4 className='kickass-h4 positionnement-element-card'>Auteur</h4>
                        <div className='container-notif'>
                            <div className='container-detail-projet'>
                                <i className="fa fa-money positionnement-element-card" aria-hidden="true"></i>
                                <p className="espace-icone">1330 euros</p>
                            </div>
                            <div className='container-detail-projet'>
                                <i className="fa fa-hourglass-half positionnement-element-card" aria-hidden="true"></i>
                                <p className='espace-icone'>J -3</p>
                            </div>
                            <div className='container-detail-projet'>
                                <i className="fa fa-heart-o positionnement-element-card" aria-hidden="true"></i>
                                <p className="espace-icone">19</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Projetsaleatoires;
