import express from "express";
import pool from "../db.js";
import { protect } from "../middleware/authMiddleware.js";
import { allowRoles } from "../middleware/roleMiddleware.js";

const router = express.Router();

// Enroll in a course (Student only)
router.post(
  "/:courseId",
  protect,
  allowRoles("student"),
  async (req, res) => {
    const { courseId } = req.params;

    try {
      await pool.query(
        "INSERT INTO enrollments (user_id, course_id) VALUES ($1,$2)",
        [req.user.id, courseId]
      );

      await pool.query(
        "INSERT INTO progress (user_id, course_id) VALUES ($1,$2)",
        [req.user.id, courseId]
      );

      res.status(201).json({ message: "Enrolled successfully" });
    } catch (err) {
      res.status(400).json({ error: "Already enrolled or invalid course" });
    }
  }
);

// Get student enrollments
router.get(
  "/my",
  protect,
  allowRoles("student"),
  async (req, res) => {
    const result = await pool.query(
      `SELECT c.id, c.title, p.progress_percent
       FROM enrollments e
       JOIN courses c ON c.id = e.course_id
       JOIN progress p ON p.course_id = c.id
       WHERE e.user_id = $1`,
      [req.user.id]
    );
    res.json(result.rows);
  }
);

// Update progress (simulated)
router.put(
  "/progress/:courseId",
  protect,
  allowRoles("student"),
  async (req, res) => {
    const { courseId } = req.params;
    const { progress } = req.body;

    await pool.query(
      "UPDATE progress SET progress_percent=$1, updated_at=NOW() WHERE user_id=$2 AND course_id=$3",
      [progress, req.user.id, courseId]
    );

    res.json({ message: "Progress updated" });
  }
);

export default router;
