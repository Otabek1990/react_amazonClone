import React from 'react';
import Amazonlogo from "../../images/amaz.jpg";
import SlideImage from "./slideImage";
import SlideShow from "./slide";
import  "./home.css";
import Product from "../products/Product.js";
import Row from "react-bootstrap/Row";
import ProductImage from "../../images/amazonbanner.jpg";
import Amazonfoto from "../../images/amazonfoto.jpg";
//import Col from "react-bootstrap/Col"
//import Image from "amazonbanner.jpg";



const Home = (props) => {
  return (
    <div className="home">
      <SlideShow className="home_banner"/>
<Row className="home_raw"> 
   <Product
     key={321}
    id="12345678"
    title="Amazon basket"
    price={11.96}
    rating={5}
    image={ProductImage}
    />
   


  <Product
key={432}
    id="1234"
    title="Super product"
    price={5.95}
    rating={4}
    image={ProductImage}
    />
     <Product
key={432}
    id="1234"
    title="Super product"
    price={5.95}
    rating={4}
    image={ProductImage}
    />
  


    <div className="homeright_content">
    <div className="sign_in">
    <h2>Sign in for the best experience</h2>
    <button >Sign in securily</button>

    </div>
    <img src={Amazonfoto} alt=""/>
    </div>


    </Row>



    </div>
  )
}

export default Home;