import React from 'react';
import ReactDOM from 'react-dom/client';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Principal } from './components/Principal';
import * as bootstrap from 'bootstrap';
import './styles/navs.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<>
    <div className='container navs'>
            <Principal />
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
    </div>
</>
)