import { conn } from "../config/db.js";

export const getEmployees = async (req, res) => {
  try {
    const sql = "SELECT * FROM employees";
    const employees = await conn.promise().query(sql);

    res.status(200).json(employees[0]);
  } catch (error) {
    console.error(error);
  }
};

export const createEmployee = async (req, res) => {
  try {
    const { name, surname, email, password } = req.body;
    const sql = `INSERT INTO employees (name, surname, email, password) VALUES (?, ?, ?, ?)`;
    const values = [name, surname, email, password];
    const [result] = await conn.promise().execute(sql, values);

    // Check if any row was inserted
    if (result.affectedRows === 1) {
      res.status(201).json({
        message: "Employee created successfully",
        employee: {
          id: result.insertId,
          name,
          surname,
          email,
        },
      });
    } else {
      res.status(500).json({ message: "Failed to create employee" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
