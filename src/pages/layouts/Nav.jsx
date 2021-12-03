import React from 'react';
import { NavLink } from "react-router-dom";


const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light back-primary p-0 m-0">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav back-primary mx-5 " role="tablist">
                    <li className="nav-item">
                            <NavLink to="/" end className="nav-link text-white">
                                Inicio
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/nosotros" end className="nav-link text-white">
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
                        <li className="nav-item">
                            <NavLink to="/pqr" end className="nav-link text-white">
                                PQR
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/centros-recibo" end className="nav-link text-white">
                                Centros de Recibo
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;