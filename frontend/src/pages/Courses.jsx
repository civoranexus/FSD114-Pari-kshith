import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { getCourses } from "../services/courseService";
import { enroll } from "../services/enrollService";

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    async function loadCourses() {
      try {
        const data = await getCourses();
        if (Array.isArray(data)) {
          setCourses(data);
        } else {
          setError("Failed to load courses");
        }
      } catch (err) {
        setError("Server not reachable");
      }
    }
    loadCourses();
  }, []);

  const handleEnroll = async (courseId) => {
    setMessage("");
    setError("");

    const token = localStorage.getItem("token");
    if (!token) {
      setError("Please login as a student to enroll");
      return;
    }

    try {
      const res = await enroll(courseId, token);
      if (res.error) {
        setError(res.error);
      } else {
        setMessage("Enrolled successfully ✅");
      }
    } catch (err) {
      setError("Enrollment failed");
    }
  };

  return (
    <Layout>
      <h2>Courses</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {message && <p style={{ color: "green" }}>{message}</p>}

      {courses.length === 0 && !error && <p>No courses available</p>}

      <div style={{ display: "grid", gap: "16px" }}>
        {courses.map((course) => (
          <div
            key={course.id}
            style={{
              border: "1px solid #ccc",
              padding: "16px",
              borderRadius: "8px",
            }}
          >
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <small>
              Category: {course.category || "General"} <br />
              Instructor: {course.instructor || "—"}
            </small>

            <br />
            <br />

            <button onClick={() => handleEnroll(course.id)}>
              Enroll
            </button>
          </div>
        ))}
      </div>
    </Layout>
  );
}
