import { Link,useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";


export default function Sidebar() {
  const { role, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="sidebar">
      <h2>Portfolio Admin</h2>

      <Link to="/dashboard">Dashboard</Link>
      <Link to="/experience">Experience</Link>
      <Link to="/skills">Skills</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/pdf">PDF</Link>
      <Link to="/about">About</Link>
      <Link to="/profile">Profile</Link>

      {role === "superadmin" && <Link to="/users">Users</Link>}

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
