import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <main style={styles.main}>{children}</main>
    </div>
  );
}

const styles = {
  main: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "20px",
  },
};
