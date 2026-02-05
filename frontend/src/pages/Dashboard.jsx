import { useEffect, useState } from "react";
import { getStudentDashboard } from "../services/studentService";

export default function Dashboard() {
  const [courses, setCourses] = useState(null);

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    const data = await getStudentDashboard();
    setCourses(data);
  };

  if (!courses) return <Loading />;
  if (courses.length === 0)
    return <h3>No enrollments yet</h3>;

  return (
    <div>
      <h2>My Courses</h2>

      {courses.map(c => (
        <div key={c.id} style={{ marginBottom: 12 }}>
          <b>{c.title}</b><br/>
          Category: {c.category}<br/>
          Progress: {c.progress}%
        </div>
      ))}
    </div>
  );
}