import { useState } from "react";
import Layout from "../components/Layout";
import { loginUser } from "../services/authService";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [msg, setMsg] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
  e.preventDefault();
  setMsg("");

  const res = await loginUser(form);

  if (res.error) {
    setMsg(res.error);   // ❌ show error
    return;
  }

  // ✅ Only store token if success
  localStorage.setItem("token", res.token);
  localStorage.setItem("role", res.user.role);
  setMsg("Login successful ✅");
  localStorage.setItem("token",data.token);
  localStorage.setItem("role", data.user.role);

}


  return (
    <Layout>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input name="email" placeholder="Email" onChange={handleChange} />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} />
        <button type="submit">Login</button>
      </form>
      {msg && <p>{msg}</p>}
    </Layout>
  );
}
