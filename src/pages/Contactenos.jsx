import React from 'react';

const Contactenos = () => {
    return (
    <>
        <h1 className = "text-center">contactenos</h1>
        <div className="container">
        
            <div className="row justify-content-md-center">
                <div className="row">
                    <div className="col-8">
                        <div className="container text-center mb-5" style={{height: "auto", width:"200px"}}>
                            <img src="asset/images/contactenos1.jpg" className="mh-100" alt='' />
                        </div>
                        <h3 className = " text-center text-success mb-5">
                        ¿DUDAS, INQUIETUDES O SUGERENCIAS?
                        </h3>
                        <p className = "text-justify">
                            Si necesita información no dude en contactarnos. En Coordinadora resolvemos sus inquietudes, brindándole la mejor asistencia y respuesta inmediata, junto con el mejor servicio para el envío de sus documentos, paquetes y mercancías a un destino en Colombia o si lo requiere un envío Internacional, cuando y donde usted lo necesite.
                        </p>
                        <p className = "text-danger">
                        Conozca nuestros Centros de Recibo, Puntos de atención y Recomendaciones de embalaje.   
                        </p>
                        <form className='mt-5'>
                            <div className="form-group">
                                <label for="nombreContactenos">Nombre</label>
                                <input type="text" className="form-control" id="nombre" placeholder="Digíte su nombre completo" />
                                <label for="emailContactenos">Email address</label>
                                <input type="email" className="form-control" id="email-conctact" placeholder="usuario@ejemplo.com" />
                                <label for="telContactenos">Teléfono</label>
                                <input type="text" className="form-control" id="telContavtenos" placeholder="Digíte su teléfono de contacto" />
                                <label for="depContactenos">Departamento</label>
                                <input type="text" className="form-control" id="depContavtenos" placeholder="Digíte Departamento" />
                                <label for="ciuContactenos">Ciudad</label>
                                <input type="text" className="form-control" id="ciuContavtenos" placeholder="Digíte ciudad" />
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="gridCheck" />
                                    <label className="form-check-label" for="gridCheck">
                                        Autorización para el tratamiento de datos personales
                                    </label>
                                </div>
                            </div>
                            
                            <div className="form-group">
                                <label for="exampleFormControlTextarea1">Su mensaje:</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary mb-5">Enviar</button>
                        </form>
                        
                    </div>
                    <div className="col-4 text-center mb-5">
                        <div className="container text-center mb-5" style={{height: "auto", width:"200px"}}>
                            <img src="asset/images/telefono.png" className="mh-100" alt='' />
                        </div>
                        <h3 className = " text-center text-danger">
                            Líneas de servicio al Cliente
                        </h3>
                        <h2 className='mb-5 mt-5'>
                            RECOGEMOS SIN COSTO
                        </h2>
                        <h2 className='text-info'>
                            LLAMENOS EN SU LINEA
                            LOCAL DE RECOGIDA
                        </h2>
                        <table class="table">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Ciudad</th>
                            <th scope="col">Número</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row">1</th>
                            <td>Bogotá</td>
                            <td>486 8080</td>
                            </tr>
                            <tr>
                            <th scope="row">2</th>
                            <td>Medellin</td>
                            <td>350 0040</td>
                            </tr>
                            <tr>
                            <th scope="row">3</th>
                            <td>Barranquilla</td>
                            <td>363 8000</td>
                            </tr>
                        </tbody>
                        </table>
                        <p className='text-success'>
                        Horario de atención:
                        Lunes a viernes de 7:00am a 7:00pm
                        Sábados 7:00am a 1:00pm
                        </p>
                    </div>
                </div>
            </div>
            
        </div>
    </>
    );
}

export default Contactenos;