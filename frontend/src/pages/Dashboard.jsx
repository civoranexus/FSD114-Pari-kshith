import Navbar from "../components/Navbar";

export default function Dashboard() {
  return (
    <div>
      <Navbar />

      <div style={styles.container}>
        <h2 style={styles.title}>Student Dashboard</h2>
        <p style={styles.subtitle}>
          This is a demo dashboard UI (progress tracking will be added later).
        </p>

        <div style={styles.box}>
          <h3>My Courses</h3>
          <ul>
            <li>Web Development Basics — 30% ✅</li>
            <li>JavaScript Fundamentals — 60% ✅</li>
            <li>Database Introduction — 10% ✅</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "900px",
    margin: "0 auto",
    padding: "30px 18px",
  },
  title: {
    marginBottom: "8px",
  },
  subtitle: {
    marginBottom: "20px",
    color: "#555",
  },
  box: {
    padding: "16px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    backgroundColor: "#fff",
  },
};
