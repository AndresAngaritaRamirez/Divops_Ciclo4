import express from 'express';
import productsRoutes from './routes/products.routes.js';
import cors from 'cors'
import bodyParser from 'body-parser'

const app = express();

//middlewares
app.use(bodyParser.json())
app.use(express.json());
/* app.use(cors) */
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers","*")

    next();
  }); 

//routes
app.use(productsRoutes)

export default app;