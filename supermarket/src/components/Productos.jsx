import Table from 'react-bootstrap/Table'
import {productos} from '../Data/Data'
import Button from 'react-bootstrap/Button';

export function Productos(){
    let productosCarrito = []
    let productosV = productos
    return (
        <>
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
            productosV.map( data => {
                return (
                    <>
                        <tr>
                            <td>{data.id}</td>
                            <td>{data.nombre}</td>
                            <td>{data.preciounidad}</td>
                            <td id={data.id}>{data.cantidad}</td>
                            <td><Button variant="primary"    onClick={() =>{
                                let producto = productos[parseInt(data.id-1)]
                                localStorage.setItem('seleccionado', JSON.stringify(producto))
                                productosCarrito.push(producto)
                                alert('Producto agregado con éxtio, tienes: ' + productosCarrito.length + ' Articulo(s) Añadido(s)')
                                localStorage.setItem('productos', JSON.stringify(productosCarrito))
                              
                                
                                
                            }}>Agregar al carrito</Button>{' '}</td>
                        </tr>
                    </>
                )
            })

        }
    </tbody>
    </Table>
    <div aling="center">
        <Button variant="primary"   href='/carrito'>Ir al carrito</Button>{' '}
    </div>
    </>
    )
}