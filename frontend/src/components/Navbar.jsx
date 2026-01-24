export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>EduVillage</div>

      <div style={styles.links}>
        <a style={styles.link} href="/">Home</a>
        <a style={styles.link} href="/login">Login</a>
        <a style={styles.link} href="/dashboard">Dashboard</a>
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
    borderBottom: "1px solid #223",
    backgroundColor: "#111a2e",
    position: "sticky",
    top: 0,
    zIndex: 10,
  },
  logo: {
    fontSize: "20px",
    fontWeight: "700",
    color: "#e6e6e6",
  },
  links: {
    display: "flex",
    gap: "16px",
  },
  link: {
    textDecoration: "none",
    color: "#e6e6e6",
    fontWeight: "500",
  },
};
