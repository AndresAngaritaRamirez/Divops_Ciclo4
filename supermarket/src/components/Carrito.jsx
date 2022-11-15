import carrito from "../img/carrito.png";
import Table from "react-bootstrap/Table";
import Button from 'react-bootstrap/Button';



export function Carrito() {
    let productos = JSON.parse(localStorage.getItem('productos'))
  return (
    <>
      <div align="center">
        <img src={carrito} width="300px" height="300px"></img>
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
    </>
  );
}
