import express from "express";
import cors from "cors";
import { UserLogin } from "./middlewares/login.js";
import { createNewUser } from "./middlewares/createUse.js";

export const routes = express();

routes.use(express.json());
routes.use(cors());

routes.get("/", (req, res) => {
  res.status(200).send("whyy");
});

routes.post("/register", createNewUser);

routes.post("/login", UserLogin);
