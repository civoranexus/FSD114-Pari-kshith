import express from "express";
import db from "../db.js"; // Added .js extension
import {protect} from "../middleware/authMiddleware.js"; // Added .js extension
import PDFDocument from "pdfkit";

const router = express.Router();

router.get("/course/:courseId", protect, async (req, res) => {
  try {
    const userId = req.user.id;
    const courseId = req.params.courseId;

    // get user + course
    const user = await db.query(
      "SELECT name FROM users WHERE id=$1",
      [userId]
    );

    const course = await db.query(
      "SELECT title FROM courses WHERE id=$1",
      [courseId]
    );

    // calculate progress
    const prog = await db.query(`
      SELECT 
        COUNT(l.id) total, 
        COUNT(lc.lesson_id) completed
      FROM lessons l
      LEFT JOIN lesson_completion lc 
        ON lc.lesson_id=l.id 
        AND lc.user_id=$1 
        AND lc.completed=true
      WHERE l.course_id=$2
    `, [userId, courseId]);

    const total = parseInt(prog.rows[0].total);
    const completed = parseInt(prog.rows[0].completed);
    const percent = total === 0 ? 0 : (completed / total) * 100;

    if (percent < 80) {
      return res.status(400).json({
        error: "Course not completed enough for certificate"
      });
    }

    // create PDF
    const doc = new PDFDocument();

    res.setHeader(
      "Content-Disposition",
      "attachment; filename=certificate.pdf"
    );
    res.setHeader("Content-Type", "application/pdf");

    doc.pipe(res);

    doc.fontSize(26).text("Certificate of Completion", {
      align: "center",
    });

    doc.moveDown();

    doc.fontSize(18).text(
      `This certifies that ${user.rows[0].name}`,
      { align: "center" }
    );

    doc.moveDown();

    doc.text(
      `has successfully completed the course`,
      { align: "center" }
    );

    doc.moveDown();

    doc.fontSize(20).text(course.rows[0].title, {
      align: "center",
    });

    doc.moveDown();
    doc.fontSize(14).text(
      `Date: ${new Date().toLocaleDateString()}`,
      { align: "center" }
    );

    doc.end();

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Certificate generation failed" });
  }
});

export default router;