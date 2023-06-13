import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div className="navi" >
      <Link to="/"> <button> Home </button></Link>
      <Link to="/menu"><button> Menu </button></Link>
      <Link to="/contact"><button> Contact </button></Link>
      <Link to="/login"><button> Login </button></Link>
    </div>
  );
};