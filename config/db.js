import mysql2 from "mysql2";
import dotenv from "dotenv";

dotenv.config();

export const conn = mysql2.createConnection({
  host: process.env.HOSTNAME,
  database: process.env.DATABASE,
  user: process.env.USERNAME,
  password: process.env.PASSWORD,
  ssl: {
    rejectUnauthorized: true,
  },
});
