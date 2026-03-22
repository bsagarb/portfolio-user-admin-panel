import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import axios from "../utils/axiosInstance";

export default function Skills() {
  const [skillsInput, setSkillsInput] = useState("");
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetchSkills();
  }, []);

  const fetchSkills = async () => {
    const res = await axios.get("/skills");

    if (res.data.length > 0) {
      setSkills(res.data[0].skills);
      setSkillsInput(res.data[0].skills.join(", "));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const skillArray = skillsInput.split(",").map((s) => s.trim());

    await axios.put("/skills", {
      skills: skillArray,
    });

    setSkills(skillArray);

    alert("Skills Updated");
  };

  return (
    <Layout>
      <div className="card">
        <h2>Update Skills</h2>

        <form onSubmit={handleSubmit}>
          <textarea style={{height:'100px'}}
            value={skillsInput}
            onChange={(e) => setSkillsInput(e.target.value)}
            placeholder="React, Node, MongoDB"
          />

          <button>Save Skills</button>
        </form>
      </div>

      <div className="card">
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
