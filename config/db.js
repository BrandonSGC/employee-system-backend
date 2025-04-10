import mysql2 from "mysql2";
import dotenv from "dotenv";

dotenv.config();

export const conn = mysql2.createConnection({
  host: process.env.DB_HOSTNAME,
  database: process.env.DB_DATABASE,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  ssl: {
    rejectUnauthorized: true,
  },
});
