import { useState,React  } from "react";
import "./loginform.css";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import { Navbar } from "./Navbar";


export const Registeration = () => {

    const [usernameReg, setUsernameReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");
    Axios.defaults.withCredentials = true;
    const navigate = useNavigate();
    const register = () => {
      Axios.post("http://localhost:3001/register", {
        username: usernameReg,
        password: passwordReg,
      })
      .then(navigate('/login'));
    };

    return ( 
      <div >
      <div className="nav-none">
      < Navbar/> 
      </div>
      <div className="box">
      <div className="cover">
        <div className="registration">
          <h2 className="h2tag">Registration</h2>
          <label>Username</label>
          <input
            type="text"
            onChange={(e) => {
              setUsernameReg(e.target.value);
            }}
          />
          <label>Password</label>
          <input
            type="text"
            onChange={(e) => {
              setPasswordReg(e.target.value);
            }}
          />
          <button onClick={register}> Register </button>
        </div>
        </div>
        </div>
        </div>);
}

export default Registeration