import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import {Productos} from '../components/Productos';
import {Carrito} from '../components/Carrito'

export const Cliente = () => {
	return (
	<div className="container border">
		<Tabs
      defaultActiveKey="listaProductos"
      id="justify-tab-example"
      className="mb-3"
      justify
      >
      <Tab eventKey="listaProductos" title="Lista productos">
        <Productos />
      </Tab>
      <Tab eventKey="carrito" title="Carrito">
        <Carrito />
      </Tab>
    </Tabs>
    </div>
	);
}