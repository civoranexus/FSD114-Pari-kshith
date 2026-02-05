import express from "express";
import pool from "../db.js";
import { protect } from "../middleware/authMiddleware.js";
import { allowRoles } from "../middleware/roleMiddleware.js";

const router = express.Router();


// ➜ Create lesson (Teacher/Admin)
router.post(
  "/:courseId",
  protect,
  allowRoles("teacher", "admin"),
  async (req, res) => {
    const { courseId } = req.params;
    const { title, content, video_url } = req.body;

    try {
      const result = await pool.query(
        `INSERT INTO lessons (course_id,title,content,video_url)
         VALUES ($1,$2,$3,$4)
         RETURNING *`,
        [courseId, title, content, video_url]
      );

      res.status(201).json({
        message: "Lesson added",
        lesson: result.rows[0],
      });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
);
// Mark lesson completed
router.post(
  "/complete/:lessonId",
  protect,
  async (req, res) => {
    const { lessonId } = req.params;

    await pool.query(
      `INSERT INTO lesson_completion (user_id, lesson_id, completed)
       VALUES ($1,$2,true)
       ON CONFLICT (user_id,lesson_id)
       DO UPDATE SET completed=true`,
      [req.user.id, lessonId]
    );

    res.json({ message: "Lesson completed" });
  }
);


// ➜ Get lessons for a course (Public)
router.get("/:courseId", async (req, res) => {
  const { courseId } = req.params;

  const result = await pool.query(
    "SELECT * FROM lessons WHERE course_id=$1 ORDER BY id",
    [courseId]
  );

  res.json(result.rows);
});

export default router;
