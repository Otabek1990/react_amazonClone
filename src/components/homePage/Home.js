import React from 'react';
import Amazonlogo from "../../images/amaz.jpg";
import ProductImage from "../../images/amazonbanner.jpg";
import Amazonfoto from "../../images/amazonfoto.jpg";
import  "./home.css";
import Product from "../products/Product.js";
import Row from "react-bootstrap/Row"
//import Col from "react-bootstrap/Col"
//import Image from "amazonbanner.jpg";



const Home = (props) => {
  return (
    <div className="home">
    <img 
    className="home_banner"
    src={Amazonlogo} 
    alt="amazonpage"
    />
{/*8photos* id,title,price,rating,image*/}
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
key={543}
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
    <Row className="home_raw">
  <Product
 key={123}
    id="5678"
    title="Row techiques"
    price={110.00}
    rating={3}
    image={ProductImage}
    />
  <Product
key={234}
    id="345678"
    title="Bestseller books"
    price={21.00}
    rating={2}
    image={ProductImage}
    />
 <Product
key={345}
    id="345678"
    title="Bestseller books"
    price={25.50}
    rating={1}
    image={ProductImage}
    /> 
    <Product
key={456}
    id="345678"
    title="Bestseller books"
    price={25.50}
    rating={1}
    image={ProductImage}
    />
    </Row>



    </div>
  )
}

export default Home;