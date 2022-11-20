import { Router } from "express";
import { deleteProducts, getProduct, getProducts, createProducts, updateProducts } from '../controllers/products.controllers.js'
import {getUsers, createUsers} from '../controllers/users.controller.js'
import { getVentas } from "../controllers/ventas.controller.js";
const router = Router();

router.get('/products', getProducts);
router.get('/users', getUsers);
router.post('/users', createUsers )
router.get('/ventas',getVentas)
router.post('/products', createProducts);
router.put('/products/:id', updateProducts);
router.delete('/products/:id', deleteProducts);

router.get('/products/:id', getProduct);
//un solo producto

export default router;