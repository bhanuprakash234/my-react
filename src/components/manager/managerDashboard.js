import { useState } from "react";
import { Button, Container, Form, Nav, NavDropdown, Navbar, ProgressBar, Toast } from "react-bootstrap";
import ManagerNavbar from "./components/mNavbar";
import ManagerHomeComponent from "./components/mhome";
import { useSearchParams } from "react-router-dom";
import ManagerEmployeeComponent from "./components/employeecomp";
import ProjectEmployeeComponent from "./components/projectcomp";
import ManagerSideBar from "./components/sidebar";
function ManagerDashboard(){
    const[username,setUsername]=useState('');
    const[show,setShow]=useState('');
    const [param] = useSearchParams();
       const process = ()=>{
      if(!param.get('page')){
          return  <div>
           <ManagerHomeComponent  />
      </div>
      }
      if(param.get('page') === 'home'){
           
          return <div>
              <ManagerHomeComponent />
          </div>
      }
      if(param.get('page') === 'employees'){
          return <div>
              <ManagerEmployeeComponent />
          </div>
      }
      if(param.get('page') === 'project'){
        return <div>
            <ProjectEmployeeComponent />
        </div>
    }
    }
    return(
        <div>
            <ManagerNavbar  />
            {process()} 
        

        </div>
    );
}
export default ManagerDashboard;