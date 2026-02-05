const API = "http://localhost:5000/api/quiz";

export const createQuiz = (lessonId, title, token) =>
  fetch(`${API}/${lessonId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ title }),
  }).then(r => r.json());


export const addQuestion = (quizId, data, token) =>
  fetch(`${API}/question/${quizId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  }).then(r => r.json());
