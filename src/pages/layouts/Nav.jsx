import React from 'react';
import { NavLink } from "react-router-dom";


const Nav = () => {
    return (
        <nav>
            <ul class="nav nav-pills back-primary" role="tablist">
                <li class="nav-item">
                    <NavLink
                        to="/"
                        end
                        className="nav-link text-white"
                        activeClass="active"
                    >
                        Nosotros
                    </NavLink>
                </li>
                <li class="nav-item">
                    <NavLink
                        to="/servicios"
                        end
                        className="nav-link text-white"
                        activeClass="active"
                    >
                        Servicios
                    </NavLink>
                </li>
                <li class="nav-item">
                    <NavLink
                        to="/contactenos"
                        end
                        className="nav-link text-white"
                        activeClass="active"
                    >
                        Contáctenos
                    </NavLink>
                </li>
                <li class="nav-item">
                    <NavLink
                        to="/pqr"
                        end
                        className="nav-link text-white"
                        activeClass="active"
                    >
                        PQR
                    </NavLink>
                </li>
                <li class="nav-item">
                    <NavLink
                        to="/centros-recibo"
                        end
                        className="nav-link text-white"
                        activeClass="active"
                    >
                        Centros de Recibo
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;