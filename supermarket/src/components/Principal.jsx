import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import {Route, Routes} from "react-router-dom"
import {Cliente} from '../views/Cliente'
import {Admin} from '../views/Admin'
import { Fragment } from "react"
import {Login} from "../views/Login"
import { Modificar } from '../views/Modificar';

export const Principal = () => {

	return (
    <Routes>
      <Fragment>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/cliente" element={<Cliente/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/modificar" element={<Modificar/>}/>
      </Fragment>
    </Routes>
	// <div className="container border">
	// 	<Tabs
  //     defaultActiveKey="profile"
  //     id="justify-tab-example"
  //     className="mb-3"
  //     justify
  //     >
  //     <Tab eventKey="home" title="Lista productos">
  //       <Productos />
  //     </Tab>
  //     <Tab eventKey="profile" title="Modificar productos">
  //       <ModificarProducto />
  //     </Tab>
  //     <Tab eventKey="longer-tab" title="Lista ventas">
  //       <Ventas />
  //     </Tab>
  //     <Tab eventKey="carrito" title="Carrito">
  //       <Carrito />
  //     </Tab>
  //   </Tabs>
  //   </div>
	);
}