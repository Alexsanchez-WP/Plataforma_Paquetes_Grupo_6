import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <div className="back-primary">
                <div className="container d-flex">
                    <ul className="col-sm-12 col-lg-3 navbar-nav back-primary mx-5 " role="tablist">
                        <li className="nav-item">
                            <NavLink to="/" end className="nav-link text-white">
                                Nosotros
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/servicios" end className="nav-link text-white">
                                Servicios
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contactenos" end className="nav-link text-white">
                                Contáctenos
                            </NavLink>
                        </li>
                    </ul>
                    <ul className="col-sm-12 col-lg-3 navbar-nav back-primary mx-5 " role="tablist">
                        <li className="nav-item">
                            <NavLink to="/" end className="nav-link text-white">
                                Nosotros
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/servicios" end className="nav-link text-white">
                                Servicios
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contactenos" end className="nav-link text-white">
                                Contáctenos
                            </NavLink>
                        </li>
                    </ul>
                    <ul className="col-sm-12 col-lg-6 navbar-nav back-primary mx-5">
                        <li className="nav-item">
                            <NavLink to="/" end className="nav-link text-white">
                                Nosotros
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/servicios" end className="nav-link text-white">
                                Servicios
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contactenos" end className="nav-link text-white">
                                Contáctenos
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <nav class="navbar navbar-expand-xl bg-dark d-flex justify-content-evenly">
                    <ul class="navbar-nav">
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

