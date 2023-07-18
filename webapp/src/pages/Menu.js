import { Navbar } from "../Navbar";
import React from "react";
import "../App.css";
import { Footer } from "../components/Footer";
import { Date } from "../components/Date-time";
import { useEffect, useState } from "react";
import Axios from "axios";
import { Usermenu } from "./Usermenu";
import { Adminmenu } from "./Adminmenu";

export const Menu = () => {
  const style2 = {
    backgroundImage:
      "url('https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600')",
  };

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

  return (
    <div>
    {role === null && <Usermenu/>}
    {role === "admin" && <Adminmenu/>}
    </div>
  );
};
