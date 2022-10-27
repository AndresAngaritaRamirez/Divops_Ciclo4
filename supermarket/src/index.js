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
    </div>
</>
)