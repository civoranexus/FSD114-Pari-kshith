import { Link } from "react-router-dom";
import Layout from "../components/Layout";

export default function Dashboard() {
  return (
    <Layout>
      <h2>Main Dashboard</h2>
      <p style={{ color: "#555" }}>
        Select dashboard based on role (demo navigation).
      </p>

      <div style={styles.links}>
        <Link style={styles.btn} to="/student">Go to Student</Link>
        <Link style={styles.btn} to="/teacher">Go to Teacher</Link>
        <Link style={styles.btn} to="/admin">Go to Admin</Link>
      </div>
    </Layout>
  );
}

const styles = {
  links: {
    display: "flex",
    gap: "12px",
    marginTop: "16px",
    flexWrap: "wrap",
  },
  btn: {
    textDecoration: "none",
    padding: "10px 14px",
    borderRadius: "10px",
    border: "1px solid #111",
    backgroundColor: "#111",
    color: "#fff",
    fontWeight: "700",
  },
};
