import express from "express";
import pool from "../db.js";
import { protect } from "../middleware/authMiddleware.js";
import { allowRoles } from "../middleware/roleMiddleware.js";

const router = express.Router();

// CREATE course (Teacher/Admin)
router.post(
  "/",
  protect,
  allowRoles("teacher", "admin"),
  async (req, res) => {
    const { title, description, category } = req.body;

    if (!title) {
      return res.status(400).json({ error: "Title is required" });
    }

    try {
      const result = await pool.query(
        `INSERT INTO courses (title, description, category, created_by)
         VALUES ($1,$2,$3,$4)
         RETURNING id, title, description, category`,
        [title, description || "", category || "", req.user.id]
      );

      res.status(201).json({
        message: "Course created successfully",
        course: result.rows[0],
      });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
);

// LIST courses (Public)
router.get("/", async (_req, res) => {
  try {
    const result = await pool.query(
      `SELECT c.id, c.title, c.description, c.category, u.name AS instructor
       FROM courses c
       LEFT JOIN users u ON u.id = c.created_by
       ORDER BY c.created_at DESC`
    );
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
