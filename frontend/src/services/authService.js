import { API_BASE } from "../config/api";

export async function registerUser(data) {
  const res = await fetch(`${API_BASE}/api/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function loginUser(data) {
  const res = await fetch(`${API_BASE}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function getProtected(token) {
  const res = await fetch(`${API_BASE}/api/protected`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
}
