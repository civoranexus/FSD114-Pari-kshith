import axios from "axios";

export const downloadCertificate = async (courseId) => {
  const token = localStorage.getItem("token");

  const res = await axios.get(
    `http://localhost:5000/api/certificate/course/${courseId}`,
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
