import logo from "../img/logo.jpeg";

export const Header=()=>{
    return (
        <header>
        <div className="wrapper">
            <div className="logo">
                <img src={logo} height="80px" width="80px"/>
            </div>
            <nav>
                <a href="/Login">Login</a>
            </nav>
        </div>
        </header>
    )
}