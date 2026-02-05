import { API_BASE } from "../config/api";

export async function enroll(courseId, token) {
  const res = await fetch(`${API_BASE}/api/enroll/${courseId}`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
}

export async function myEnrollments(token) {
  const res = await fetch(`${API_BASE}/api/enroll/my`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
}
