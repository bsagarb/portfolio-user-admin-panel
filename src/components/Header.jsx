import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Header(){
  const { username } = useContext(AuthContext);

  return(
    <div className="header">

      <h3>Admin Dashboard: <span style={{color:'yellowgreen', fontSize:'30px'}}>{username}</span></h3>

      <p>Portfolio Manager</p>

    </div>
  )

}