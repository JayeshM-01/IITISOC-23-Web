import { useEffect, useState } from "react";
import Axios from "axios";
import "../pages/menu.css";
import {Useruserpage} from "./Useruserpage";
import { Adminuserpage } from "./Adminuserpage";

export const Userpage = () => {
  const [d, setd] = useState([]);
  const [n, setn] = useState([]);
  const [role,setRole] = useState("");


  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response) => {
      if (response.data.loggedIn === true) {
        setRole(response.data.user[0].role);
      } else {
        setRole("");
      }
    });
  },[]);
  
  useEffect( () => {
    Axios.get("http://localhost:3001/getdt").then((response) => {
      setd(response.data);
    });
  },[]);
  
  useEffect( ()=>{
    Axios.get("http://localhost:3001/login").then((response) => {
      console.log(response.data.user[0].username);
      setn(response.data.user[0].username);
      // d.filter(v => v.name!==(response.data.username));
    });
  },[])
   
    return (

    <div>
    {role === null && <Useruserpage/>}
    {role === "admin" && <Adminuserpage/>}
    </div>

    );
}
export default Userpage
