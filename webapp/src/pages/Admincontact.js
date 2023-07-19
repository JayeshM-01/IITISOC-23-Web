import { Navbar } from "../Navbar";
import {Footer}  from "../components/Footer"
import { useEffect, useState } from "react";
import Axios from "axios";
import "./Admincontact.css"

export const Admincontact = () =>{

    const [msgList, setmsgList] = useState([]);

    useEffect( () => {
      Axios.get("http://localhost:3001/msg").then((response) => {
        setmsgList(response.data);
      });
    },[]);
  
    const deleteMsg = (id) => {
      Axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
        setmsgList(
          msgList.filter((val) => {
            return val.id != id;
          })
        );
      });
    };

    return (
        <div>
        <div className="nav">
         < Navbar/> 
       </div>
       <div className="consellers">
      <h2 className="h-mainheading">HISTORY</h2>
      <div className="c-querie">
        {msgList.map((val, key) => {
          return (
            <div className="c-queries">
              <div>
              <li className="c-queries-li">Name :<h3 className="c-queries-ipt"> {val.name}</h3></li> 
              <li className="c-queries-li">Email :<h3 className="c-queries-ipt"> {val.Email}</h3></li> 
              <li className="c-queries-li">Message :<h3 className="c-queries-ipt"> {val.msg}</h3></li> 
              </div>
              <button className="c-d-btn" onClick={() => {deleteMsg(val.id);}}>
                  Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>

           

        <Footer/>

        </div>
    );
}