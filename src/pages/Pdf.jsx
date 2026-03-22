import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import axios from "../utils/axiosInstance";

export default function Pdf() {
  const [rName, setRname] = useState("");
  const [rLink, setRlink] = useState("");
  const [pdfData, setPdfData] = useState(null);

  useEffect(() => {
    fetchPdf();
  }, []);

  const fetchPdf = async () => {
    try {
      const res = await axios.get("/pdf");
      if (res.data) {
        setPdfData(res.data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();

    if (!rName || !rLink) return alert("please upload details");

    // const data = new FormData();
    // data.append("file", file);

    try {
      await axios.post("/pdf", {rName,rLink});
      alert("Details updated");
      fetchPdf();
    } catch (err) {
      console.error(err);
      alert("Upload failed");
    }
  };

  return (
    <Layout>
      <div className="card">
        <h2>Upload Resume PDF</h2>
       <form onSubmit={handleUpload}>
          <input
            placeholder="Resume name"
            onChange={(e) => setRname(e.target.value)}
          />

          <input
            type="text"
            placeholder="Resume Link"
            onChange={(e) => setRlink(e.target.value)}
          />

          <button type="submit">Update</button>
        </form>
      </div>

      {pdfData && (
  <div className="card">
    {/* <h3>{pdfData.fileName}</h3>

    <iframe
      src={pdfData.fileUrl}
      title="Resume Preview"
      width="100%"
      height="600px"
      style={{ border: "1px solid #ccc", borderRadius: "8px" }}
    ></iframe> */}
      <button><a href={pdfData.fileUrl} target="_blank" rel="noopener noreferrer">
      View Resume
    </a></button>

    
  </div>
)}
    </Layout>
  );
}