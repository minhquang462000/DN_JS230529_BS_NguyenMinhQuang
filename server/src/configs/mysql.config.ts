import mysql, { PoolOptions } from "mysql2";

export const conectionMySql = () => {
  try {
    const connection = mysql.createConnection({
      host: "localhost",
      port: 3306,
      user: "root",
      password: "quang460",
      database: "module4_tyscript_final_exam",
    } as PoolOptions);
    if (connection) {
      console.log("conection success");
    }
    return connection;
  } catch (e) {
    console.log("conection error");
    throw new Error(e as any);
  }
};
