import { PORT } from './config.js';
import { DBconnection } from "./db.js";
import app from './app.js';
import cors from 'cors'
//import Product from './models/Product';

//const getProducts = require ("./models/Product")

//PORT = process.env.PORT || 3000

//console.log (getProducts)

DBconnection();
app.listen(PORT);
app.use(cors)
console.log("Server listening on port", PORT);