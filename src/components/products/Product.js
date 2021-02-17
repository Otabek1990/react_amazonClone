import React from 'react';
import "./product.css";
import {Link} from 'react-router-dom';
//import StarRatings from './react-star-ratings';
//import ReactStars from "react-rating-stars-component";
import StarRateIcon from '@material-ui/icons/StarRate';

const Product = ({id,title,image,price,rating}) => { 

  return (
    <div className="product" >
    <div className=" product_info">
    <h3>{title}</h3>
    <p><strong>{price} € </strong> </p>
  {
    Array(rating)
    .fill(<StarRateIcon 
     style={{color:"gold"}}/>)
    
  }
    </div>

    <img src={image}
    alt="" />
    <button className="buy_button">Buy it</button>
     <Link to="login">
    <p>See more</p>
    </Link>


        </div>
  )
}

export default Product;