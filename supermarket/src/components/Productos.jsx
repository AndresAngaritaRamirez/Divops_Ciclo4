import Table from 'react-bootstrap/Table'
import {productos} from '../Data/Data'
import Button from 'react-bootstrap/Button';

export function Productos(){

    return (
        <Table striped bordered hover>
    <thead>
        <tr>
        <th>#id</th>
        <th>Nombre</th>
        <th>Precio</th>
        <th>Cantidad en stock</th>
        </tr>
    </thead>
    <tbody>
        {
            productos.map( data => {
                return (
                    <>
                        <tr>
                            <td>{data.id}</td>
                            <td>{data.nombre}</td>
                            <td>{data.preciounidad}</td>
                            <td>{data.cantidad}</td>
                            <td><Button variant="primary">Agregar al carrito</Button>{' '}</td>
                        </tr>
                    </>
                )
            })

        }
    </tbody>
    </Table>
    )
}