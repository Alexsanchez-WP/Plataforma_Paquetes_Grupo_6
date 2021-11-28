import React from "react";
import Nav from "./Nav";
import logo from "../../assets/img/logo.jpeg"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faUserAlt } from '@fortawesome/free-solid-svg-icons'



const Header = () => {
    return (
        <header>
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-lg-6 col-sm-12">
                            <img src={logo} className="img-fluid" alt="Logo Coordinadora" />
                        </div>
                        <div className="col-lg-6 col-sm-12">
                            <h3 className="card-title text-uppercase text-primary d-flex justify-content-center">
                                Movemos los que mueve a colombia
                            </h3>
                            <div className="mb-1 d-flex justify-content-center">
                                <Link
                                    className="border-0 mx-2 btn btn-lg btn-secondary back-gray text-secondary" to="/login"
                                    role="button">
                                    Ingresar {"  "}
                                    <FontAwesomeIcon icon={faLock} />
                                </Link>
                                <Link
                                    className="border-0 mx-2 btn btn-lg btn-secondary back-gray text-secondary" to="/registro"
                                    role="button">
                                    Registrarse {"  "}
                                    <FontAwesomeIcon icon={faUserAlt} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Nav />
        </header>
    );
}

export default Header;