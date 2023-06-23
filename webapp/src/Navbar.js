import { Link } from "react-router-dom";
import { useState } from "react";

export const Navbar = () => {
  const [extendNav,setExtendNav] = useState(false);
  const showNavbar = () => {
    setExtendNav(!extendNav);
  }

  return (
    <div>
    <div className="navi" >
      <div className="navLinks">
      <Link to="/"> <button className="active"> Home </button></Link>
      <Link to="/menu"><button className="active"> Menu </button></Link>
      <Link to="/contact"><button className="active"> Contact </button></Link>
      <Link to="/login"><button className="active"> Login </button></Link>
      </div><div className="show"><button className="ham" onClick={() => showNavbar()}>{ extendNav ? <>&#10005;</> : <> &#8801;</>}</button></div>
    </div>
    {extendNav && (<div id="shown" className= {extendNav ? "extendedNavbar" : ""}>
    <hr></hr>
    <div><Link to="/"> <button className="active"> Home </button></Link></div>
    <hr></hr>
    <div><Link to="/menu"><button> Menu </button></Link></div>
    <hr></hr>
    <div><Link to="/contact"><button> Contact </button></Link></div>
    <hr></hr>
    <div><Link to="/login"><button> Login </button></Link></div>
    <hr></hr>
  </div>)}
  </div>
  );
};