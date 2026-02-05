import express from "express";
import db from "../db.js";
import { protect } from "../middleware/authMiddleware.js";
import { teacherOnly } from "../middleware/teacherOnly.js";
import { requireFields } from "../middleware/validate.js";

const router = express.Router();


// get teacher courses
router.get("/my-courses", protect, teacherOnly, async (req, res) => {
  const result = await db.query(
    "SELECT * FROM courses WHERE created_by = $1",
    [req.user.id]
  );
  res.json(result.rows);
});


// add lesson
router.post(
  "/lesson",
  protect,
  teacherOnly,
  requireFields(["course_id", "title", "content"]),
  async (req, res) => {
    const { course_id, title, content } = req.body;

    await db.query(
      "INSERT INTO lessons(course_id,title,content) VALUES ($1,$2,$3)",
      [course_id, title, content]
    );

    res.json({ message: "Lesson created" });
  }
);


// delete lesson
router.delete("/lesson/:id", protect, teacherOnly, async (req, res) => {
  await db.query(
    "DELETE FROM lessons WHERE id=$1",
    [req.params.id]
  );

  res.json({ message: "Lesson deleted" });
});

export default router;