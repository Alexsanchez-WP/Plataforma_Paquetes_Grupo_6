import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/img/logo.jpeg"


const Login = ({setDataUser}) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    const cosultApi = async () =>{
        const consult = await fetch("./BD/datos.json");
        const response = await consult.json();
        response.forEach(element => {
            if(element.email == email.trim()){
                setDataUser(element);
                return;
            }
        });
    }

    const handleLogin = (form) => {
        form.preventDefault();
        cosultApi();
    }

    return (
    <>
        <section className="vh-100" >
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col col-xl-10">
                        <div className="card" >
                            <div className="row g-0 bg-dark">                                
                                <div className="col-md-6 col-lg-7 d-flex align-items-center p-0">
                                    <div className="card-body p-4 p-lg-5 text-black bg-primary">
                                        <form onSubmit={ form =>handleLogin(form)}>
                                            <div className="d-flex align-items-center mb-3 pb-1 ">
                                                <i className="fa fa-cubes fa-2x me-3" ></i>
                                                <span className="h1 fw-bold mb-0 text-danger text-white">Coordinadora</span>
                                            </div>
                                            <h5 className="fw-normal mb-3 pb-3" >Inicie Sesión</h5>
                                            <div className="form-outline mb-4">
                                                <input type="email" name="email" className="form-control form-control-lg" onChange={(text)=>setEmail(text.target.value)} value={email} />
                                                <label className="form-label" htmlFor="email">Email</label>
                                            </div>
                                            <div className="form-outline mb-4">
                                                <input type="password" name="password" className="form-control form-control-lg" onChange={(text)=>setPassword(text.target.value)} value={password} />
                                                <label className="form-label" htmlFor="password">Password</label>
                                            </div>
                                            <div className="pt-1 mb-4">
                                                <button className="btn btn-dark btn-lg btn-block" type="submit">Login</button>
                                            </div>
                                            <Link className="small text-white" to = "#">Olvido su password?</Link>
                                            <p className="mb-5 pb-lg-2">No tiene una cuenta?   
                                                <Link to="/registro" className="text-white mr-5"> Regístrese</Link>
                                            </p>
                                            <Link to ="#" className="small text-white">Terminos de uso </Link>
                                            <Link to="#" className="small text-white"> Políticas de privacidad</Link>
                                        </form>
                                    </div>
                                </div> 
                                <div className="col-md-6 col-lg-5 d-flex justify-content-center align-items-center">
                                    <img src={logo} className="img-fluid" alt="Logo Coordinadora"/>
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