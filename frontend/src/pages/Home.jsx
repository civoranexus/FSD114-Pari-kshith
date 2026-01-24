import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />

      <div style={styles.container}>
        <h1 style={styles.title}>Welcome to EduVillage 📚</h1>
        <p style={styles.subtitle}>
          Learn online with courses, lessons, quizzes, and progress tracking.
        </p>

        <div style={styles.cardGrid}>
          <div style={styles.card}>
            <h3>🎓 For Students</h3>
            <p>Enroll in courses, track progress, and complete quizzes.</p>
          </div>

          <div style={styles.card}>
            <h3>👨‍🏫 For Teachers</h3>
            <p>Create and manage courses with lessons and assessments.</p>
          </div>

          <div style={styles.card}>
            <h3>🛡️ For Admin</h3>
            <p>Manage users, courses, and view basic reports.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "1000px",
    margin: "0 auto",
    padding: "30px 18px",
  },
  title: {
    fontSize: "32px",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "16px",
    color: "#555",
    marginBottom: "25px",
  },
  cardGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "16px",
  },
  card: {
  padding: "16px",
  border: "1px solid #223",
  borderRadius: "12px",
  backgroundColor: "#111a2e",
  color: "#e6e6e6",
},
};
