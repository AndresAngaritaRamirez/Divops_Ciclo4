import Button from 'react-bootstrap/Button';

export const Agregar = () =>{
    let productos = JSON.parse(localStorage.getItem('productos'))
    console.log(productos)
    return(
        <form>
            <div class="form-group" style={{marginTop: "20px"}}>
                <label for="exampleInputEmail1">Producto</label>
                <input class="form-control" id="nombre" aria-describedby="emailHelp" placeholder="Ingrese el prducto"/>
            </div>
            <div class="form-outline" style={{marginTop: "20px"}}>
                <label class="form-label" for="typeNumber">Precio</label>
                <input type="number" id="precio" class="form-control" placeholder="Precio unitario"/>
            </div>
            <div class="form-outline" style={{marginTop: "20px"}}>
                <label class="form-label" for="typeNumber">Cantidad</label>
                <input type="number" id="cantidad" class="form-control" placeholder="Cantidad en stock"/>
            </div>
            <center><Button href='/modificarProducto' type="submit" class="btn btn-primary" style={{marginTop: "20px"}} onClick={()=>{
              let nuevo = {'id':productos.length+1,'nombre': document.getElementById('nombre').value, 'preciounidad': document.getElementById('precio').value,'cantidad': document.getElementById('cantidad').value }

              alert('El nuevo producto agregado es:' + JSON.stringify(nuevo))
            }}>Agregar</Button></center>
        </form>
    )
}