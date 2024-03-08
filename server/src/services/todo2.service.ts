import { conectionMySql } from "../configs/mysql.config";

class Todo2Service {
  private connection: any;
  constructor() {
    this.connection = conectionMySql();
  }
  // create
  create(todo_name: string, todo_status: boolean) {
    return new Promise((resolve, reject) => {
      this.connection.query(
        "INSERT INTO todo2 SET ?",
        {
          todo_name,
          todo_status,
        },
        (err: Error, data: any) => {
          if (err) {
            reject(err);
          }
          resolve(data);
        }
      );
    });
  }
  getAll() {
    return new Promise((resolve, reject) => {
      this.connection.query("SELECT * FROM todo2", (err: Error, data: any) => {
        if (err) {
          reject(err);
        }
        resolve(data);
      });
    });
  }
  removeByID(id: string) {
    return new Promise((resolve, reject) => {
      this.connection.query(
        "DELETE FROM todo2 WHERE _id = ?",
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
  updateById(id: string, todo_name: string, todo_status: boolean) {
    return new Promise((resolve, reject) => {
      this.connection.query(
        "UPDATE todo2 SET ? WHERE _id = ?",
        [{ todo_name, todo_status }, id],
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

export const todo2Service = new Todo2Service();
