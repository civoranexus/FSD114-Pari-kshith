import { useEffect, useState } from "react";
import axios from "axios";

export default function AdminAnalytics() {
  const [data, setData] = useState(null);

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    const token = localStorage.getItem("token");

    const res = await axios.get(
      "http://localhost:5000/api/admin/analytics",
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    setData(res.data);
  };

  if (!data) return <h3>Loading analytics...</h3>;

  return (
    <div>
      <h2>Admin Analytics</h2>

      <h3>Users by Role</h3>
      {data.users_by_role.map(r => (
        <div key={r.role}>
          {r.role}: {r.count}
        </div>
      ))}

      <h3>Total Courses: {data.total_courses}</h3>
      <h3>Total Enrollments: {data.total_enrollments}</h3>
      <h3>Total Quiz Attempts: {data.total_quiz_attempts}</h3>
    </div>
  );
}
