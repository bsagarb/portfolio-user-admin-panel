import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import axios from "../utils/axiosInstance";

export default function Profile() {
  const [profile, setProfile] = useState({});
  const [image, setImage] = useState(null);
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    jobrole: "",
    roleDesc: "",
    mainDesc: "",
  });

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    const res = await axios.get("/profile");
    if (res.data) {
      setProfile(res.data.profile);
      setForm({
        firstname: res.data.profile.firstname || "",
        lastname: res.data.profile.lastname || "",
        jobrole: res.data.profile.jobrole || "",
        roleDesc: res.data.profile.roleDesc || "",
        mainDesc: res.data.profile.mainDesc || "",
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) {
      return alert("Please uplaod Profile image");
    }
    const data = new FormData();

    data.append("firstname", form.firstname);
    data.append("lastname", form.lastname);
    data.append("jobrole", form.jobrole);
    data.append("roleDesc", form.roleDesc);
    data.append("mainDesc", form.mainDesc);
    data.append("image", image);

    await axios.put("/profile", data);

    alert("Profile Details Updated");
  };

  return (
    <Layout>
      <div className="card">
        <h2>Profile Information</h2>

        <form onSubmit={handleSubmit}>
          <input
            placeholder="FisrtName"
            value={form.firstname}
            onChange={(e) => setForm({ ...form, firstname: e.target.value })}
          />
          <input
            placeholder="LastName"
            value={form.lastname}
            onChange={(e) => setForm({ ...form, lastname: e.target.value })}
          />

          <input
            placeholder="JobRole"
            value={form.jobrole}
            onChange={(e) => setForm({ ...form, jobrole: e.target.value })}
          />

          <input
            placeholder="Role Description"
            value={form.roleDesc}
            onChange={(e) => setForm({ ...form, roleDesc: e.target.value })}
          />

          <input
            placeholder="Main Description"
            value={form.mainDesc}
            onChange={(e) => setForm({ ...form, mainDesc: e.target.value })}
          />

          <input type="file" onChange={(e) => setImage(e.target.files[0])} />

          <button>Save</button>
        </form>
      </div>
    </Layout>
  );
}
