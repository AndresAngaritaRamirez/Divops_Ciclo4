export function Header(){

    function changeView(event){
        console.log(event.target.id);
    }

    return (
        <header>
        <div className="wrapper">
            <div className="logo">Logo de divops</div>
            <nav>
                <a href="#">Inicio</a>
                <a href="#">Recargar</a>
                <a href="#" onClick={()=>
                console.log("HOLA")
                }>Cambiar vista</a>
            </nav>
        </div>
        </header>
    )
}