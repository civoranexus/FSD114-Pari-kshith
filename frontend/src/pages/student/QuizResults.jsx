import { useEffect, useState } from "react";
import Layout from "../../components/Layout";

export default function QuizResults() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/quiz/attempts/me", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then(r => r.json())
      .then(setData);
  }, []);

  return (
    <Layout>
      <h2>My Quiz Results</h2>

      {data.length === 0 && <p>No attempts yet</p>}

      {data.map(r => (
        <div key={r.id} style={card}>
          <h3>{r.quiz_title}</h3>
          <p>Score: {r.score}</p>
          <p>Date: {new Date(r.attempted_at).toLocaleString()}</p>
        </div>
      ))}
    </Layout>
  );
}

const card = {
  padding: "12px",
  border: "1px solid #ddd",
  borderRadius: "10px",
  marginBottom: "10px",
};
