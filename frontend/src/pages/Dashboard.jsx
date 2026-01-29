import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { getProtected } from "../services/authService";

export default function Dashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    getProtected(token).then(setData);
  }, []);

  return (
    <Layout>
      <h2>Dashboard</h2>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Login to see protected data</p>
      )}
    </Layout>
  );
}
