import axios from "axios";
import { API_BASE } from "../config/api";
export const downloadCertificate = async (courseId) => {
  const token = localStorage.getItem("token");

  const res = await axios.get(
    `${API_BASE}/api/progress/...`,
    {
      headers: {
        Authorization: `Bearer ${token}`
      },
      responseType: "blob"
    }
  );

  const url = window.URL.createObjectURL(new Blob([res.data]));
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", "certificate.pdf");
  document.body.appendChild(link);
  link.click();
};
