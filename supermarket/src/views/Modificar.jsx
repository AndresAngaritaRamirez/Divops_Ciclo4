export const Modificar = () => {
    return(
        <div className="container">
            <form>
                <div class="form-group" style={{marginTop: "20px"}}>
                    <label for="exampleInputEmail1">Producto</label>
                    <input class="form-control" placeholder="Nombre del producto"></input>
                </div>
                <div class="form-group" style={{marginTop: "20px"}}>
                    <label for="exampleInputPassword1">Precio</label>
                    <input class="form-control" id="exampleInputPassword1" placeholder="Precio unitario"></input>
                </div>
                <div class="form-group" style={{marginTop: "20px"}}>
                    <label for="exampleInputPassword1">Cantidad</label>
                    <input class="form-control" id="exampleInputPassword1" placeholder="Cantidad en stock"></input>
                </div>
                <center><button type="submit" class="btn btn-primary" style={{marginTop: "20px"}}>Actualizar producto</button></center>
            </form>
        </div>
    )
}