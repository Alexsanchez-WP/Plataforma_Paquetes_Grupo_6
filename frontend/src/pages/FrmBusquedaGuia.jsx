import React from 'react';


const frmBusquedaGuia = () => {
    return (
    <>
    <div>
        <h3 className = "text-center">SEGUIMIENTO DE SU ENVÍO</h3>
    </div>
    <table className="table table-sm table-hover bg-info">
    <thead>
        <tr>
        <th scope="col">#</th>
        <th scope="col">Ubicación</th>
        <th scope="col">Fecha-Hora Salida</th>
        <th scope="col">Destino</th>
        <th scope="col">Fecha-Hora Llegada</th>
        <th scope="col">Proceso</th>
        </tr>
    </thead>
    <tbody>
        <tr>
        <th scope="row">1</th>
        <td>Bodega Bogotá</td>
        <td>20-10-2021</td>
        <td>Bodega Medellín</td>
        <td>23-10-2021</td>
        <td>En tránsito</td>
        </tr>
        <tr>
        <th scope="row">2</th>
        <td>Bodega Medellín</td>
        <td>24-10-2021</td>
        <td>Bodega Barranquilla</td>
        <td>26-10-2021</td>
        <td>En tránsito</td>
        </tr>
        <tr>
        <th scope="row">3</th>
        <td>Bodega Barranquilla</td>
        <td>27-10-2021</td>
        <td></td>
        <td></td>
        <td>En Reparto</td>
        </tr>
    </tbody>
    </table>

    </>
    );
}

export default frmBusquedaGuia;