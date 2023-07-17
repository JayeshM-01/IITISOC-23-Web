import { Navbar } from "../Navbar";
import { useEffect, useState } from "react";
import Axios from "axios";
import "../pages/menu.css";

export const Userpage = () => {
  const [d, setd] = useState([]);
  const [n, setn] = useState([]);
  
  
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
     <div className="nav-none">
       < Navbar/> 
     </div>
     <div className="consellers">
     <h2 className="h-mainheading">HISTORY</h2>
      <div className="c-querie">
        
        {d.map((val, key) => {
          if(val.name===n){
            return (<div>
            <div>{val.name}</div>
            <div>{val.date}</div>
            <div>{val.time}</div>
            </div>
            );
          }
        })}
      </div> 
      </div>  
    </div>

    );
}
export default Userpage
