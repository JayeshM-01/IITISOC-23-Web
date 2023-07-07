import { useState,React  } from "react";
import "./loginform.css";
import { useNavigate } from "react-router-dom";
import Axios from "axios";


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
      <div className="cover">
        <div className="registration">
          <h1>Registration</h1>
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
        </div>);
}

export default Registeration