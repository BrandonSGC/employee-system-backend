import express from "express";
import employeeRouter from "./routes/employee.routes.js";

export const app = express();

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to the server!" });
});

// Middlewares
app.use(express.json());

// enable cors
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Routes
app.use("/api/", employeeRouter);
