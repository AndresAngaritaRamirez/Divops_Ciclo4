import Table from 'react-bootstrap/Table'
import {ventas} from '../Data/Ventas'

export function Ventas(){

    return (
        <Table striped bordered hover>
    <thead>
        <tr>
        <th>Fecha</th>
        <th>#id Venta</th>
        <th>Valor</th>
        </tr>
    </thead>
    <tbody>
        {
            ventas.map( data => {
                return (
                    <>
                        <tr>
                            <td>{data.fecha}</td>
                            <td>{data.idVenta}</td>
                            <td>{data.valor}</td>
                        </tr>
                    </>
                )
            })

        }
        
    
        
    </tbody>
    </Table>
    )
}