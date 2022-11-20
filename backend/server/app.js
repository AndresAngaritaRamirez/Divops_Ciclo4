import express from 'express';
import productsRoutes from './routes/products.routes.js';
import fileupload from 'express-fileupload';

const app = express();

//middlewares
app.use(express.json());

//routes
app.use(productsRoutes)

export default app;