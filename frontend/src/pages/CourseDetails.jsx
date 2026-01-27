import { useParams } from "react-router-dom";
import Layout from "../components/Layout";

const courses = [
  {
    id: 1,
    title: "JavaScript Fundamentals",
    description:
      "This course covers JS basics like variables, loops, functions, and DOM.",
  },
  {
    id: 2,
    title: "React for Beginners",
    description:
      "Learn React fundamentals: components, props, state, and hooks.",
  },
  {
    id: 3,
    title: "Node.js Basics",
    description:
      "Understand Node.js, Express, and building REST APIs.",
  },
];

export default function CourseDetails() {
  const { id } = useParams();
  const course = courses.find((c) => c.id === Number(id));

  if (!course) {
    return (
      <Layout>
        <h2>Course not found ❌</h2>
      </Layout>
    );
  }

  return (
    <Layout>
      <h2>{course.title}</h2>
      <p style={{ marginTop: "10px", color: "#555" }}>
        {course.description}
      </p>

      <button style={styles.btn}>Enroll (UI only)</button>
    </Layout>
  );
}

const styles = {
  btn: {
    marginTop: "16px",
    padding: "10px 14px",
    borderRadius: "10px",
    border: "none",
    backgroundColor: "#111",
    color: "#fff",
    fontWeight: "700",
    cursor: "pointer",
  },
};
