import axios from "axios";
import { useEffect, useState } from "react";
import { Card, ListGroup, Nav } from "react-bootstrap";
import { useNavigate } from "react-router";

function ProjectDisplay(){
    const [projects, setProjects] = useState([]);
  const navigate = useNavigate();
  const [msg, setMsg] = useState("");

  useEffect(() => {
    const uid = localStorage.getItem("id");
    const eid = parseInt(uid, 10) + 1;

    axios
      .get("http://localhost:5050/project/getAll/employee/" + eid)
      .then((response) => setProjects(response.data))
      .catch((error) => setMsg("Error in Fetching projects"));
  }, []);
    return(
        <div className="container mt-4">
      <Card>
        <Card.Header className="bg-primary text-white">Projects</Card.Header>
        <ListGroup variant="flush">
          {projects.map((p, index) => (
            <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center">
              <Nav.Link onClick={() => navigate("/employee/backlog/sprint/tasks&pid="+p.id)}>
                {p.title}
              </Nav.Link>
              {/* You can add more details or actions here */}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card>
      <div className="mt-4">
        
      </div>
    </div>
    )
}
export default ProjectDisplay;