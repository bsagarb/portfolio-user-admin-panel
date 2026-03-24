import { useState, useContext } from "react";
import axios from "../utils/axiosInstance";
// import { AuthContext } from "../context/AuthContext";
// import { useNavigate } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("/auth/register", {
        email,
        password,
        username,
      });

      alert(res.data.message);
    } catch (err) {
      console.log(err.response?.data);
      alert(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="page">
      <div className="card" style={{ maxWidth: "400px", margin: "auto" }}>
        <h2>Admin register</h2>

        <form onSubmit={handleSubmit}>
          <input
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}
