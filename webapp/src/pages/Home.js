import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Product from "../Product.js";
import { productData, responsive } from "../data";
import {FaYoutube, FaTwitter , FaInstagram , FaAddressCard} from 'react-icons/fa';
import {BiSolidMap, BiPhoneCall, BiEnvelope} from 'react-icons/bi';

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
      <hr></hr>
      <h1 className='heading'>Counsellers</h1>
      <Carousel className='Carousel' draggable={true}  swipeable={true} responsive={responsive}>
        {product}
      </Carousel>
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