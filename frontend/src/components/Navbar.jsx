import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.logo}>
        EduVillage
      </Link>

      <div style={styles.links}>
        <Link style={styles.link} to="/">
          Home
        </Link>
        <Link style={styles.link} to="/login">
          Login
        </Link>
        <Link style={styles.link} to="/register">
  Register
</Link>

        <Link style={styles.link} to="/dashboard">
          Dashboard
        </Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "14px 20px",
    borderBottom: "1px solid #e5e7eb",
    backgroundColor: "#ffffff",
    position: "sticky",
    top: 0,
    zIndex: 10,
  },
  logo: {
    fontSize: "20px",
    fontWeight: "700",
    color: "#111111",
    textDecoration: "none",
  },
  links: {
    display: "flex",
    gap: "16px",
  },
  link: {
    textDecoration: "none",
    color: "#333",
    fontWeight: "500",
  },
};
