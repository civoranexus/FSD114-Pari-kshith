import Layout from "../components/Layout";

export default function Login() {
  return (
    <Layout>
      <h2 style={{ marginBottom: "16px" }}>Login</h2>

      <form style={styles.form}>
        <label style={styles.label}>Email</label>
        <input style={styles.input} type="email" placeholder="Enter email" />

        <label style={styles.label}>Password</label>
        <input style={styles.input} type="password" placeholder="Enter password" />

        <button style={styles.button} type="button">
          Login
        </button>
      </form>

      <p style={styles.note}>
        (Backend login will be connected later ✅)
      </p>
    </Layout>
  );
}

const styles = {
  form: {
    maxWidth: "450px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    padding: "16px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    backgroundColor: "#fff",
  },
  label: {
    fontWeight: "600",
    fontSize: "14px",
  },
  input: {
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    outline: "none",
  },
  button: {
    padding: "10px",
    borderRadius: "8px",
    border: "none",
    fontWeight: "700",
    cursor: "pointer",
    marginTop: "8px",
  },
  note: {
    marginTop: "12px",
    color: "#666",
    fontSize: "14px",
  },
};
