import "./loginform.css";
import { useState,useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";



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
          }
        });
      }, []);

    return (
        <div className="cover">
            <div className="login">
            <h1>Login</h1>
            <input
              type="text"
              placeholder="Username..."
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <input
              type="password"
              placeholder="Password..."
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <Link to="/register">Register </Link>
            <button onClick={login}> Login </button>
          </div>
          
    
          <h1>{loginStatus}</h1>
            
        </div>
    )
}

export default Login

