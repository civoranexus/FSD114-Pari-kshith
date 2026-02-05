import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import { protect } from "./middleware/authMiddleware.js";
import { allowRoles } from "./middleware/roleMiddleware.js";
import courseRoutes from "./routes/courseRoutes.js";
import enrollmentRoutes from "./routes/enrollmentRoutes.js";
import lessonRoutes from "./routes/lessonRoutes.js";
import quizRoutes from "./routes/quizRoutes.js";
import progressRoutes from "./routes/progressRoutes.js";
import certificateRoutes from "./routes/certificateRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import teacherRoutes from "./routes/teacherRoutes.js";
import { notFound } from "./middleware/notFound.js";
import { errorHandler } from "./middleware/errorHandler.js";
import dotenv from "dotenv";
import protectedRoutes from "./routes/protectedRoutes.js";
import studentRoutes from "./routes/studentRoutes.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || "http://localhost:5173",
  credentials: true
}));
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/enroll", enrollmentRoutes);
app.use("/api/lessons", lessonRoutes);
app.use("/api/quiz", quizRoutes);
app.use("/api/progress", progressRoutes);
app.use("/api/certificate", certificateRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/teacher", teacherRoutes);
app.use("/api/protected", protectedRoutes);
app.use("/api/student", studentRoutes);
app.use(notFound);
app.use(errorHandler);
// Test route
app.get("/", (req, res) => {
  res.json({
    message: "EduVillage backend is running 🚀",
  });
});

app.get("/api/protected", protect, (req, res) => {
  res.json({
    message: "Protected route accessed ✅",
    user: req.user,
  });
});
// Student-only route
app.get(
  "/api/student",
  protect,
  allowRoles("student"),
  (req, res) => {
    res.json({
      message: "Welcome Student 🎓",
      user: req.user,
    });
  }
);

// Teacher-only route
app.get(
  "/api/teacher",
  protect,
  allowRoles("teacher"),
  (req, res) => {
    res.json({
      message: "Welcome Teacher 👩‍🏫",
      user: req.user,
    });
  }
);

// Admin-only route
app.get(
  "/api/admin",
  protect,
  allowRoles("admin"),
  (req, res) => {
    res.json({
      message: "Welcome Admin 🛠️",
      user: req.user,
    });
  }
);
app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    service: "EduVillage API"
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

