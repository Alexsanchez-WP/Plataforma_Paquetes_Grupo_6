import React from 'react';



const Home = () => {
    return (

<>
    <div className="banner">
        {/* <!-- Start Header Section --> */}
        
        <div className="overlay">
            <div className="container">
                <div className="intro-text">
                    <p>Confíenos sus productos</p>
                    <h1><span>Trabajamos de la mano con usted</span></h1>
                    <input type="text" className="form-control" placeholder="Digite su número de guía" id="name" required data-validation-required-message="Por favor digite su número de guia." />
                    <input type="submit" className="btn btn-primary" value="Buscar" />
                    
                </div>
            </div>
        </div>
    </div>

    <section id="seccion-contacto">
        <div id="bg-contacto">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0072bc" fill-opacity="1" d="M0,96L80,101.3C160,107,320,117,480,154.7C640,192,800,256,960,272C1120,288,1280,256,1360,240L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>

        </div>
        <div class="container" id = "contenedor-formulario">
            <div id = "titulo-form" class = "text-center mb-4">
                <h2>RECOGEMOS SIN COSTO EN LA PUERTA DE TU CASA</h2>
                <p class="fs-5">Ingresa tus datos de recogida aquí:</p>
                <div class="mb-3">
                    <div class="row">
                        <div class="col">
                            <label class="form-label">Nombres</label>
                            <input type="text" class="form-control" id="nombre" placeholder="Digite su nombre" />
                        </div>
                        <div class="col">
                            <label class="form-label">Apellidos</label>
                            <input type="text" class="form-control" id="apellidos" placeholder="Digite sus apellidos" />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <label class="form-label">Correo Electrónico</label>
                            <input type="email" class="form-control" id="email" placeholder="ejemplo@ejemplo.com" />
                        </div>
                        <div class="col">
                            <label class="form-label">Teléfono fijo o Celular</label>
                            <input type="tel" class="form-control" id="telefono" placeholder="0000000000" />
                        </div>
                    </div>

                    <div class="row">
                        <div class="col">
                            <label class="form-label">Departamento</label>
                            <input type="text" class="form-control" id="depto" placeholder="Digite departamento de recogida" />
                        </div>
                        <div class="col">
                            <label class="form-label">Ciudad</label>
                            <input type="text" class="form-control" id="ciudad" placeholder="Digite ciudad de recogida" />
                        </div>
                    </div>


                    <div class="row">
                        <div class="col">
                            <label class="form-label">Tipo de Envío</label>
                            <select class="form-select form-select-lg" aria-label="Default select example">
                                <option selected>Open this select menu</option>
                                <option value="1">Documentos</option>
                                <option value="2">Paquetes</option>
                            </select>
                        </div>
                        <div class="col">
                            <label class="form-label">Dirección Recogida</label>
                            <input type="text" class="form-control" id="recogida" placeholder="Digite dirección donde se recoge envio" />
                        </div>
                    </div>
                    <div class="row mt-2">
                        <div class="col"></div>
                        <div class="col">
                            <label class="form-label">Día para la recogida</label>
                            <p>Especifíca el día, nosotros pasaremos en el transcurso del día</p>
                            <div class="input-group date date-md" data-provide="datepicker">
                                <input type="text" class="form-control" />
                                <div class="input-group-addon">
                                    <span class="glyphicon glyphicon-th"></span>
                                </div>
                            </div>
                        </div>
                        <div class="col"></div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <label class="form-label">Persona que entrega mercancia</label>
                            <input type="text" class="form-control" id="entrega" placeholder="Nombre de quien entrega mercancia" />
                        </div>
                        <div class="col"></div>
                        <div class="col">
                            <label class="form-label">Documento Identidad</label>
                            <input type="text" class="form-control" id="apellidos" placeholder="Documento de quien entrega" />
                        </div>
                    </div>
                    
                </div>
                
            </div>
        </div>
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,192L48,181.3C96,171,192,149,288,160C384,171,480,213,576,208C672,203,768,149,864,112C960,75,1056,53,1152,53.3C1248,53,1344,75,1392,85.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
        </div>
    </section>
    







    
</>
);
}

export default Home;