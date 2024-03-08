import express, { Express } from "express";
import { rootRoute } from "./routes";
import { conectionMySql } from "./configs/mysql.config";
import bodyParser from "body-parser";
import cors from "cors";
const app: Express = express();
// Middle ware
app.use(bodyParser.json());
app.use(cors());
// Router Express
rootRoute(app);

// Server
conectionMySql();
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
