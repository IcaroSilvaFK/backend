import bcrypt from "bcrypt";
import { userModel } from "../schemas/user.schema.js";

export const createNewUser = async (req, res, next) => {
  try {
    const { name, password, userName } = req.body;

    if (!name) {
      res.status(400).send({ message: "O campo nome é Ogrigatório" });
    }

    if (!password) {
      res.status(400).send({ message: "O campo password é obrigatório" });
    }

    if (!userName) {
      res.satus(400).send({ message: "O campo de apelido é obrigatório" });
    }

    const hash = await bcrypt.hash(password, 9);

    const user = {
      name,
      userName,
      password: hash,
    };
    const newUser = await userModel.create(user);

    res.status(201).send({ userName: newUser.userName, id: newUser._id });
  } catch (error) {
    console.log(error);

    res.status(500).send("Aconteceu um erro");
  }
  next();
};
