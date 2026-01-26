import Layout from "../../components/Layout";

export default function StudentDashboard() {
  return (
    <Layout>
      <h2>Student Dashboard</h2>
      <p style={{ color: "#555" }}>
        Enrolled courses, progress, quizzes and assignments will appear here.
      </p>

      <div style={styles.box}>
        <h3 style={{ marginTop: 0 }}>My Progress</h3>
        <ul>
          <li>JavaScript Fundamentals — 60%</li>
          <li>React for Beginners — 25%</li>
          <li>PostgreSQL Starter — 10%</li>
        </ul>
      </div>
    </Layout>
  );
}

const styles = {
  box: {
    marginTop: "14px",
    padding: "16px",
    border: "1px solid #ddd",
    borderRadius: "12px",
    backgroundColor: "#fff",
  },
};
