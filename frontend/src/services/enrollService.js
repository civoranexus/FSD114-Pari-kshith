import { API_BASE_URL } from "../config/api";

export async function enroll(courseId, token) {
  const res = await fetch(`${API_BASE_URL}/api/enroll/${courseId}`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
}

export async function myEnrollments(token) {
  const res = await fetch(`${API_BASE_URL}/api/enroll/my`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
}
