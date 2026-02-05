import express from "express";
import db from "../config/db.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();


// enroll in course
router.post("/enroll/:courseId", protect, async (req, res) => {
  try {
    const userId = req.user.id;
    const courseId = req.params.courseId;

    await db.query(
      `INSERT INTO enrollments(user_id, course_id)
       VALUES ($1,$2)
       ON CONFLICT DO NOTHING`,
      [userId, courseId]
    );

    res.json({ message: "Enrolled successfully" });

  } catch (err) {
    res.status(500).json({ error: "Enrollment failed" });
  }
});


// student dashboard data
router.get("/dashboard", protect, async (req, res) => {
  try {
    const userId = req.user.id;

    const result = await db.query(`
      SELECT
        c.id,
        c.title,
        c.category,
        COALESCE(p.progress_percent,0) as progress
      FROM enrollments e
      JOIN courses c ON c.id = e.course_id
      LEFT JOIN progress p
        ON p.course_id = c.id AND p.user_id = $1
      WHERE e.user_id = $1
    `, [userId]);

    res.json(result.rows);

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Dashboard failed" });
  }
});

export default router;