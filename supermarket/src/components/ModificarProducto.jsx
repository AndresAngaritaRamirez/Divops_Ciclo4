import Table from 'react-bootstrap/Table'
import {productos} from '../Data/Data'
import Button from 'react-bootstrap/Button';

export function ModificarProducto(){
   getData()
    let productosV = productos
    localStorage.setItem('productos', JSON.stringify(productosV))
    return (
        <Table striped bordered hover>
    <thead>
        <tr>
        <th>#id</th>
        <th>Nombre</th>
        <th>Precio</th>
        <th>Cantidad en stock</th>
        <th></th>
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
                            <td>{data.cantidad}</td>
                            <td><Button variant="primary"  onClick={() => {
                                let producto = productos[parseInt(data.id-1)]
                                localStorage.setItem('seleccionado', JSON.stringify(producto))
                            }} href="/modificar">Modificar</Button>{' '}</td>
                        </tr>
                    </>
                )
            })

        } 

      
    </tbody>
    </Table>
    )


    function getData() {
    
        fetch('http://localhost:3001/products/')
        .then(data => data.json())
        .then(data => {
            console.log('---Datos---')
            console.log(`${JSON.stringify(data)}`)

        })

     
    }
}
