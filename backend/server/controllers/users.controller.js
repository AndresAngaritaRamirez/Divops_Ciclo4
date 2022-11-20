import User from "../models/User.js";

export const getUsers = async (req, res) => {
    try {
      const users = await User.find();
      return res.send(users);
    } catch (error) {
      console.log(error.message);
      return res.status(500).json({ message: error.message });
    }
  };

  export const createUsers = async (req, res) => {
    try {
      const { correo, contraseña, esAdmin } = req.body;
  
      const NewUser = new User({ correo, contraseña, esAdmin });
      await NewUser.save();
      return res.json(NewUser);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: error.message });
    }
  };