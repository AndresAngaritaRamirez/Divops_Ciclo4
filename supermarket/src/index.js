import React from 'react';
import ReactDOM from 'react-dom/client';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Principal } from './components/Principal';
import { Header } from './components/Header';
import * as bootstrap from 'bootstrap';
import './Styles/navs.css'
import './Styles/estilos.css'
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<>
    <React.StrictMode>
        <App />
    </React.StrictMode>
</>
);