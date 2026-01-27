import Layout from "../components/Layout";

const lessons = [
  { id: 1, title: "Introduction", completed: true },
  { id: 2, title: "Variables & Data Types", completed: true },
  { id: 3, title: "Functions", completed: false },
  { id: 4, title: "DOM Manipulation", completed: false },
];

export default function LessonViewer() {
  const completedCount = lessons.filter((l) => l.completed).length;
  const progress = Math.round((completedCount / lessons.length) * 100);

  return (
    <Layout>
      <h2>Course Lessons</h2>

      <p style={{ marginBottom: "10px" }}>
        Progress: <strong>{progress}%</strong>
      </p>

      <div style={styles.bar}>
        <div style={{ ...styles.fill, width: `${progress}%` }} />
      </div>

      <ul style={styles.list}>
        {lessons.map((lesson) => (
          <li key={lesson.id} style={styles.item}>
            {lesson.title} {lesson.completed ? "✅" : "⏳"}
          </li>
        ))}
      </ul>
    </Layout>
  );
}

const styles = {
  bar: {
    height: "10px",
    backgroundColor: "#e5e7eb",
    borderRadius: "6px",
    overflow: "hidden",
    marginBottom: "16px",
  },
  fill: {
    height: "100%",
    backgroundColor: "#111",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  item: {
    padding: "8px",
    borderBottom: "1px solid #ddd",
  },
};
