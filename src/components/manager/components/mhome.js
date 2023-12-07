import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import { Card, ListGroup, Nav } from "react-bootstrap";

function ManagerHomeComponent(props) {
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();
  const uid = localStorage.getItem("id");
  const mid = parseInt(uid, 10) + 1;
  

  useEffect(() => {
   

  

    axios.get(`http://localhost:5050/project/getAll/manager/${mid}`)
      .then((response) => setProjects(response.data))
      .catch((error) => console.error("Error in Fetching projects:", error));
  }, [mid]);

  

  return (
    <div className="container mt-4">
      <Card>
        <Card.Header className="bg-primary text-white">Projects</Card.Header>
        <ListGroup variant="flush">
          {projects.map((p, index) => (
            <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center">
              <Nav.Link onClick={() => navigate("/backlog/sprint/tasks&pid=" + p.id)}>{p.title}</Nav.Link>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card>
      <div className="mt-4">
        <button className="btn btn-primary" onClick={() => navigate("/post/project")}>
          Add Project
        </button>
      </div>
    </div>
  );
}

export default ManagerHomeComponent;
