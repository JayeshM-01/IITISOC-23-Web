import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Menu } from "./pages/Menu";
import { Contact } from "./pages/Contact";
import { Login } from "./Login";
import { Registeration } from "./Register";
import {Lucas} from "./profile/Lucas";
import {Agastha} from "./profile/Agastha";
import Charlotte from "./profile/Charlotte";
import Hazel from "./profile/Hazel";
import Ethan from "./profile/Ethan";
import Henry from "./profile/Henry";
import Alexander from "./profile/Alexander";
import Oliver from "./profile/Oliver";
import Userpage from "./pages/Userpage";
import { Adminmenu } from "./pages/Adminmenu";


function App() {
  return (
    <div className="App">
      <Router>       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registeration />} />
          <Route path="/lucas" element={<Lucas />} />
          <Route path="/agastha" element={<Agastha />} />
          <Route path="/charlotte" element={<Charlotte />} />
          <Route path="/hazel" element={<Hazel />} />
          <Route path="/ethan" element={<Ethan />} />
          <Route path="/henry" element={<Henry />} />
          <Route path="/alexander" element={<Alexander />} />
          <Route path="/oliver" element={<Oliver />} />
          <Route path="/userpage" element={<Userpage />} />
          <Route path="/adminmenu" element={<Adminmenu />} />
          <Route path="*" element={<h1> PAGE NOT FOUND</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;