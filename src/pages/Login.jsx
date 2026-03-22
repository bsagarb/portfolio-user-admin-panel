import { useState, useContext } from "react";
import axios from "../utils/axiosInstance";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useContext(AuthContext);
  

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await axios.post("/auth/login", { email, password });

    login(res.data.token, res.data.role,res.data.username);

    navigate("/dashboard");
  };

  return (
    <div className="page">
      <div className="card" style={{ maxWidth: "400px", margin: "auto" }}>
        <h2>Admin Login</h2>

        <form onSubmit={handleSubmit}>
          <input
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}
