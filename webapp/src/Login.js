import "./loginform.css";
import { useState,useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";
import {Navbar} from "./Navbar";



export const Login = () => {
    const [loginStatus, setLoginStatus] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    Axios.defaults.withCredentials = true;
    const navigate = useNavigate();

    const login = () => {
        Axios.post("http://localhost:3001/login", {
          username: username,
          password: password,
        }).then((response) => {
          if (response.data.message) {
            setLoginStatus(response.data.message);
          } else {
            setLoginStatus(response.data[0].username);
            navigate("/");
          }
        });
      };
    
      useEffect(() => {
        Axios.get("http://localhost:3001/login").then((response) => {
          if (response.data.loggedIn === true) {
            setLoginStatus(response.data.user[0].username);
          } else{
            setLoginStatus("");
          }
        });
      }, []);

    return (
      <div>
      <div className="nav-none">
      < Navbar/> 
      </div>
      <div className="box">
        <div className="cover">
            <div className="login ">
            <h2 className="h2tag">Login</h2>
            <input className="input"
              type="text"
              placeholder="Username..."
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <input className="input"
              type="password"
              placeholder="Password..."
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <Link to="/register">Register </Link>
            <button className="reglog" onClick={login}> Login </button>
          </div>
          
    
          <h3>{loginStatus}</h3>
            
        </div>
        </div>
        </div>
    )
}

export default Login

