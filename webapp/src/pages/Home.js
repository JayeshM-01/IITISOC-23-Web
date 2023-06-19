import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Product from "../Product.js";
import { productData, responsive } from "../data";

export const Home = () => {
  
  const product = productData.map((item) => (
    <Product
      name={item.name}
      url={item.imageurl}
      price={item.price}
      description={item.description}
    />
  ));

  return (
    <div className="App">
      <h1 className='heading'>Counsellers</h1>
      <Carousel draggable={true}  swipeable={true} responsive={responsive}>
        {product}
      </Carousel>
    </div>
  );
  };