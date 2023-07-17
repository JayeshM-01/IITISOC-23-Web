import { Link,useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import {React} from "react";
import Axios from "axios";

export const Navbar = () => {
  const [extendNav,setExtendNav] = useState(false);
  const showNavbar = () => {
    setExtendNav(!extendNav);
  }
  const navigate = useNavigate();
  const [username,setUsername] = useState("");
  const [userPresent,setUserPresent] = useState(false);
  Axios.defaults.withCredentials = true;
  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response) => {
      if (response.data.loggedIn === true) {
        setUsername(response.data.user[0].username);
        setUserPresent(true);
      } else {
        setUsername("");
        setUserPresent(false);
      }
    });
  },[]);

  const logout = () => {
    Axios.delete("http://localhost:3001/logout",{})
    .then((response) => {
      setUsername("");
      setUserPresent(false);
      navigate("/login");
    });
  };

  return (
    <div className="text">
    <div className="navi" >
      <div className="navLinks">
      <Link to="/"> <button className="active"> Home </button></Link>
      <Link to="/menu"><button className="active"> Counsellors </button></Link>
      <Link to="/contact"><button className="active"> Contact </button></Link>
      {!userPresent && (<Link to="/login"><button className="right-side active rightpos"> Login </button></Link>)}
      {userPresent && (<Link to="/login"><button className="right-side active rightpos" onClick={logout}> Logout </button></Link>)}
      {userPresent && (<button className="after-login right-side rightpos" onClick={() => navigate('/userpage')}>{username}</button>)}
      </div><div className="show"><button className="ham" onClick={() => showNavbar()}>{ extendNav ? <>&#10005;</> : <> &#8801;</>}</button></div>
    </div>
    {extendNav && (<div id="shown" className= {extendNav ? "extendedNavbar" : ""}>
    <hr></hr>
    <div><Link to="/"> <button className="active"> Home </button></Link></div>
    <hr></hr>
    <div><Link to="/menu"><button className="active"> Counsellors </button></Link></div>
    <hr></hr>
    <div><Link to="/contact"><button className="active"> Contact </button></Link></div>
    <hr></hr>
    <div>
    {!userPresent && (<Link to="/login"><button className="active"> Login </button></Link>)}
      {userPresent && (<Link to="/login"><button className="active" onClick={logout}> Logout </button></Link>)}
      <div>
      {userPresent && (<button className="after-login right-side rightpos active" onClick={() => navigate('/userpage')}>{username}</button>)}
      </div>
    </div>
    <hr></hr>
  </div>)}
  </div>
  );
};