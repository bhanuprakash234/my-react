import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { useNavigate } from "react-router";

function TasksByEmployee() {
  const [tasks, setTasks] = useState([]);
  const uid = localStorage.getItem('id');
  const eid = parseInt(uid, 10) + 1;
  const navigate=useNavigate();

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get('http://localhost:5050/task/employee/' + eid);
        setTasks(response.data); // Assuming data is an array of tasks
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, [eid]);

  return (
    <div className="container mt-4">
      <h2>Tasks Assigned to You</h2>
      {tasks.map((task) => (
        <Card key={task.id} className="mb-3">
          <Card.Body>
            <div className="d-flex justify-content-between" onClick={()=>navigate('/employee/task&tid='+task.id)} >
              <div>
                <strong>Title:</strong> {task.title}
              </div>
              <div>
                <strong>Assigned to:</strong> {task.employee.name}
              </div>
              <div className={task.status === 'red' ? 'red-text' : ''} >
                <strong>Status:</strong> {task.status}
              </div>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default TasksByEmployee;
