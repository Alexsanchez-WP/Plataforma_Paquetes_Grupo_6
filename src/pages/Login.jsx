import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
    <>
        <section className="vh-100" >
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col col-xl-10">
                        <div className="card" >
                            <div className="row g-0 bg-dark">
                                
                                <div className="col-md-6 col-lg-7 d-flex align-items-center ">
                                    <div className="card-body p-4 p-lg-5 text-black bg-primary">
                                        <form>
                                            <div className="d-flex align-items-center mb-3 pb-1 ">
                                                <i className="fa fa-cubes fa-2x me-3" ></i>
                                                <span className="h1 fw-bold mb-0 text-danger text-white">Coordinadora</span>
                                            </div>
                                            <h5 className="fw-normal mb-3 pb-3" >Inicie Sesión</h5>
                                            <div className="form-outline mb-4">
                                                <input type="email" id="email" className="form-control form-control-lg" />
                                                <label className="form-label" for="email">Email</label>
                                            </div>
                                            <div className="form-outline mb-4">
                                                <input type="password" id="password" className="form-control form-control-lg" />
                                                <label className="form-label" for="password">Password</label>
                                            </div>
                                            <div className="pt-1 mb-4">
                                                <button className="btn btn-dark btn-lg btn-block" type="button">Login</button>
                                            </div>
                                            <Link className="small text-white" to = "#!">Olvido su password?</Link>
                                            <p className="mb-5 pb-lg-2" >No tiene una cuenta? <a href="#!" className="text-white" >Regístrese</a></p>
                                            <Link to ="#!" className="small text-white">Terminos de uso...</Link>
                                            <Link to="#!" className="small text-white">Políticas de privacidad</Link>
                                        </form>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </>
    );
}

export default Login;