import { useEffect, useState } from "react";
import Axios from "axios";
import "../pages/Contact.css";
import { Navbar } from "../Navbar";
import {Footer}  from "../components/Footer"

export const Contact = () => {
  const [name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const [msgList, setmsgList] = useState([]);

  const addqueries = () => {
    Axios.post("http://localhost:3001/create", {
      name: name,
      Email: Email,
      msg: msg,
    }).then(() => {
      setmsgList([
        ...msgList,
        {
          name: name,
          Email: Email,
          msg: msg,
        },
      ]);
    });
  };

  useEffect( () => {
    Axios.get("http://localhost:3001/msg").then((response) => {
      setmsgList(response.data);
    });
  },[]);

  return (
    <div>

    <div className="nav">
       < Navbar/> 
     </div>
  
    <div className="contact-us">
      <div className="c-information">
        <h2 className="c-heading">Contact Us</h2>
        <div className="c-main-lable">
        <label className="c-lable">Full Name
        <input
          className="c-input"
          placeholder="eg. raja"
          type="text"
          onChange={(event) => {
            setName(event.target.value);
          }}
          />
        </label>
        <label className="c-lable">Email
        <input
          className="c-input"
          placeholder="eg. help@gmail.com"
          type="Email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          />
        </label>
          </div>
        <label className="c-lable-msg">Explain Queries
        <textarea
          className="c-input-msg"
          placeholder="please clear your dout"
          type="text"
          onChange={(event) => {
            setMsg(event.target.value);
          }}/>
        </label>
        <button onClick={addqueries} className="c-submit">Send</button>
      </div>  
    </div>
  <Footer/>

    </div>
  );
  };