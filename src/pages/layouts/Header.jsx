import React from "react";
import Nav from "./Nav";
import logo from "../../assets/img/logo.jpeg"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faUserAlt } from '@fortawesome/free-solid-svg-icons'



const Header = ({dataUser, setDataUser}) => {
    console.log(dataUser)


    return (
        <header>
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-lg-6 col-sm-12">
                        <Link to = '/'>
                            <img src={logo} className="img-fluid" alt="Logo Coordinadora"/>
                        </Link>
                        </div>
                        <div className="col-lg-6 col-sm-12">
                            <h3 className="card-title text-uppercase text-primary d-flex justify-content-center">
                                Movemos los que mueve a colombia
                            </h3>
                            <div className="mt-5 d-flex justify-content-center">
                                {dataUser.nombres ? (                               
                                <button onClick={() => setDataUser({})}
                                    className="border-0 mx-2 btn btn-lg btn-secondary back-gray text-secondary">
                                    Cerrar sesión {"  "}
                                    <FontAwesomeIcon icon={faLock} />
                                </button>
                                ) : (                               
                                <Link to ="/login"
                                    className="border-0 mx-2 btn btn-lg btn-secondary back-gray text-secondary" 
                                    role="button">
                                    Ingresar {"  "}
                                    <FontAwesomeIcon icon={faLock} />
                                </Link>
                                )}
                                <Link to="/registro"
                                    className="border-0 mx-2 btn btn-lg btn-secondary back-gray text-secondary" 
                                    role="button">
                                    Registrarse {"  "}
                                    <FontAwesomeIcon icon={faUserAlt} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Nav dataUser={dataUser}/>
        </header>
    );
}

export default Header;