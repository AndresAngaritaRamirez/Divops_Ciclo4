import Table from 'react-bootstrap/Table'
import {productos} from '../Data/Data'
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

export function Productos(){

    let ids = []
 
    const [productos, setProductos] = useState([])
    const [producto, setProducto] = useState({})
    getData()
    return (
        <div className='container'>
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
                            <td>{data._id}</td>
                            <td>{data.nombre}</td>
                            <td>{data.precio}</td>
                            <td id={data.id}>{data.cantidad}</td>
                            <td><Button variant="primary"    onClick={() =>{
                      
                                ids.push(data._id)
                                alert('Producto agregado con éxtio, tienes: ' + ids.length + ' Articulo(s) Añadido(s)')
                                localStorage.setItem('ids',ids )
                                console.log(ids)
                              
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
    </div>
    )

    function getData() {
        fetch("http://localhost:3001/products/")
          .then((data) => data.json())
          .then((data) => {
            setProductos(data);
          });
      }

      
}