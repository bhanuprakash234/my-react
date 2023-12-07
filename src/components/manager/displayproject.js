import './styles.css';
import axios from "axios";
import { useEffect, useState } from "react";
import { Card, CardHeader, ListGroup, ListGroupItem, Nav } from "react-bootstrap";
import { useNavigate } from "react-router";

function DisplayProject() {
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();
  const [msg, setMsg] = useState('');

  useEffect(() => {
    const uid = localStorage.getItem('id');
    const mid = parseInt(uid, 10) + 1;

    axios.get(`http://localhost:5050/project/getAll/${mid}`)
      .then(response => setProjects(response.data))
      .catch(error => setMsg('Error in Fetching projects'));
  }, []);

  return (
    <div className="display-project-container">
      <Card
        style={{
          width: "18rem",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
          margin: "0 auto", // Center-align the card
        }}
      >
        <CardHeader style={{ background: "#3498db", color: "white" }}>Projects</CardHeader>
        <ListGroup >
              {projects.map((p, index) => (
              <div key={index} >
                 <ListGroupItem> 
                         <Nav.Link onClick={()=>navigate('/backlog/sprint/tasks&pid='+p.id)}> {p.title}</Nav.Link>
                </ListGroupItem>
              </div>
            ))}
              </ListGroup>
      </Card>
      <br />
      <button
        className="btn btn-success add-project-btn" // Change color to green
        onClick={() => navigate('/post/project')}
      >
        Add Project
      </button>
    </div>
  );
}

export default DisplayProject;
