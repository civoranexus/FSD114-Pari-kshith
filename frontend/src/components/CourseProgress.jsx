import { useEffect, useState } from "react";
import { getCourseProgress } from "../services/progressService";
import ProgressBar from "../components/ProgressBar";

export default function CourseProgress({ courseId }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    const data = await getCourseProgress(courseId);
    setProgress(data.progress_percent);
  };

  return (
    <div>
      <h3>Course Progress</h3>
      <ProgressBar percent={progress} />
    </div>
  );
}
