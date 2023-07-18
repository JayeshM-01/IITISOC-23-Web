import { useEffect, useState } from "react";
import Axios from "axios";
import "../pages/Contact.css";
import { Navbar } from "../Navbar";
import {Footer}  from "../components/Footer"
import { Usercontact } from "./Usercontact";
import { Admincontact } from "./Admincontact";

export const Contact = () => {
  const [name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [msgList, setmsgList] = useState([]);
  const [role,setRole] = useState("");

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

  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response) => {
      if (response.data.loggedIn === true) {
        setRole(response.data.user[0].role);
      } else {
        setRole("");
      }
    });
  },[]);

  return (
    <div>
      {role === null && <Usercontact/>}
      {role === "admin" && <Admincontact/>}
    </div>
  );
  };