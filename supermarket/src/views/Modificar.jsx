import { useState } from 'react';
import Button from 'react-bootstrap/Button';
export const Modificar = () => {

    let id = localStorage.getItem('idModificar')
    const [producto, setProducto] = useState({})
    getProducto(id)
    

    return(
        <div className="container">
            <form>
                <div class="form-group" style={{marginTop: "20px"}}>
                    <label for="exampleInputEmail1">Producto</label>
                    <input class="form-control" id="nombre" placeholder={producto.nombre}></input>
                </div>
                <div class="form-group" style={{marginTop: "20px"}}>
                    <label for="exampleInputPassword1">Precio</label>
                    <input class="form-control" id="precio" placeholder={producto.precio}></input>
                </div>
                <div class="form-group" style={{marginTop: "20px"}}>
                    <label for="exampleInputPassword1">Cantidad</label>
                    <input class="form-control" id="cantidad" placeholder={producto.cantidad}></input>
                </div>
                <center><Button href='/modificarProducto' onClick={() =>{
                    let nuevo = JSON.stringify({nombre: document.getElementById('nombre').value, precio: document.getElementById('precio').value, cantidad: document.getElementById('cantidad').value})
                    modificarProducto(id, nuevo)
                    alert("Producto cambiado por: " + JSON.stringify(nuevo))
                }}  type="submit" class="btn btn-primary" style={{marginTop: "20px"}}>Actualizar producto</Button></center>
            </form>
        </div>
    )

    function modificarProducto(id, modificado) {
       
        fetch(`http://localhost:3001/products/${id}`,{
                method:"PUT",
                body:modificado,
                headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': "*"
                    
                },
            }).then(resp => resp.json())
               
    }

    function getProducto(id) {
        fetch(`http://localhost:3001/products/${id}`)
          .then((data) => data.json())
          .then((data) => {
            setProducto(data);
          });
      }
    
}