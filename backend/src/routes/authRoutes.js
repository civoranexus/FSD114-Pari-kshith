import express from "express";
import bcrypt from "bcrypt";
import pool from "../db.js";

const router = express.Router();

// Register API
router.post("/register", async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert user
    const result = await pool.query(
      "INSERT INTO users (name, email, password, role) VALUES ($1,$2,$3,$4) RETURNING id,name,email,role",
      [name, email, hashedPassword, role]
    );

    res.status(201).json({
      message: "User registered successfully",
      user: result.rows[0],
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;
