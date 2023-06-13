import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div className="navi" >
      <Link to="/"> <button> Home </button></Link>
      <Link to="/menu"><button> Menu </button></Link>
      <Link to="/contact"><button> Contact </button></Link>
      <Link to="/login"><button> Login </button></Link>
      <span className="logo">
      <img align="right" src="https://th.bing.com/th/id/OIP.P3RCsEutAjthIKfbfLJ4dAHaGK?w=228&h=190&c=7&r=0&o=5&dpr=1.3&pid=1.7" height="100hv" ></img>
      </span>
      
    </div>
  );
};