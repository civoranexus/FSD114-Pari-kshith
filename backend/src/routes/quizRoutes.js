import express from "express";
import pool from "../db.js";
import { protect } from "../middleware/authMiddleware.js";
import { allowRoles } from "../middleware/roleMiddleware.js";

const router = express.Router();


// ✅ Create quiz (teacher/admin)
router.post("/:lessonId", protect, allowRoles("teacher","admin"), async (req,res)=>{
  const { lessonId } = req.params;
  const { title } = req.body;

  const result = await pool.query(
    "INSERT INTO quizzes (lesson_id,title) VALUES ($1,$2) RETURNING *",
    [lessonId,title]
  );

  res.json(result.rows[0]);
});


// ✅ Add question
router.post("/question/:quizId", protect, allowRoles("teacher","admin"), async (req,res)=>{
  const { quizId } = req.params;
  const { question, a,b,c,d, correct } = req.body;

  const result = await pool.query(
    `INSERT INTO quiz_questions
     (quiz_id,question,option_a,option_b,option_c,option_d,correct_option)
     VALUES ($1,$2,$3,$4,$5,$6,$7)
     RETURNING *`,
     [quizId,question,a,b,c,d,correct]
  );

  res.json(result.rows[0]);
});


// ✅ Get quiz questions (student)
router.get("/:quizId", protect, async (req,res)=>{
  const result = await pool.query(
    "SELECT id,question,option_a,option_b,option_c,option_d FROM quiz_questions WHERE quiz_id=$1",
    [req.params.quizId]
  );
  res.json(result.rows);
});


// ✅ Submit quiz
router.post("/submit/:quizId", protect, async (req,res)=>{
  const { answers } = req.body; // {questionId: "A"}

  const qs = await pool.query(
    "SELECT id, correct_option FROM quiz_questions WHERE quiz_id=$1",
    [req.params.quizId]
  );

  let score = 0;

  qs.rows.forEach(q=>{
    if (answers[q.id] === q.correct_option) score++;
  });

  await pool.query(
    "INSERT INTO quiz_attempts (user_id,quiz_id,score) VALUES ($1,$2,$3)",
    [req.user.id, req.params.quizId, score]
  );

  res.json({ score, total: qs.rows.length });
});
// ✅ Get quiz attempt history (student)
router.get("/attempts/me", protect, async (req, res) => {
  const result = await pool.query(
    `SELECT qa.id, qa.score, qa.attempted_at,
            q.title as quiz_title
     FROM quiz_attempts qa
     JOIN quizzes q ON qa.quiz_id = q.id
     WHERE qa.user_id = $1
     ORDER BY qa.attempted_at DESC`,
    [req.user.id]
  );

  res.json(result.rows);
});

export default router;
