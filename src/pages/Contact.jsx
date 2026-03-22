import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import axios from "../utils/axiosInstance";

export default function Contact() {
  const [form, setForm] = useState({
    phone: "",
    email: "",
    linkedin: "",
    github: "",
    location: "",
  });

  useEffect(() => {
    fetchContact();
  }, []);

  const fetchContact = async () => {
    const res = await axios.get("/contact");
    if (res.data) {
      setForm(res.data);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.put("/contact", form);

    alert("Contact Updated");
  };

  return (
    <Layout>
      <div className="card">
        <h2>Contact Information</h2>

        <form onSubmit={handleSubmit}>
          <input
            placeholder="Phone"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />

          <input
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <input
            placeholder="LinkedIn"
            value={form.linkedin}
            onChange={(e) => setForm({ ...form, linkedin: e.target.value })}
          />

          <input
            placeholder="Github"
            value={form.github}
            onChange={(e) => setForm({ ...form, github: e.target.value })}
          />

          <input
            placeholder="Location"
            value={form.location}
            onChange={(e) => setForm({ ...form, location: e.target.value })}
          />

          <button>Save</button>
        </form>
      </div>
    </Layout>
  );
}
