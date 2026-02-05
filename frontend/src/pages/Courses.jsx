import { useEffect, useState } from "react";
import { getCourses } from "../services/courseService";
import CourseCard from "../components/CourseCard";
import Loading from "../components/Loading";

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    try {
      const data = await getCourses();
      setCourses(data);
    } catch (err) {
      setError("Failed to load courses");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Loading />;
  if (error) return <h3>{error}</h3>;

  return (
    <div>
      <h2>Courses</h2>

      <div style={{ display: "grid", gap: 16 }}>
        {courses.map(c => (
          <CourseCard key={c.id} course={c} />
        ))}
      </div>
    </div>
  );
}