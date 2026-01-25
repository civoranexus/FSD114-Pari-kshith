export default function CourseCard({ course }) {
  return (
    <div style={styles.card}>
      <div style={styles.header}>
        <span style={styles.badge}>{course.category}</span>
      </div>

      <h3 style={styles.title}>{course.title}</h3>
      <p style={styles.desc}>{course.description}</p>

      <div style={styles.footer}>
        <span style={styles.level}>Level: {course.level}</span>
        <button style={styles.btn} type="button">
          View Course
        </button>
      </div>
    </div>
  );
}

const styles = {
  card: {
    padding: "16px",
    border: "1px solid #e5e7eb",
    borderRadius: "14px",
    backgroundColor: "#ffffff",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
  },
  header: {
    display: "flex",
    justifyContent: "flex-end",
  },
  badge: {
    fontSize: "12px",
    padding: "4px 10px",
    borderRadius: "999px",
    backgroundColor: "#f1f5f9",
    border: "1px solid #e2e8f0",
  },
  title: {
    margin: 0,
    fontSize: "18px",
  },
  desc: {
    margin: 0,
    color: "#555",
    fontSize: "14px",
  },
  footer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "6px",
  },
  level: {
    fontSize: "13px",
    color: "#444",
  },
  btn: {
    padding: "8px 12px",
    borderRadius: "10px",
    border: "1px solid #111",
    backgroundColor: "#111",
    color: "#fff",
    cursor: "pointer",
    fontWeight: "600",
  },
};
