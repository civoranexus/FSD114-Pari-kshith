import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";

export default function Quiz() {
  const { id } = useParams();
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/quiz/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then(r => r.json())
      .then(setQuestions);
  }, [id]);

  const submit = async () => {
    const res = await fetch(
      `http://localhost:5000/api/quiz/submit/${id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ answers }),
      }
    );

    const data = await res.json();
    setResult(data);
  };

  return (
    <Layout>
      <h2>Quiz</h2>

      {questions.map(q => (
        <div key={q.id} style={card}>
          <p><strong>{q.question}</strong></p>

          {["a","b","c","d"].map(k => (
            <label key={k} style={{display:"block"}}>
              <input
                type="radio"
                name={q.id}
                onChange={() =>
                  setAnswers({
                    ...answers,
                    [q.id]: k.toUpperCase()
                  })
                }
              />
              {q["option_"+k]}
            </label>
          ))}
        </div>
      ))}

      <button onClick={submit}>Submit Quiz</button>

      {result && (
        <h3>
          Score: {result.score} / {result.total}
        </h3>
      )}
    </Layout>
  );
}

const card = {
  padding: "12px",
  border: "1px solid #ddd",
  borderRadius: "10px",
  marginBottom: "12px",
};
