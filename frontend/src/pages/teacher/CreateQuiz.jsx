import { useState } from "react";
import Layout from "../../components/Layout";
import { createQuiz, addQuestion } from "../../services/quizService";

export default function CreateQuiz() {
  const [lessonId, setLessonId] = useState("");
  const [quizTitle, setQuizTitle] = useState("");
  const [quizId, setQuizId] = useState(null);

  const [q, setQ] = useState("");
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [c, setC] = useState("");
  const [d, setD] = useState("");
  const [correct, setCorrect] = useState("A");

  const token = localStorage.getItem("token");

  const handleCreateQuiz = async () => {
    const res = await createQuiz(lessonId, quizTitle, token);
    setQuizId(res.id);
    alert("Quiz created!");
  };

  const handleAddQuestion = async () => {
    await addQuestion(
      quizId,
      { question: q, a, b, c, d, correct },
      token
    );
    alert("Question added");

    setQ(""); setA(""); setB(""); setC(""); setD("");
  };

  return (
    <Layout>
      <h2>Create Quiz</h2>

      {!quizId && (
        <>
          <input
            placeholder="Lesson ID"
            value={lessonId}
            onChange={e => setLessonId(e.target.value)}
          />
          <input
            placeholder="Quiz Title"
            value={quizTitle}
            onChange={e => setQuizTitle(e.target.value)}
          />
          <button onClick={handleCreateQuiz}>
            Create Quiz
          </button>
        </>
      )}

      {quizId && (
        <>
          <h3>Add Questions</h3>

          <input placeholder="Question"
            value={q} onChange={e=>setQ(e.target.value)} />

          <input placeholder="Option A"
            value={a} onChange={e=>setA(e.target.value)} />

          <input placeholder="Option B"
            value={b} onChange={e=>setB(e.target.value)} />

          <input placeholder="Option C"
            value={c} onChange={e=>setC(e.target.value)} />

          <input placeholder="Option D"
            value={d} onChange={e=>setD(e.target.value)} />

          <select value={correct}
            onChange={e=>setCorrect(e.target.value)}>
            <option>A</option>
            <option>B</option>
            <option>C</option>
            <option>D</option>
          </select>

          <button onClick={handleAddQuestion}>
            Add Question
          </button>
        </>
      )}
    </Layout>
  );
}
