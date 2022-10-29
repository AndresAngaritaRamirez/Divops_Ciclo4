import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import {ProductosCliente} from './ProductosCliente';
import { Carrito } from './Carrito';

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
        <ProductosCliente />
      </Tab>
      <Tab eventKey="profile" title="Carrito">
        <Carrito />
      </Tab>
    </Tabs>
    </div>
	);
}