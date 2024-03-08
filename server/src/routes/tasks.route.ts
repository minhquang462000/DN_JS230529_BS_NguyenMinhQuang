import { taskController } from "../controllers/task.controller";
import { Express } from "express";

export const taskRoute = (app: Express) => {
  app.get("/api/v1/tasks", taskController.getTasks);
  app.get("/api/v1/task/:id", taskController.getTaskbyId);
  app.post("/api/v1/task", taskController.addTask);
  app.put("/api/v1/task/:id", taskController.updateTask);
  app.delete("/api/v1/task/:id", taskController.deleteTask);
};
