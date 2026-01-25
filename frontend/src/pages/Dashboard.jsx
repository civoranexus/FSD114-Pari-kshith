import Layout from "../components/Layout";

export default function Dashboard() {
  return (
    <Layout>
      <h2 style={{ marginBottom: "8px" }}>Student Dashboard</h2>
      <p style={{ marginBottom: "20px", color: "#555" }}>
        Demo dashboard UI (progress will be dynamic later).
      </p>

      <div style={styles.box}>
        <h3 style={{ marginTop: 0 }}>My Courses</h3>
        <ul>
          <li>Web Development Basics — 30% ✅</li>
          <li>JavaScript Fundamentals — 60% ✅</li>
          <li>Database Introduction — 10% ✅</li>
        </ul>
      </div>
    </Layout>
  );
}

const styles = {
  box: {
    padding: "16px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    backgroundColor: "#fff",
  },
};
