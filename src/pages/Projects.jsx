import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import axios from "../utils/axiosInstance";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [form, setForm] = useState({
    name: "",
    type: "graphic",
    link: "",
  });

  const [image, setImage] = useState(null);

  const fetchProjects = async () => {
    const res = await axios.get("/projects");
    setProjects(res.data);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();

    data.append("name", form.name);
    data.append("type", form.type);
    data.append("link", form.link);
    data.append("image", image);

    await axios.post("/projects", data);
    alert("project added succussfully")
    fetchProjects();
  };

  const handleDelete = async (id) => {
    await axios.delete(`/projects/${id}`);
    fetchProjects();
  };

  return (
    <Layout>
      <div className="card">
        <h2>Add Project</h2>

        <form onSubmit={handleSubmit}>
          <input
            placeholder="Project Name"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <select onChange={(e) => setForm({ ...form, type: e.target.value })}>
            <option value="graphic">Graphic</option>
            <option value="uiux">UI/UX</option>
          </select>

          <input
            placeholder="Project Link"
            onChange={(e) => setForm({ ...form, link: e.target.value })}
          />

          <input type="file" onChange={(e) => setImage(e.target.files[0])} />

          <button>Add Project</button>
        </form>
      </div>

      {projects.map((p) => (
        <div key={p._id} className="card">
          <img src={p.imageUrl} width="200" />
          <h3>Project Name: {p.name}</h3>
          <p>Projecttype: {p.type}</p>
          <p>Project Link: {p.projectLink}</p>
          <button onClick={() => handleDelete(p._id)}>Delete</button>
        </div>
      ))}
    </Layout>
  );
}
