import axios from "axios";
import { useEffect, useState } from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate, useSearchParams } from "react-router-dom";

function ManagerEmployeeComponent() {
  const [param] = useSearchParams();
  const [employees, setEmployees] = useState([]);
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const uid = localStorage.getItem('id');
    const mid = parseInt(uid, 10) + 1;

    axios.get(`http://localhost:5050/employee/manager/${mid}`)
      .then(response => {
        console.log(response.data);
        setEmployees(response.data);
      })
      .catch(error => {
        setMsg('Error in Fetching employees');
      });
  }, []);

  return (
    <Container fluid className="mt-4">
      <Row>
        {employees.map((employee, index) => (
          <Col key={index} lg={4} md={6} sm={12} className="mb-3">
            <Card style={{ backgroundColor: '#f0f0f0' }}>
              <Card.Body>
                <Card.Title>{employee.name}</Card.Title>
                <Card.Text>{employee.jobTitle}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Row className="mt-3">
        <Col>
          <Button variant="primary" onClick={() => navigate('/employee/post')}>
            Add Employee
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default ManagerEmployeeComponent;
