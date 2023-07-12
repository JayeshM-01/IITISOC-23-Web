import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Product from "../Product.js";
import { productData, responsive } from "../data";
import {FaYoutube, FaTwitter , FaInstagram } from 'react-icons/fa';
import {BiSolidMap, BiPhoneCall, BiEnvelope} from 'react-icons/bi';
import "../Home.css";
import { Navbar } from '../Navbar.js';

export const Home = () => {
  
  const product = productData.map((item) => (
    <Product
      name={item.name}
      url={item.imageurl}
      price={item.price}
      description={item.description}
    />
  ));
  const Youtube = () => {
    return (window.open("https://www.youtube.com/@maripabaiitindorecse3501",""));
  }
  const Instagram = () => {
    return (window.open("https://instagram.com/maripaba2?igshid=NGExMmI2YTkyZg==",""));
  }
  const Twitter = () => {
    return (window.open("https://twitter.com/MaRiPaBa2",""));
  }

  return (
    <div className="App">
      <div className="nav">
        < Navbar/> 
        </div>
      <div className="homebgcss"><div className='maincontent'><div className="maintext">
      Knowing yourself is one of the hardest and important things to attain to lead a peaceful and successful life. We can help you realize your true worth and potential.</div></div>
      <button className="mainbutton">Counsellers</button>
      </div>

      <h1 className='heading'>Counsellers</h1>
      <Carousel className='Carousel' draggable={true}  swipeable={true} responsive={responsive}>
        {product}
      </Carousel>
   <hr></hr>
<div className="appoinment">
  <div className='apointmentimage'>
<h1 className="bookheading">How to book appoinment</h1>
  <div className="step">
      <div className="steps">
        <p className="paraofstep">
        <h2 className="stepheading">step-1:</h2>
        <p className="steptext">Counselling is the process of providing professional assistance and guidance in resolving personal, social, or psychological problems.
        </p>
        </p>
        <img alt='background' src="https://img.freepik.com/free-vector/group-therapy-illustration-concept_52683-45774.jpg?w=2000" className="imgstep1"></img>
      </div>

      <div className="steps" id="step-2para">
      <img alt='background' src="https://media.istockphoto.com/id/1219529898/vector/businessman-choose-a-date-on-a-calendar.jpg?s=1024x1024&w=is&k=20&c=6uMTD1eb9mWLoJuShUDWNHUdqgVHFUPjhjvPEffd3Xs=" className="imgstep1"></img>
        
      <p className="paraofstep">
      <h2 className="stepheading">Step-2:</h2>
      <p className="steptext">Counselling is the process of providing professional assistance and guidance in resolving personal, social, or psychological problems. 
      </p>
      </p>
      </div>

      <div className="steps">
        <p className="paraofstep">
         <h2 className="stepheading">Step-3:</h2>
          <p className="steptext">Counselling is the process of providing professional assistance and guidance in resolving personal, social, or psychological problems.
          </p>
          </p>
        <img alt='background' src="https://media.istockphoto.com/id/1168750663/photo/checklist.webp?b=1&s=170667a&w=0&k=20&c=uzd6joHbEZpQwvr_xyFSngpAo0wm6weL5D2pgSZZ_nk=" className="imgstep3">
        </img>
      </div>
  </div>
  </div>
</div>
  


      <hr></hr>
      <div className='footerInfo'>
      <footer >
        <div className='SocilaMedia'>
        <p className='socialTitle'><h3>Social Media Handles</h3></p>
        <div className='Rishi'>
        <div className='team'>
        <div className='content'><li className='ri'>Rishi <FaYoutube className='icon youtube' onClick={Youtube} />
        <FaInstagram className='icon instagram' onClick={Instagram} />
        <FaTwitter className='icon twitter' onClick={Twitter}/></li>
        <li>Raja <FaYoutube className='icon youtube' onClick={Youtube} />
        <FaInstagram className='icon instagram' onClick={Instagram} />
        <FaTwitter className='icon twitter' onClick={Twitter}/></li></div>
        <div className='content'><li>Jayesh<FaYoutube className='icon youtube' onClick={Youtube} />
        <FaInstagram className='icon instagram' onClick={Instagram} />
        <FaTwitter className='icon twitter' onClick={Twitter}/></li>
        <li>Sanjeet<FaYoutube className='icon youtube' onClick={Youtube} />
        <FaInstagram className='icon instagram' onClick={Instagram} />
        <FaTwitter className='icon twitter' onClick={Twitter}/></li></div>
        </div>
        </div>
        </div>
        <div className='AboutUs'>
          <p><h3>About Us</h3></p>
          <p>Company</p>
          <p>Blog</p>
        </div>
        <div className='Contact'>
        <div><h3>Contact Us</h3></div>
        <div><p><BiSolidMap className='smallicon location' onClick={Youtube} />  Khandwa Road, Simrol, Indore, Madhya Pradesh</p></div> <div><p>453552</p></div>
        <div><p><BiPhoneCall className='smallicon ' />  9856432157</p></div>  
        <div><p><BiEnvelope/>  iiticounselling@iiti.ac.in</p></div>  
        </div>
      </footer>
      </div>
    </div>
  );
  };