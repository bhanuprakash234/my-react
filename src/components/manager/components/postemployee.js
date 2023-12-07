import './PostEmployee.css';
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";

function PostEmployee(){
    const [name,setName] = useState('');
      
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [manager,setManager] = useState('');
    const [email,setEmail] = useState('');
    const [jobTitle,setJobTitle] = useState('');
    

    const [msg,setMsg] = useState('');
    const navigate = useNavigate();
    const AddEmployee=()=>{
        let employeeObj = {
            "name":name,
            "jobTitle":jobTitle,
            
            "user":{
               "username":username,
               "password":password,
               "email":email
            }
        }
        //console.log(JSON.stringify(customerObj))
        const uid = localStorage.getItem('id')
        
        
        const mid = parseInt(uid, 10) + 1;

        axios.post('http://localhost:5050/employee/add/'+mid,employeeObj)
        .then(response=>{
            setManager(response.data)
            navigate('/manager/dashboard?page=employees&msg="signup success"')
        })
        .catch(function(error){
            setMsg("Issue in processing in signup")
        });
    }

    return(
        <div >
             <div className="container mt-4">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <div className="card">
              
              <div className="card-body">
                {msg !== "" ? (
                  <div className="alert alert-danger" role="alert">
                    {msg}
                  </div>
                ) : (
                  ""
                )}
                <div className="row " style={{ textAlign: "right" }}>
                    
                  {/* Read Name */}
                  <div className="col-md-6">
                    <label>Enter Name:</label>
                  </div>
                  <div className="col-md-6 mb-4">
                    <input
                      type="text"
                      className="form-control"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="col-md-6">
                    <label>Enter JobTitle:</label>
                  </div>
                  <div className="col-md-6 mb-4">
                    <input
                      type="text"
                      className="form-control"
                      onChange={(e) => setJobTitle(e.target.value)}
                    />
                  </div>
                  

                  
                  <div className="col-md-6">
                    <label>Enter Email:</label>
                  </div>
                  <div className="col-md-6 mb-4">
                    <input
                      type="email"
                      className="form-control"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="col-md-6">
                    <label>Enter Username:</label>
                  </div>
                  <div className="col-md-6 mb-4">
                    <input
                      type="username"
                      className="form-control"
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row" style={{ textAlign: "right" }}>
                  <div className="col-md-6">
                    <label>Enter Password:</label>
                  </div>
                  <div className="col-md-6">
                    <input
                      type="password"
                      className="form-control"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="card-footer" style={{ textAlign: "center" }}>
                <button className="btn btn-primary" onClick={() => AddEmployee()} >
                  Add Employee
                </button>
              </div>
            </div>
           
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
      <br /><br /><br /><br /><br />
      
        </div>
            

                
    )
}

export default PostEmployee;