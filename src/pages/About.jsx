import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import axios from "../utils/axiosInstance";

export default function About() {
  const [form, setForm] = useState({
    desc: "",
    class: "",
    university: "",
    company: "",
    designation: "",
    address: "",
    workmodel: "",
  });

  useEffect(() => {
    fetchAbout();
  }, []);

  const fetchAbout = async () => {
    const res = await axios.get("/about");
    if (res.data) {
      setForm(res.data);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.put("/about", form);

    alert("About Details Updated");
  };

  return (
    <Layout>
      <div className="card">
        <h2>About Information</h2>

        <form onSubmit={handleSubmit}>
          <textarea
            placeholder="Description about you"
            value={form.desc}
            onChange={(e) => setForm({ ...form, desc: e.target.value })}
          />
          <input
            placeholder="Class"
            value={form.class}
            onChange={(e) => setForm({ ...form, class: e.target.value })}
          />

          <input
            placeholder="University"
            value={form.university}
            onChange={(e) => setForm({ ...form, university: e.target.value })}
          />

          <input
            placeholder="Company"
            value={form.company}
            onChange={(e) => setForm({ ...form, company: e.target.value })}
          />

          <input
            placeholder="Designation"
            value={form.designation}
            onChange={(e) => setForm({ ...form, designation: e.target.value })}
          />

          <input
            placeholder="Address"
            value={form.address}
            onChange={(e) => setForm({ ...form, address: e.target.value })}
          />

          <input
            placeholder="Work-Model"
            value={form.workmodel}
            onChange={(e) => setForm({ ...form, workmodel: e.target.value })}
          />

          <button>Save</button>
        </form>
      </div>
    </Layout>
  );
}
