import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import axios from "../utils/axiosInstance";

export default function Experience() {
  const [data, setData] = useState([]);

  const [form, setForm] = useState({
    title: "",
    company: "",
    duration: "",
    description: "",
  });

  const fetchData = async () => {
    const res = await axios.get("/experience");
    setData(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post("/experience", {
      ...form,
      description: form.description.split(";"),
    });

    setForm({ title: "", company: "", duration: "", description: "" });
    fetchData();
  };

  const handleDelete = async (id) => {
    await axios.delete(`/experience/${id}`);
    fetchData();
  };

  return (
    <Layout>
      <div className="card">
        <h2>Add Experience</h2>

        <form onSubmit={handleSubmit}>
          <input
            placeholder="Title"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />

          <input
            placeholder="Company"
            value={form.company}
            onChange={(e) => setForm({ ...form, company: e.target.value })}
          />

          <input
            placeholder="Duration"
            value={form.duration}
            onChange={(e) => setForm({ ...form, duration: e.target.value })}
          />

          <textarea
            placeholder="Descriptions semi-column separated"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
          />
           
          <button>Add Experience</button>
        </form>
      </div>

      {data.map((item) => (
        <div key={item._id} className="card">
          <h3>{item.title}</h3>
          <p>{item.company}</p>
          <p>{item.duration}</p>
          <p>{item.description.map((desc)=>(
            <li>{desc}</li>
          ))}</p>

          <button onClick={() => handleDelete(item._id)}>Delete</button>
        </div>
      ))}
    </Layout>
  );
}
