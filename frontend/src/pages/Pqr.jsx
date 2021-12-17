import React from 'react';
import { Link } from 'react-router-dom';
import {Row, Col} from 'react-bootstrap'

const Pqr = () => {
    return (
    
    <>
        <p></p> 
        <div className="container">
        
            <div className="row justify-content-md-center">
                <div className="row">
                    
                    <div className="col-4 text-center mb-5">
                        <div className="container text-center mb-5"  style={{height: "auto", width:"200px"}}>
                            <img src="asset/images/pqr.png" className="mh-100" alt='' />
                        </div>
                        
                        <h1 className='mb-5 mt-5'>
                            RECOGEMOS SIN COSTO
                        </h1>
                                         
                    </div>
                    
                    <div className="col-8">
                        
                        <h3 className = " text-center text-success mb-5">
                            solicitud de PQR 

                        </h3>
                        <p className = "text-justify">
                           <Link to = "#" className ="text-black"> Si desea consultar su caso, haga click aquí. </Link>
                        </p>


                        <form className='mt-5'>
                            <div className="form-group">
                                <Row>
                                    <Col>
                                    <label for="documentoidentidad">Número de Documento</label>
                                    <input type="text" className="form-control" id="DocIndentidad" placeholder="Digíte su número de identidad" />
                                    </Col>
                                    <Col>
                                        <div id="form:tSol" className="ui-selectonemenu ui-widget ui-state-default ui-corner-all ui-helper-clearfix" style={{width: "215" }}>
                                                <label id="form:tSol_label" className="ui-selectonemenu-label ui-inputfield ui-corner-all" style={{width: "284px;"}}>Tipo de documento</label>
                                                <div className="ui-selectonemenu-trigger ui-state-default ui-corner-right">
                                                    <span className="ui-icon ui-icon-triangle-1-s"></span>
                                                </div>
                                                <div className="ui-helper-hidden-accessible">
                                                    <select id="form:tSol_input" name="form:tSol_input">
                                                        <option value="" selected="selected">Seleccione</option>
                                                        <option value="AFILIADO">Cédula de ciudanania</option>
                                                        <option value="APODERADO">Cédula Extranjera</option>
                                                        <option value="EDCYV">Nit</option>
                                                        <option value="FAMILIAR">Pasaporte</option>
                                                        <option value="PARTICULAR">Tarjeta Extranjera</option>
                                                        <option value="PROVEEDOR">Tarjeta de identidad</option>
                                                    </select>
                                                </div>
                                            
                                        </div>
                                    </Col>           
                                </Row>



                                <label for="nombreContactenos">Nombre Completo</label>
                                    <input type="text" className="form-control" id="nombre" placeholder="Digíte su nombre completo" /> <p> </p>                             
                                <label for="emailContactenos">Correo Electrónico</label>
                                    <input type="email" className="form-control" id="email-conctact" placeholder="usuario@ejemplo.com" />
                                <label for="telContactenos">Teléfono</label>
                                    <input type="text" className="form-control" id="telContavtenos" placeholder="Digíte su teléfono de contacto" />
                                
                                <label for="depContactenos">Señor(a) usuario por favor seleccione el motivo de su solicitud</label>
                                <tr>
                                    <td>
                                        <div className="ui-radiobutton ui-widget">
                                            <div className="ui-helper-hidden-accessible">
                                                <input id="form:tipos:0" name="form:tipos" type="radio" value="21"/>
                                            </div>
                                            <div className="ui-radiobutton-box ui-widget ui-corner-all ui-radiobutton-relative ui-state-default">
                                                <span className="ui-radiobutton-icon"></span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <label for="form:tipos:0">PETICIÓN </label>
                                    </td>
                                    <td>
                                        <div className="ui-radiobutton ui-widget">
                                            <div className="ui-helper-hidden-accessible">
                                                <input id="form:tipos:1" name="form:tipos" type="radio" value="22"/>
                                            </div>
                                            <div className="ui-radiobutton-box ui-widget ui-corner-all ui-radiobutton-relative ui-state-default">
                                                <span className="ui-radiobutton-icon"></span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <label for="form:tipos:1">COMENTARIO</label>
                                    </td>
                                    <td>
                                        <div className="ui-radiobutton ui-widget">
                                            <div className="ui-helper-hidden-accessible">
                                                <input id="form:tipos:2" name="form:tipos" type="radio" value="121"/>
                                            </div>
                                            <div className="ui-radiobutton-box ui-widget ui-corner-all ui-radiobutton-relative ui-state-default">
                                                <span className="ui-radiobutton-icon"></span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <label for="form:tipos:2">QUEJA</label>
                                    </td>
                                    <td>
                                        <div className="ui-radiobutton ui-widget">
                                            <div className="ui-helper-hidden-accessible">
                                                <input id="form:tipos:3" name="form:tipos" type="radio" value="1"/>
                                            </div>
                                            <div className="ui-radiobutton-box ui-widget ui-corner-all ui-radiobutton-relative ui-state-default">
                                                <span className="ui-radiobutton-icon"></span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <label for="form:tipos:3">FELICITACIONES </label>
                                    </td>
                                    <td>
                                        <div className="ui-radiobutton ui-widget">
                                            <div className="ui-helper-hidden-accessible">
                                                <input id="form:tipos:4" name="form:tipos" type="radio" value="2"/>
                                            </div>
                                            <div className="ui-radiobutton-box ui-widget ui-corner-all ui-radiobutton-relative ui-state-default">
                                                <span className="ui-radiobutton-icon"></span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <label for="form:tipos:4">DERECHO DE PETICION</label>
                                    </td>
                                  
                                    <td>
                                        <div className="ui-radiobutton ui-widget">
                                            <div className="ui-helper-hidden-accessible">
                                                <input id="form:tipos:6" name="form:tipos" type="radio" value="4"/>
                                            </div>
                                            <div className="ui-radiobutton-box ui-widget ui-corner-all ui-radiobutton-relative ui-state-default">
                                                <span className="ui-radiobutton-icon"></span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <label for="form:tipos:6">RECLAMO</label>
                                    </td>
                                    <td>
                                        <div className="ui-radiobutton ui-widget">
                                            <div className="ui-helper-hidden-accessible">
                                                <input id="form:tipos:7" name="form:tipos" type="radio" value="5"/>
                                            </div>
                                            <div className="ui-radiobutton-box ui-widget ui-corner-all ui-radiobutton-relative ui-state-default">
                                                <span className="ui-radiobutton-icon"></span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <label for="form:tipos:7">SUGERENCIA</label>
                                    </td>
                                    <td>
                                        <div className="ui-radiobutton ui-widget">
                                            <div className="ui-helper-hidden-accessible">
                                                <input id="form:tipos:8" name="form:tipos" type="radio" value="101"/>
                                            </div>
                                            <div className="ui-radiobutton-box ui-widget ui-corner-all ui-radiobutton-relative ui-state-default">
                                                 <span className="ui-radiobutton-icon"></span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <label for="form:tipos:8">DENUNCIA</label>
                                    </td>
                                </tr>

                               
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="gridCheck" />
                                    <label className="form-check-label" for="gridCheck">
                                        Autorización para el tratamiento de datos personales
                                    </label>
                                </div>

                            </div>
                            
                            <div className="form-group">
                                <label for="exampleFormControlTextarea1">Señor(a) usuario a continuación describa brevemente su caso:</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
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

export default Pqr;