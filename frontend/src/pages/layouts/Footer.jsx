import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook, faYoutube, faTwitter, faInstagram} from "@fortawesome/free-brands-svg-icons"


const Footer = () => {
    return (
        <footer>
            <div className="back-primary w-100">
                <div className="container d-flex"> 
                    <ul className="col-sm-12 col-lg-4 navbar-nav back-primary" role="tablist">
                        <li className="nav-item">
                            <Link to="/nosotros" className="nav-link text-dark fs-2">
                                Nosotros
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/servicios" className="nav-link text-dark fs-2">
                                Servicios
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contactenos" className="nav-link text-dark fs-2">
                                Contáctenos
                            </Link>
                        </li>
                    </ul>
                    <ul className="col-sm-12 col-lg-4 navbar-nav back-primary" role="tablist">
                        <li className="nav-item">
                            <Link to="/centros-recibo" className="nav-link text-dark fs-2">
                                Centro de Recibo
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/pqr" className="nav-link text-dark fs-2">
                               PQR
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="#" className="nav-link text-dark fs-2">
                                Rastreos
                            </Link>
                        </li>
                    </ul>
                    <ul className="col-sm-12 col-lg-4 back-primary d-flex justify-content-center align-items-center">
                        <li className="nav-item">
                            <Link to="#" className="nav-link text-dark fs-2">
                               <FontAwesomeIcon className="fs-1" icon={faFacebook} />
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="#" className="nav-link text-dark fs-2">
                               <FontAwesomeIcon className="fs-1" icon={faYoutube}/>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="#" className="nav-link text-dark fs-2">
                               <FontAwesomeIcon className="fs-1" icon={faTwitter}/>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="#" className="nav-link text-dark fs-2">
                               <FontAwesomeIcon className="fs-1" icon={faInstagram}/>
                            </Link>
                        </li>
                    </ul>
                </div>
                <nav className="navbar navbar-expand-xl bg-dark d-flex justify-content-evenly">
                    <ul className="navbar-nav">
                        <li className="text-white mx-5 text-uppercase">
                            Derechos reservados
                        </li>
                        <li className="text-white mx-5">
                            2021
                        </li>
                        <li className="text-white mx-5">
                            Desarrollado por: MISIONTIC-UNINORTE-GRUPO 6
                        </li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
}

export default Footer;

