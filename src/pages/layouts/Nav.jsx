import React from 'react';
import { NavLink } from "react-router-dom";


const Nav = ( { dataUser } ) => {

    const { nombres } = dataUser;

    return (
        <nav className="navbar navbar-expand-lg navbar-light back-primary p-0 m-0">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav back-primary mx-5">
                        <li className="nav-item">
                            <NavLink to="/" end className="nav-link text-white fs-2 p-4">
                                Inicio
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/nosotros" end className="nav-link text-white fs-2 p-4">
                                Nosotros
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/servicios" end className="nav-link text-white fs-2 p-4">
                                Servicios
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contactenos" end className="nav-link text-white fs-2 p-4">
                                Contáctenos
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/pqr" end className="nav-link text-white fs-2 p-4">
                                PQR
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/centros-recibo" end className="nav-link text-white fs-2 p-4">
                                Centros de Recibo
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <h4 className="text-white">{nombres ? "Bienvenido! " +  nombres: null }</h4>
            </div>
        </nav>
    );
}

export default Nav;