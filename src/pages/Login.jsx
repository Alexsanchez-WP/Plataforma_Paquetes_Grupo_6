import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
    <>
        <section class="vh-100" >
            <div class="container py-5 h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col col-xl-10">
                        <div class="card" >
                            <div class="row g-0 bg-dark">
                                
                                <div class="col-md-6 col-lg-7 d-flex align-items-center ">
                                    <div class="card-body p-4 p-lg-5 text-black bg-primary">
                                        <form>
                                            <div class="d-flex align-items-center mb-3 pb-1 ">
                                                <i class="fa fa-cubes fa-2x me-3" ></i>
                                                <span class="h1 fw-bold mb-0 text-danger text-white">Coordinadora</span>
                                            </div>
                                            <h5 class="fw-normal mb-3 pb-3" >Inicie Sesión</h5>
                                            <div class="form-outline mb-4">
                                                <input type="email" id="email" class="form-control form-control-lg" />
                                                <label class="form-label" for="email">Email</label>
                                            </div>
                                            <div class="form-outline mb-4">
                                                <input type="password" id="password" class="form-control form-control-lg" />
                                                <label class="form-label" for="password">Password</label>
                                            </div>
                                            <div class="pt-1 mb-4">
                                                <button class="btn btn-dark btn-lg btn-block" type="button">Login</button>
                                            </div>
                                            <Link class="small text-white" to = "#!">Olvido su password?</Link>
                                            <p class="mb-5 pb-lg-2" >No tiene una cuenta? <a href="#!" class="text-white" >Regístrese</a></p>
                                            <Link to ="#!" class="small text-white">Terminos de uso...</Link>
                                            <Link to="#!" class="small text-white">Políticas de privacidad</Link>
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