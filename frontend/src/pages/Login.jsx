import Navbar from "../components/Navbar";

export default function Login() {
  return (
    <div>
      <Navbar />

      <div style={styles.container}>
        <h2 style={styles.title}>Login</h2>

        <form style={styles.form}>
          <label style={styles.label}>Email</label>
          <input style={styles.input} type="email" placeholder="Enter email" />

          <label style={styles.label}>Password</label>
          <input
            style={styles.input}
            type="password"
            placeholder="Enter password"
          />

          <button style={styles.button} type="button">
            Login
          </button>
        </form>

        <p style={styles.note}>
          (Backend login will be connected later ✅)
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "450px",
    margin: "0 auto",
    padding: "30px 18px",
  },
  title: {
    marginBottom: "16px",
  },
  form: {
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
