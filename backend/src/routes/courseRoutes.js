import express from "express";
import db from "../db.js";

const router = express.Router();

// get all courses
router.get("/", async (req, res) => {
  try {
    const result = await db.query(
      "SELECT id,title,description,category FROM courses ORDER BY id"
    );
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch courses" });
  }
});

// get course by id
router.get("/:id", async (req, res) => {
  try {
    const result = await db.query(
      "SELECT * FROM courses WHERE id=$1",
      [req.params.id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Course not found" });
    }

    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch course" });
  }
});

export default router;