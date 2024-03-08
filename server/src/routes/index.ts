import { Express } from "express";
import { taskRoute } from "./tasks.route";

export const rootRoute = (app: Express) => {
  taskRoute(app);
};
