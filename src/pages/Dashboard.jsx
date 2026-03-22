import Layout from "../components/Layout";

export default function Dashboard() {
  return (
    <Layout>
      <div className="card">
        <h2>Welcome to Portfolio Admin</h2>

        <p>From here you can manage:</p>

        <ul>
          <li>Experience</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Contact Information</li>
          <li>PDF Resume</li>
        </ul>
      </div>
    </Layout>
  );
}
