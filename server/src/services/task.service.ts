import { conectionMySql } from "../configs/mysql.config";

class TaskService {
  private db: any;
  constructor() {
    this.db = conectionMySql();
  }
  addTask(_name: string) {
    return new Promise((resolve, reject) => {
      this.db.query(
        "INSERT INTO tasks SET ?",
        { _name },
        (err: Error, data: any) => {
          if (err) {
            reject(err);
          }
          resolve(data);
        }
      );
    });
  }
  getTasks() {
    return new Promise((resolve, reject) => {
      this.db.query("SELECT * FROM tasks", (err: Error, data: any) => {
        if (err) {
          reject(err);
        }
        resolve(data);
      });
    });
  }
  getTaskById(id: string) {
    return new Promise((resolve, reject) => {
      this.db.query(
        "SELECT * FROM tasks WHERE id = ?",
        [id],
        (err: Error, data: any) => {
          if (err) {
            reject(err);
          }
          resolve(data);
        }
      );
    });
  }
  updateTask(id: string, _status: boolean) {
    return new Promise((resolve, reject) => {
      this.db.query(
        "UPDATE tasks SET ? WHERE id = ?",
        [{_status }, id],
        (err: Error, data: any) => {
          if (err) {
            reject(err);
          }
          resolve(data);
        }
      );
    });
  }
  deleteTask(id: string) {
    return new Promise((resolve, reject) => {
      this.db.query(
        "DELETE FROM tasks WHERE id = ?",
        [id],
        (err: Error, data: any) => {
          if (err) {
            reject(err);
          }
          resolve(data);
        }
      );
    });
  }
}
export const taskService = new TaskService();
