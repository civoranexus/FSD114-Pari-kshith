import { Link } from "react-router-dom";
import Layout from "../components/Layout";

const courses = [
  {
    id: 1,
    title: "JavaScript Fundamentals",
    description: "Learn JS basics: variables, loops, functions.",
    category: "Programming",
  },
  {
    id: 2,
    title: "React for Beginners",
    description: "Build UI using React components and hooks.",
    category: "Frontend",
  },
  {
    id: 3,
    title: "Node.js Basics",
    description: "Create backend APIs using Node and Express.",
    category: "Backend",
  },
];

export default function Courses() {
  return (
    <Layout>
      <h2>All Courses</h2>

      <div style={styles.grid}>
        {courses.map((course) => (
          <div key={course.id} style={styles.card}>
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <span style={styles.tag}>{course.category}</span>

            <Link to={`/courses/${course.id}`} style={styles.btn}>
              View Details
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  );
}

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "16px",
    marginTop: "16px",
  },
  card: {
    padding: "16px",
    border: "1px solid #ddd",
    borderRadius: "12px",
    backgroundColor: "#fff",
  },
  tag: {
    display: "inline-block",
    marginTop: "6px",
    fontSize: "12px",
    color: "#555",
  },
  btn: {
    display: "inline-block",
    marginTop: "10px",
    textDecoration: "none",
    padding: "8px 12px",
    borderRadius: "8px",
    backgroundColor: "#111",
    color: "#fff",
    fontWeight: "600",
  },
};
