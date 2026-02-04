import express from "express";
import db from "../db.js"; // Explicit .js extension required
import {protect} from "../middleware/authMiddleware.js"; // Explicit .js extension required

const router = express.Router();

router.get("/course/:courseId", protect, async (req, res) => {
  try {
    const userId = req.user.id;
    const courseId = req.params.courseId;

    const result = await db.query(`
      SELECT 
        COUNT(l.id) AS total_lessons,
        COUNT(lc.lesson_id) AS completed_lessons,
        CASE 
          WHEN COUNT(l.id) = 0 THEN 0
          ELSE ROUND(
            (COUNT(lc.lesson_id)::decimal / COUNT(l.id)) * 100
          )
        END AS progress_percent
      FROM lessons l
      LEFT JOIN lesson_completion lc 
        ON lc.lesson_id = l.id 
        AND lc.user_id = $1 
        AND lc.completed = true
      WHERE l.course_id = $2
    `, [userId, courseId]);

    res.json(result.rows[0]);

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to calculate progress" });
  }
});

export default router;