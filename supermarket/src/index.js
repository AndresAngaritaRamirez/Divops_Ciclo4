import React from 'react';
import ReactDOM from 'react-dom/client';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap';
import './Styles/Estilos.css'


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<>
    <header>
        <div className="wrapper">
            <div className="logo">Logo de divops</div>
            <nav>
                <a href="#">Inicio</a>
                <a href="#">Recargar</a>
            </nav>
        </div>
    </header>
    <div className='container'>
        <div className='card'>
            <div className='card-header'>
                <h1>React Bootstrap</h1>
            </div>
            <div className='card-body'>
                <p>Bootstrap is a popular CSS framework.</p>
            </div>
        </div>
    </div>
</>
)