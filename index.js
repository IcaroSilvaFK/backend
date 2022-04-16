import "dotenv/config";
import { routes } from "./routes.js";
import { dataBase } from "./database/index.js";

const port = 8080;

dataBase.then(() => console.log("connect at dabase mongo"));

routes.listen(port, () => {
  console.log(`Server running at url http://localhost:${port}`);
});
