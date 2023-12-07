import axios from "axios";
import { useEffect, useState } from "react";
import { Card, CardHeader, ListGroup, ListGroupItem, Nav } from "react-bootstrap";
import { useNavigate } from "react-router";

function ManagerSideBar(){
    const[projects,setProjects]= useState([]);
    const navigate = useNavigate();
    const[msg,setMsg]=useState('');

    useEffect(()=>{
        const uid = localStorage.getItem('id')
        
        
        const mid = parseInt(uid, 10) + 1;

        console.log(mid)
        
        axios.get('http://localhost:5050/project/getAll/'+mid)
        
        .then(response=>setProjects(response.data))
        .catch(error=> setMsg('Error in Fetching projects'));
    },[],)
    return(
        <div >
            <Card
              style={{
                width: "18rem",
              }}
            >
              <CardHeader>Projects</CardHeader>
              <ListGroup >
              {projects.map((p, index) => (
              <div key={index} >
                 <ListGroupItem> 
                         <Nav.Link onClick={()=>navigate('/manager/dashboard?page=home&pid='+p.id)}> {p.title}</Nav.Link>
                </ListGroupItem>
              </div>
            ))}
              </ListGroup>
            </Card>
            <br />
            <button className="btn btn-primary" onClick={()=>navigate('/post/project')}>Add Project</button>


        </div>
    )
}
export default ManagerSideBar;