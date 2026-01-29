import { useState } from "react";
import Layout from "../components/Layout";
import { registerUser } from "../services/authService";

export default function Register() {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "student",
  });
  const [msg, setMsg] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

async function handleSubmit(e) {
  e.preventDefault();
  setMsg("");

  // ✅ Email format validation
  if (!emailRegex.test(form.email)) {
    setMsg("Please enter a valid email address");
    return;
  }

  if (form.password.length < 6) {
    setMsg("Password must be at least 6 characters");
    return;
  }

  const res = await registerUser(form);

  if (res.error) {
    setMsg(res.error);
  } else {
    setMsg("Registered successfully ✅");
  }
}


  return (
    <Layout>
      <h2>Create Account</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" onChange={handleChange} />
        <input name="email" placeholder="Email" onChange={handleChange} />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} />
        <select name="role" onChange={handleChange}>
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
          <option value="admin">Admin</option>
        </select>
        <button type="submit">Register</button>
      </form>
      {msg && <p>{msg}</p>}
    </Layout>
  );
}
