import React from 'react';
import ReactDOM from 'react-dom/client';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap';

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<>
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