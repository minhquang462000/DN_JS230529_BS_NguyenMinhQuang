import { Request, Response } from "express";
import { taskService } from "./../services/task.service";
import { log } from "console";

class TaskController {
  // get All
  async getTasks(req: Request, res: Response) {
    try {
      const docs = await taskService.getTasks();
      if (docs) {
        res.status(200).json(docs);
      }
    } catch (e) {
      res.status(500).json("loi server");
    }
  }
  //get One
  async getTaskbyId(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const doc = await taskService.getTaskById(id);
      if (doc) {
        res.status(200).json(doc);
      }
    } catch (e) {
      res.status(500).json("loi server");
    }
  }
  //Create
  async addTask(req: Request, res: Response) {
    try {
      const { _name } = req.body;
      const doc = await taskService.addTask(_name);
      if (doc) {
        res.status(200).json(doc);
      }
    } catch (e) {
      res.status(500).json("loi server");
    }
  }
  //Update
  async updateTask(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { _status } = req.body;
      const doc = await taskService.updateTask(id, _status);
      if (doc) {
        res.status(200).json(doc);
      }
    } catch (e) {
      console.log(e);
      res.status(500).json("loi server");
    }
  }
  //Delete
  async deleteTask(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const doc = await taskService.deleteTask(id);
      if (doc) {
        res.status(200).json(doc);
      }
    } catch (e) {
      res.status(500).json("loi server");
    }
  }
}

export const taskController = new TaskController();
