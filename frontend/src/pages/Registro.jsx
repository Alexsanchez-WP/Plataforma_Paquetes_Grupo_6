import React from 'react';

const Registro = () => {
    return (
    <>
        <h1 className = "text-center">REGISTRESE</h1>
        <div className="container">
        
            <div className="row justify-content-md-center">
                <div className="row">
                    <div className="col-8 text-center mb-5">
                        <div className="container text-center mb-5" style={{height: "auto", width:"300px"}}>
                                <img src="asset/images/registrese.png" className="mh-100" alt='' />
                            </div>
                            <h3 className = " text-center text-info mb-5">
                            Usted debe registrarse para seguir teniendo acceso a los servicios que usa de coordinadora:
                            </h3>
                            <ul>
                                <li>Consulta de Guías despachadas</li>
                                <li>Solicitud de recogidas</li>
                                <li>Guardar las direcciones habituales de recogida y entrega </li>
                            </ul>
                            
                            <form className='mt-5'>
                                <div className="form-group">
                                    <label for="nombreRegistro">Nombre</label>
                                    <input type="text" className="form-control" id="nombre" placeholder="Digíte su nombre completo" />
                                    <label for="emailRegistro">Email address</label>
                                    <input type="email" className="form-control" id="email-conctact" placeholder="usuario@ejemplo.com" />
                                    <label for="telReistro">Teléfono</label>
                                    <input type="text" className="form-control" id="telContavtenos" placeholder="Digíte su teléfono de contacto" />
                                    <label for="passRegistro">Password</label>
                                    <input type="password" className="form-control" id="passRegistro" placeholder="Digíte Password" />
                                </div>
                                
                                <button type="submit" className="btn btn-primary mb-5">Enviar</button>
                            </form>
                            
                        </div>    
                    </div>
                </div>
            </div>
            
        
    </>
    
    );
}

export default Registro;