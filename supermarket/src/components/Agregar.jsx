

export const Agregar = () =>{
    return(
        <form>
            <div class="form-group" style={{marginTop: "20px"}}>
                <label for="exampleInputEmail1">Producto</label>
                <input class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingrese el prducto"/>
            </div>
            <div class="form-outline" style={{marginTop: "20px"}}>
                <label class="form-label" for="typeNumber">Precio</label>
                <input type="number" id="typeNumber" class="form-control" placeholder="Precio unitario"/>
            </div>
            <div class="form-outline" style={{marginTop: "20px"}}>
                <label class="form-label" for="typeNumber">Cantidad</label>
                <input type="number" id="typeNumber" class="form-control" placeholder="Cantidad en stock"/>
            </div>
            <center><button type="submit" class="btn btn-primary" style={{marginTop: "20px"}}>Submit</button></center>
        </form>
    )
}