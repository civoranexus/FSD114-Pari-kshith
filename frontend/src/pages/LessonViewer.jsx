import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { getLessons } from "../services/lessonService";
import { useParams } from "react-router-dom";

export default function LessonViewer() {
  const { id } = useParams();
  const [lessons, setLessons] = useState([]);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    getLessons(id).then(setLessons);
  }, [id]);

  const markComplete = async (lessonId) => {
    const token = localStorage.getItem("token");

    if (!token) {
      setMsg("Login required");
      return;
    }

    const res = await fetch(
      `http://localhost:5000/api/lessons/complete/${lessonId}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await res.json();
    setMsg(data.message || "Completed!");
  };

  return (
    <Layout>
      <h2>Lessons</h2>

      {msg && <p style={{color:"green"}}>{msg}</p>}

      {lessons.length === 0 && <p>No lessons yet</p>}

      {lessons.map((l) => (
        <div key={l.id} style={{ marginBottom: "20px" }}>
          <h3>{l.title}</h3>
          <p>{l.content}</p>

          {l.video_url && (
            <>
              <a href={l.video_url} target="_blank">
                Watch Video
              </a>
              <br />
            </>
          )}

          <button onClick={() => markComplete(l.id)}>
            Mark Complete
          </button>
        </div>
      ))}
    </Layout>
  );
}
