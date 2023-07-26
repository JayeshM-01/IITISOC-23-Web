import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Product from "../Product.js";
import { productData, responsive } from "../data";
import "../Home.css";
import { Navbar } from '../Navbar.js';
import { Footer } from '../components/Footer.js';
import {Review} from "../components/Testimonials.js";

export const Home = () => {
  
  const product = productData.map((item) => (
    <Product
      name={item.name}
      url={item.imageurl}
      price={item.price}
      description={item.description}
      movetopage={item.movetopage}
    />
  ));
  

  return (
    <div className="App">
      <div className="nav">
        < Navbar/> 
        </div>
      <div className="homebgcss"><div className='maincontent'><div className="maintext">
      Knowing yourself is one of the hardest and important things to attain to lead a peaceful and successful life. We can help you realize your true worth and potential.</div></div>
      <a href='http://localhost:3000/login' className="mainbutton">Get Started</a>
      </div>

      <h1 className='heading'>Counsellers</h1>
      <Carousel className='Carousel' draggable={true}  swipeable={true} responsive={responsive}>
        {product}
      </Carousel>
   <hr></hr>

    <Review/>

    <Footer/>
    </div>
  );
  };