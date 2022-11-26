import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import { ModificarProducto } from '../components/ModificarProducto';
import { Ventas } from '../components/Ventas';
import { Agregar } from '../components/Agregar';


export const Admin = () => {
	return (
	<div className="container border">
		<Tabs
        defaultActiveKey="modificarProducto"
        id="justify-tab-example"
        className="mb-3"
        justify
        >

        <Tab eventKey="modificarProducto" title="Modificar productos">
            <ModificarProducto />
        </Tab>
        <Tab eventKey="longer-tab" title="Lista ventas">
            <Ventas />
        </Tab>
        <Tab eventKey="idk" title="Agregar producto">
            <Agregar />
        </Tab>

    </Tabs>
    </div>
	);
}