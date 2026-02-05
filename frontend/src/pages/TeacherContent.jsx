import { useEffect, useState } from "react";
import axios from "axios";

export default function TeacherContent() {
  const [courses, setCourses] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [courseId, setCourseId] = useState("");

  const token = localStorage.getItem("token");

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    const res = await axios.get(
      "http://localhost:5000/api/teacher/my-courses",
      { headers: { Authorization: `Bearer ${token}` } }
    );
    setCourses(res.data);
  };

  const addLesson = async () => {
    await axios.post(
      "http://localhost:5000/api/teacher/lesson",
      { course_id: courseId, title, content },
      { headers: { Authorization: `Bearer ${token}` } }
    );

    alert("Lesson added");
  };

  return (
    <div>
      <h2>Teacher Content Manager</h2>

      <h3>Your Courses</h3>
      {courses.map(c => (
        <div key={c.id}>
          {c.id} — {c.title}
        </div>
      ))}

      <h3>Add Lesson</h3>

      <input
        placeholder="Course ID"
        onChange={e => setCourseId(e.target.value)}
      />

      <input
        placeholder="Lesson title"
        onChange={e => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Content"
        onChange={e => setContent(e.target.value)}
      />

      <button onClick={addLesson}>
        Add Lesson
      </button>
    </div>
  );
}