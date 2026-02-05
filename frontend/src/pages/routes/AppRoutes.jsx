import { Routes, Route } from "react-router-dom";
import Home from "../Home";
import Login from "../Login";
import Register from "../Register";
import Dashboard from "../Dashboard";
import StudentDashboard from "../student/StudentDashboard";
import TeacherDashboard from "../teacher/TeacherDashboard";
import AdminDashboard from "../admin/AdminDashboard";
import Courses from "../Courses";
import CourseDetails from "../CourseDetails";
import LessonViewer from "../LessonViewer";
import CreateQuiz from "../teacher/CreateQuiz";
import QuizResults from "../student/QuizResults";
import Quiz from "../Quiz";
import AdminAnalytics from "../AdminAnalytics";
import TeacherContent from "../TeacherContent";
import ProtectedRoute from "../../components/ProtectedRoute";
import RoleRoute from "../../components/RoleRoute";
import ProtectedRoute from "../../components/ProtectedRoute";
import RoleRoute from "../../components/RoleRoute";
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/dashboard" element={<Dashboard />} />
      <Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  }
/>
      {/* Role dashboards */}
      <Route path="/student" element={<StudentDashboard />} />
      <Route path="/teacher" element={<TeacherDashboard />} />
      <Route path="/admin" element={<AdminDashboard />} />

      {/* Courses */}
      <Route path="/courses" element={<Courses />} />
      <Route path="/courses/:id" element={<CourseDetails />} />

      {/* Lessons */}
      <Route path="/lessons" element={<LessonViewer />} />
      <Route path="/lessons/:id" element={<LessonViewer />} />

      <Route path="/teacher/quiz" element={<CreateQuiz />} />
      <Route path="/student/results" element={<QuizResults />} />
      <Route path="/quiz/:id" element={<Quiz />} />
      <Route path="/admin-analytics" element={<AdminAnalytics />} />
      <Route path="/teacher-content" element={<TeacherContent />} />
      <Route
  path="/teacher-content"
  element={
    <ProtectedRoute>
      <RoleRoute role="teacher">
        <TeacherContent />
      </RoleRoute>
    </ProtectedRoute>
  }
/>
<Route
  path="/admin-analytics"
  element={
    <ProtectedRoute>
      <RoleRoute role="admin">
        <AdminAnalytics />
      </RoleRoute>
    </ProtectedRoute>
  }
/>
      {/* ❗ MUST BE LAST */}
      <Route
        path="*"
        element={<h2 style={{ padding: 20 }}>Page Not Found ❌</h2>}
      />
    </Routes>
  );
}
