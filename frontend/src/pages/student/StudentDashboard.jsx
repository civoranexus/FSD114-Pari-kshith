import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { myEnrollments } from "../../services/enrollService";
import { Link } from "react-router-dom";

export default function StudentDashboard() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    myEnrollments(localStorage.getItem("token")).then(setCourses);
  }, []);

  return (
    <Layout>
      <h2>My Courses</h2>

      <Link to="/student/results">
        <button style={{marginBottom: "16px"}}>
          View Quiz Results
        </button>
      </Link>

      {courses.map((c) => (
        <div key={c.id}>
          <strong>{c.title}</strong>
          <p>Progress: {c.progress_percent}%</p>
        </div>
      ))}
    </Layout>
  );
}
