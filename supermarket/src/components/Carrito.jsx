import carrito from "../img/carrito.png";
import Table from "react-bootstrap/Table";
import Button from 'react-bootstrap/Button';
import { useState } from "react";

export function Carrito() {
    const [productos, setProductos] = useState([{}])
    const [producto,setProducto] = useState({})
  
  return (
    <div className="container">
      <div align="center">
        <img src={carrito} width="50px" height="50px"></img>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#id</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Cantidad</th>
          </tr>
        </thead>
        <tbody>
            {
              productos.map((dato) => {
                  return (
                    <>
                      <tr>
                          <td>{dato.id}</td>
                          <td>{dato.nombre}</td>
                          <td>{dato.preciounidad}</td>
                          <td><input type="number" id={dato.id}></input></td>
                      </tr>
                    </>
                  )
              } )
            }
        </tbody>
      </Table>
      <Button variant="primary" href="/productos" onClick={() => {
        let resultado = 0
        productos.map((product) => {
        let cantidad = document.getElementById(product.id).value
        resultado += parseInt(product.preciounidad) * cantidad

        })
        alert('Su compra total fue por valor de: $ ' + resultado)
      }} >Realizar compra</Button>{' '}
    </div>
  );

  function llenarCarrito() {
    let productos
    let ids = localStorage.getItem('ids')

    ids.map((id)=> {
      getProducto(id)
      productos.push(producto)
      setProductos(productos)
    })

  }

  function getProducto(id) {
    fetch(`http://localhost:3001/products/${id}`)
      .then((data) => data.json())
      .then((data) => {
        setProducto(data);
      });
  }



}
