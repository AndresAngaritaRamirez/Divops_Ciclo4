export function Principal() {
    return (
    <div className="container">
        <div className="card">
            <div className="card-header">
                <ul class="nav nav-pills nav-fill">
                    <li class="nav-item">
                        <button id="listaProductos" className="nav-link active" aria-current="page" onClick={()=>alert("??????")}>Lista productos</button>
                    </li>
                <li class="nav-item">
                        <button class="nav-link" onClick={
                            ()=>alert("Deberia hacer algo")
                            }>Modificar productos</button>
                </li>
                <li class="nav-item">
                        <button class="nav-link" onClick={()=>alert("No funciona lo que intente")}>Lista ventas</button>
                </li>
                </ul>
            </div>
            <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
            </div>
        </div>
    </div>
    );
}