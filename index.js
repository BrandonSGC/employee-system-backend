import { app } from "./app.js";
import { conn } from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 3000;

const main = async () => {
  try {
    conn.connect((err) => {
      if (err) throw err;
      console.log("DB connected!");
    });

    app.listen(PORT, () => {
      console.log(`Server is running on: http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Error starting server:", error);
  }
};

main();
