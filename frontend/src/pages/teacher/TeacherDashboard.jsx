import Layout from "../../components/Layout";
import { Link } from "react-router-dom";

export default function TeacherDashboard() {
  return (
    <Layout>
      <h2>Teacher Dashboard</h2>
      <p style={{ color: "#555" }}>
        Manage courses, lessons, quizzes, assignments and announcements.
      </p>

      <div style={styles.grid}>
      <div style={styles.card}>
      <h3>Create Course</h3>
    <p>Add new course content for students.</p>
  </div>

  <Link to="/teacher/quiz" style={{ textDecoration: "none", color: "inherit" }}>
    <div style={styles.card}>
      <h3>Create Quiz</h3>
      <p>Auto-graded quizzes for lessons.</p>
    </div>
  </Link>

  <div style={styles.card}>
    <h3>Grade Assignments</h3>
    <p>Review and grade student submissions.</p>
  </div>
</div>

    </Layout>
  );
}

const styles = {
  grid: {
    marginTop: "14px",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "14px",
  },
  card: {
    padding: "16px",
    border: "1px solid #ddd",
    borderRadius: "12px",
    backgroundColor: "#fff",
  },
};
