import Button from 'react-bootstrap/Button';
export const Modificar = () => {

    let productoS = JSON.parse(localStorage.getItem('seleccionado'))

    return(
        <div className="container">
            <form>
                <div class="form-group" style={{marginTop: "20px"}}>
                    <label for="exampleInputEmail1">Producto</label>
                    <input class="form-control" id="nombre" placeholder={productoS.nombre}></input>
                </div>
                <div class="form-group" style={{marginTop: "20px"}}>
                    <label for="exampleInputPassword1">Precio</label>
                    <input class="form-control" id="precio" placeholder={productoS.preciounidad}></input>
                </div>
                <div class="form-group" style={{marginTop: "20px"}}>
                    <label for="exampleInputPassword1">Cantidad</label>
                    <input class="form-control" id="cantidad" placeholder={productoS.cantidad}></input>
                </div>
                <center><Button href='/modificarProducto' onClick={() =>{
                    let nuevo = {'nombre': document.getElementById('nombre').value, 'preciounidad': document.getElementById('precio').value, 'cantidad': document.getElementById('cantidad').value}
                    modificarProducto(nuevo)
                    alert("Producto cambiado por: " + JSON.stringify(nuevo))
                }} type="submit"  class="btn btn-primary" style={{marginTop: "20px"}}>Actualizar producto</Button></center>
            </form>
        </div>
    )

    function modificarProducto(modificado) {
        fetch('http://localhost:3001/products',{
                method:"PUT",
                body:modificado,
                headers: {
                'Content-Type': 'application/json'
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
            }).then(resp => resp.json())
                .then(resp => {
                   if( resp.state ){
                    alert(`Se inserto  ${resp.data}`)
                   }else{
                    alert('Id Repetido')
                   }
                })
    }
}