import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import { useNavigate, useSearchParams } from "react-router-dom";
import ManagerSideBar from "./sidebar";

function ProjectEmployeeComponent() {
  const [project, setProject] = useState([]);
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const uid = localStorage.getItem('id');
    const mid = parseInt(uid, 10) + 1;

    axios.get(`http://localhost:5050/employeeproject/manager/${mid}`)
      .then(response => setProject(response.data))
      .catch(error => setMsg('Error in Fetching projects'));
  }, []);

  return (
    <Container className="mt-4">
      <h2 className="mb-4">Employee Projects</h2>
      {project.map((p, index) => (
        <Card key={index} className="mb-4">
          <Card.Body>
            <Card.Title>{p.project.title}</Card.Title>
            <Card.Text>
              <strong>Employee:</strong> {p.employee.name}<br />
              <strong>Description:</strong> {p.project.longDesc}<br />
              <strong>Start Date:</strong> {p.project.startDate}<br />
              <strong>End Date:</strong> {p.project.endDate}
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
      {project.length === 0 && (
        <div className="text-center mt-4">
          <p>No projects found for the manager.</p>
        </div>
      )}
      <Row className="mt-3">
        <Col className="text-center">
          <Button variant="primary" onClick={() => navigate('/post/employee/project')}>
            Add Employee to Project
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default ProjectEmployeeComponent;
