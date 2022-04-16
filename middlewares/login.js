import { userModel } from "../schemas/user.schema.js";
import bcrypt from "bcrypt";

export const UserLogin = async (req, res, next) => {
  try {
    const { userName, password } = req.body;

    if (!userName) {
      res.status(400).send({ message: "O nome de usuário é obrigatório" });
      return;
    }

    if (!password) {
      req.status(400).send({ message: "A senha é obrigatória" });
      return;
    }

    const response = await userModel.findOne({ userName });
    if (!response) {
      res
        .status(403)
        .send({ message: "Não existe esse usuário na nossa base de dados" });
      return;
    }

    const passwordMach = await bcrypt.compare(password, response.password);

    if (!passwordMach) {
      res.status(404).send({ message: "Nome de usuário ou senha inválidas" });
      return;
    }

    res.status(200).send({ name: response.userName });
  } catch (error) {
    res.status(500).send({ error: error });
    return;
  }

  next();
};
