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
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/enroll", enrollmentRoutes);
app.use("/api/lessons", lessonRoutes);
app.use("/api/quiz", quizRoutes);
app.use("/api/progress", progressRoutes);
app.use("/api/certificate", certificateRoutes);
app.use("/api/admin", adminRoutes);

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

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

