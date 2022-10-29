import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import {Productos} from './Productos';
import { ModificarProducto } from './ModificarProducto';
import { Ventas } from './Ventas';

export function Principal() {

  const selected = (eventKey) => {
    alert(`selected ${eventKey}`);
  }

	return (
	<div className="container border">
		<Tabs
      defaultActiveKey="profile"
      id="justify-tab-example"
      className="mb-3"
      justify
      >
      <Tab eventKey="home" title="Lista productos">
        <Productos />
      </Tab>
      <Tab eventKey="profile" title="Modificar productos">
        <ModificarProducto />
      </Tab>
      <Tab eventKey="longer-tab" title="Lista ventas">
        <Ventas />
      </Tab>
    </Tabs>
    </div>
	);
}