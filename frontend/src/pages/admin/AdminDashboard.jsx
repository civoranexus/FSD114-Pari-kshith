import Layout from "../../components/Layout";

export default function AdminDashboard() {
  return (
    <Layout>
      <h2>Admin Dashboard</h2>
      <p style={{ color: "#555" }}>
        Admin can manage users, courses, and view reports.
      </p>

      <div style={styles.box}>
        <h3 style={{ marginTop: 0 }}>Reports (Demo)</h3>
        <ul>
          <li>Total Users: 120</li>
          <li>Total Courses: 35</li>
          <li>Completion Rate: 48%</li>
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
