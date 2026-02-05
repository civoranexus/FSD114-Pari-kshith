import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCourseById } from "../services/courseService";
import Layout from "../components/Layout";
import { enrollCourse } from "../services/studentService";
import Loading from "../components/Loading";
import { useNavigate } from "react-router-dom";
import {apiSafe} from "../utils/apiSafe";
export default function CourseDetails() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const nav=useNavigate();
  useEffect(() => {
    load();
  }, [id]);

  const load = async () => {
    const data = await getCourseById(id);
    setCourse(data);
  };

  if (!course) return <Loading/>;

  return (
    <Layout>
      <h2>{course.title}</h2>
      <p>{course.description}</p>
      <button onClick={async () => {
    apiSafe(() => enrollCourse(course.id));
    nav("/dashboard");
  }}>Enroll</button>
    </Layout>
  );
}