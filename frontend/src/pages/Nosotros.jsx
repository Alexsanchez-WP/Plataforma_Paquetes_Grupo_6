import React from 'react';

const Nosotros = () => {
    return (

    <section id="about-section" className="about-section">
        <div className="banner2">
            {/* <!-- Start Header Section --> */}
            <div className="overlay">
                <div className="container">
                    <div className="intro-text">
                        <h2>queremos que usted se sienta seguro</h2>
                        <h1><span>CONFIENOS SUS PRODUCTOS</span></h1>
                        
                    </div>
                </div>
            </div>
        </div>

        {/* <!-- Inicia Sección Nosotros --> */}
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="section-title text-center wow fadeInDown" data-wow-duration="2s" data-wow-delay="50ms">
                        <h2>Nosotros</h2>
                    </div>                        
                </div>
            </div>
            <div className="row">
                <div className="col-md-5">
                    <div className="about-img">
                        <img src="asset/images/corporate1.jpg" className="img-responsive" alt="About images" />
                        
                    </div>
                </div>
                <div className="col-md-7">
                    <div className="about-text">
                        <p>En Coordinadora te acompañamos para que hagas el envío de paquetes al destino que requieres. Te ofrecemos el respaldo necesario para llevar a cabo la gestión de los procesos de transporte y la distribución de paquetes, a nivel urbano, regional, nacional e internacional. Para llevar a cabo nuestro servicio de envío de paquetería contamos con 17 Centros de Distribución en las principales ciudades de Colombia y 113 Centros de Recibo y Entrega de Mercancías los cuales se encuentran ubicados en distintas zonas estratégicas del país.</p>
                        <p>En Coordinadora te contamos los datos principales que deben estar incluidos para que tu paquete o documento pueda llegar a su destino sin ningún tipo de percance. A continuación queremos contarte sobre los datos que deben ir incluidos en el rótulo de la caja tanto del remitente como del destino.</p>
                    </div>
                    
                    <div className="about-list">
                        <h4>Datos Importantes</h4>
                        <ul>
                            <li><i className="fa fa-check-square"></i>Nombre o razón social (en caso de que corresponda a una persona jurídica).</li>
                            <li><i className="fa fa-check-square"></i>Número de cédula</li>
                            <li><i className="fa fa-check-square"></i>Número de celular</li>
                            <li><i className="fa fa-check-square"></i>Nombre de algún contacto a quien podamos contactar en caso de ser necesario</li>
                            <li><i className="fa fa-check-square"></i>Dirección</li>
                            <li><i className="fa fa-check-square"></i>Ciudad</li>
                            <li><i className="fa fa-check-square"></i>División en caso de que el remitente corresponda a un área de una empresa</li>
                        </ul>
                        
                        <h4>Más Características</h4>
                        <ul className="mb-5">
                            <li><i className="fa fa-check-square"></i>En Coordinadora somos conscientes que nuestro trabajo consiste en hacer el envío de mercancías en las mejores condiciones de calidad y seguridad. Para lograrlo, es indispensable que como cliente lleves a cabo un adecuado rótulo de las cajas, aquí te compartimos algunos consejos.</li>
                            <li><i className="fa fa-check-square"></i>Evita reutilizar empaques. Estos pueden estar rotulados previamente, con información diferente a la de tu mercancía, lo cual nos causaría confusiones y demoras en la entrega, que podrían ser perjudiciales para ti.</li>
                            <li><i className="fa fa-check-square"></i>Para hacer más fácil la identificación, cada caja despachada debe tener su rótulo correspondiente. No en una sola, sino en todo el lote de cajas que vayan a transportarse.</li>                        
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>  
    );
}

export default Nosotros;