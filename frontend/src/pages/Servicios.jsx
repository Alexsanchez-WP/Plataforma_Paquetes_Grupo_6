import React from 'react';
import { Link} from "react-router-dom";

const Servicios = () => {
    return (
<section id="service-section">
    <div className="banner3">
        {/* <!-- Start Header Section --> */}
        <div className="overlay">
            <div className="container">
                <div className="intro-text">
                    <h2>Díganos en que podemos servirle</h2>
                    <h1><span>TENEMOS LOS MEJORES SERVICIOS</span></h1>
                    
                </div>
            </div>
        </div>
    </div>


{/* <!-- Start Service Section --> */}
<div className="container">
    <div className="row">




        <div className="col-md-12">
            <div className="section-title text-center wow fadeInDown" data-wow-duration="2s" data-wow-delay="50ms">
                <h2>Portafolio de Servicios</h2>
                <p>Queremos ofrecerte los mejores servicios, trabajamos para mover a Colombia</p>
            </div>                        
        </div>
    </div>
    <div className="row">
        <div className="col-md-3">
            <div className="services-post">
                <Link to = ""><i className="fa fa-truck"></i></Link>
                <h2>ENVÍO DE MERCANCÍA NACIONAL</h2>
                <p>En Coordinadora somos tus mejores aliados para que hagas el envío de mercancía al destino que requieres. Te ofrecemos el respaldo necesario para gestionar los procesos de transporte y distribución de tus paquetes a nivel urbano, regional, nacional e internacional y por supuesto llevando a cabo entregas puerta a puerta. Sigue leyendo y conoce un poco más sobre nuestro servicio de envío de mercancía. </p>
            </div>
        </div>
        <div className="col-md-3">
            <div className="services-post">
                <Link to = "#"><i className="fa fa-envelope"></i></Link>
                <h2>ENVÍO DE MENSAJERÍA NACIONAL</h2>
                <p>Con Coordinadora puedes hacer el envío de documentos sin mayores preocupaciones, nos hemos destacado por buscar siempre la mejor calidad para todos nuestros clientes, ofreciendo el respaldo y acompañamiento necesario para que toda tu mensajería y papelería lleguen en perfectas condiciones en los tiempos que se han fijado a diferentes destinos regionales, nacionales e internacionales. </p>
            </div>
        </div>
        <div className="col-md-3">
            <div className="services-post">
                <Link to = "#"><i className="fa fa-globe"></i></Link>
                <h2>ENVÍOS INTERNACIONALES</h2>
                <p>Nuestra compañía ofrece el servicio de envíos internacionales haciendo posible que sus documentos, paquetes y mercancías lleguen a más de 220 países y territorios en los 5 continentes, prestándole adicionalmente el servicio de asesoría que le permita hacer más fácil el proceso de su envío. </p>
            </div>
        </div>
        <div className="col-md-3">
            <div className="services-post">
                <Link to = "#"><i className="fa fa-plane"></i></Link>
                <h2>CARGAS MASIVAS Y CONTENEDORES</h2>
                <p>Carga que llena la capacidad de un tráiler, con un solo cargue en origen y un solo descargue en destino, para un solo remitente en una única dirección y que pueda ser recogido y entregado por el mismo vehículo de ruta nacional.
                Cargue y transporte de contenedores directamente en puerto ó en el lugar que se indique para ser transportado a destinos nacionales. </p>
            </div>
        </div>
        <div className="col-md-3">
            <div className="services-post">
                <Link to = "#"><i className="fa fa-eyedropper"></i></Link>
                <h2>MERCANCÍAS QUÍMICAS</h2>
                <p>En Coordinadora, cuando hablamos de transporte de Mercancías Químicas y Peligrosas, entendemos  la importancia de los procesos responsables como el cumplimiento de las normas vigentes, nuestro compromiso como empresa responsable con la preservación de la seguridad, la salud y el medio ambiente, a través de buenas prácticas y procesos estándar y garantizados para el manejo, identificación, clasificación, segregación, cargue, transporte y distribución de sus mercancías químicas y peligrosas, y para la protección de las otras mercancías no químicas que transportamos a nuestros clientes tradicionales. </p>
            </div>
        </div>
        <div className="col-md-3">
            <div className="services-post">
                <Link to = "#"><i className="fa fa-cart-arrow-down"></i></Link>
                <h2>OPERACIONES LOGÍSTICAS E-COMMERCE</h2>
                <p>Tu tienda virtual estará habilitada para realizar transacciones y contarás con todos los medios de pago, incluido pago contra entrega. Aqui hallarás productos de todas las líneas, HOGAR, ROPA, ALIMENTOS,
                TRANSPORTE Y MUCHO MAS.</p>
            </div>
        </div>
        <div className="col-md-3">
            <div className="services-post">
                <Link to = "#"><i className="fa fa-bicycle"></i></Link>
        <h2>RECOGIDAS A DOMICILIO</h2>
    <p>En Coordinadora te ofrecemos el servicio de recogida de paquetes sin costo, el cual puedes solicitar a través del siguiente enlace. Donde debes ingresar todos los datos requeridos como nombres, correo electrónico, teléfonos, el tipo de envío ya sea paquetes o documentos, la dirección, la fecha y la hora para llevar a cabo la recogida. Adicional debes ingresar el nombre y documento de la persona que hará la entrega de la mercancía que será recogida por nuestro personal. </p>
    </div>
        </div>
        <div className="col-md-3">
            <div className="services-post">
                <Link to = "#"><i className="fa fa-foursquare"></i></Link>
                <h2>ENTREGA PUERTA A PUERTA</h2>
                <p>Donec odio. Quisque volutpat mattis eros. Nullam malesuada </p>
            </div>
        </div>
    </div>
</div>
{/* <!-- Start Service Section --> */}
</section>

    );
}

export default Servicios;