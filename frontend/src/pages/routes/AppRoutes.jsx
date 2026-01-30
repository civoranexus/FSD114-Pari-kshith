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

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/dashboard" element={<Dashboard />} />

      {/* Role dashboards */}
      <Route path="/student" element={<StudentDashboard />} />
      <Route path="/teacher" element={<TeacherDashboard />} />
      <Route path="/admin" element={<AdminDashboard />} />

      {/* Courses */}
      <Route path="/courses" element={<Courses />} />
      <Route path="/courses/:id" element={<CourseDetails />} />

      {/* Lessons */}
      <Route path="/lessons" element={<LessonViewer />} />

      {/* ❗ MUST BE LAST */}
      <Route
        path="*"
        element={<h2 style={{ padding: 20 }}>Page Not Found ❌</h2>}
      />
    </Routes>
  );
}
