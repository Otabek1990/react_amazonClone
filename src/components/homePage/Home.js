import React from 'react';
import Amazonlogo from "../../images/amaz.jpg";
import SlideImage from "./slideImage";
import SlideShow from "./slide";
import  "./home.css";
import Product from "../products/Product.js";
import Row from "react-bootstrap/Row";
import Apple1 from "../../images/apple1.jpg";
import Apple3 from "../../images/apple3.jpg";
import Apple4 from "../../images/apple4.jpg";
//import Col from "react-bootstrap/Col"
//import Image from "amazonbanner.jpg";


/*      <SlideShow className="home_banner"/>
*/
const Home = (props) => {
  return (
    <div className="home">
<Row className="home_raw"> 
   <Product
     key={321}
    id="12345678"
    title="Iphone gold"
    price={1100}
    rating={5}
    image={Apple1}
    />
   


  <Product
key={432}
    id="1234"
    title="Iphone 11"
    price={1250}
    rating={4}
    image={Apple3}
    />
     <Product
key={432}
    id="5678"
    title="Iphone 12"
    price={1400}
    rating={4}
    image={Apple4}
    />
  




    </Row>



    </div>
  )
}
    /*<div className="homeright_content">
    <div className="sign_in">
    <h2>Sign in for the best experience</h2>
    <button >Sign in securily</button>

    </div>
    <img src={Apple1} alt=""/>
    </div>*/

export default Home;