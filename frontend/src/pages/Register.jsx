import { useState } from "react";
import Layout from "../components/Layout";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "student",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert(
      `Registered (UI only)\nName: ${form.name}\nEmail: ${form.email}\nRole: ${form.role}`
    );
  }

  return (
    <Layout>
      <h2 style={{ marginBottom: "14px" }}>Create Account</h2>

      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>Full Name</label>
        <input
          style={styles.input}
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Enter your name"
          required
        />

        <label style={styles.label}>Email</label>
        <input
          style={styles.input}
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
        />

        <label style={styles.label}>Password</label>
        <input
          style={styles.input}
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Create a password"
          required
        />

        <label style={styles.label}>Select Role</label>
        <select
          style={styles.input}
          name="role"
          value={form.role}
          onChange={handleChange}
        >
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
          <option value="admin">Admin</option>
        </select>

        <button style={styles.button} type="submit">
          Register
        </button>

        <p style={styles.note}>
          (Backend registration will be connected later ✅)
        </p>
      </form>
    </Layout>
  );
}

const styles = {
  form: {
    maxWidth: "480px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    padding: "16px",
    border: "1px solid #ddd",
    borderRadius: "12px",
    backgroundColor: "#fff",
  },
  label: {
    fontWeight: "600",
    fontSize: "14px",
  },
  input: {
    padding: "10px 12px",
    borderRadius: "10px",
    border: "1px solid #ccc",
    outline: "none",
  },
  button: {
    padding: "10px",
    borderRadius: "10px",
    border: "none",
    backgroundColor: "#111",
    color: "#fff",
    fontWeight: "700",
    cursor: "pointer",
    marginTop: "8px",
  },
  note: {
    marginTop: "10px",
    fontSize: "14px",
    color: "#666",
  },
};
