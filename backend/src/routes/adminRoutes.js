import express from "express";
import db from "../db.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// admin role middleware
function adminOnly(req, res, next) {
  if (req.user.role !== "admin") {
    return res.status(403).json({ error: "Admin only" });
  }
  next();
}

// platform analytics
router.get("/analytics", protect, adminOnly, async (req, res) => {
  try {
    const users = await db.query(
      "SELECT role, COUNT(*) FROM users GROUP BY role"
    );

    const courses = await db.query(
      "SELECT COUNT(*) FROM courses"
    );

    const enrollments = await db.query(
      "SELECT COUNT(*) FROM enrollments"
    );

    const attempts = await db.query(
      "SELECT COUNT(*) FROM quiz_attempts"
    );

    res.json({
      users_by_role: users.rows,
      total_courses: courses.rows[0].count,
      total_enrollments: enrollments.rows[0].count,
      total_quiz_attempts: attempts.rows[0].count
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Analytics failed" });
  }
});

export default router;