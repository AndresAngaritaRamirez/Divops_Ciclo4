import Venta from "../models/Venta.js";

export const getVentas = async (req, res) => {
    try {
      const ventas = await Venta.find();
      res.send(ventas);
    } catch (error) {
      console.log(error.message);
      return res.status(500).json({ message: error.message });
    }
  };

  export const createVentas = async (req, res) => {
    try {
      const { fecha, valor } = req.body;
  
      const NewVenta = new Product({ fecha, valor });
      await NewVenta.save();
      return res.json(NewVenta);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: error.message });
    }
  };