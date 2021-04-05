import React,{useState,useEffect} from 'react';
import "./product.css";
import {Link} from 'react-router-dom';
import {add,take,addToProductInfos} from "../../redux/productToolkit";
import {useSelector,useDispatch} from 'react-redux';
//import StarRatings from './react-star-ratings';
//import ReactStars from "react-rating-stars-component";
import StarRateIcon from '@material-ui/icons/StarRate';

const Product = ({id,title,image,price,rating}) => { 
   const productInfos=useSelector(state=>state.basketProduct.productInfos)
  const basket=useSelector(state=>state.basketProduct.basket)
const dispatch=useDispatch()
const [soni, setSoni] = useState(1)
 const jamiNarxi=soni*price
 
const buyBtn=()=>{
    dispatch(addToProductInfos({soni,id,title,image,price,jamiNarxi,rating}))

  dispatch(add(`${soni} dona ${title}`))
}
const deleteBtn=()=>{
  dispatch(take())
}
const  minusBtn=()=>{
   if(soni>1){
    setSoni(Number(soni)-1)
  }
}
const  plusBtn=()=>{
    setSoni(Number(soni)+1)
  
}



  return (
    <div className="product" >
    <div className=" product_info">
    <h3> {title}</h3>
    <p><strong>{price} € </strong> </p>
  {
    Array(rating)
    .fill(<StarRateIcon 
     style={{color:"gold"}}/>)
    
  }
  <p>Mahsulot soni:{soni} dona</p>
  <p>Jami narxi:{jamiNarxi} <strong>€</strong></p>
    </div>

    <img src={image}
    alt="" />
    <div>
    <button
    onClick={minusBtn}
     className="add">-</button>
        <input
         className="quantity_input"
          type="number"
          value={soni}
          onChange={e=>{
            setSoni(e.target.value)
          }}

          />

    <button 
        onClick={plusBtn}
    className="add">+</button>

    </div> 
    <div className="buttons">
    <button 
    className="buy_button"
    onClick={buyBtn}
    >Buy it</button> 
    <button 
    className="delete_button"
    onClick={deleteBtn}
    >Delete it</button>
    </div>
     <Link to="login">
    <p>See more</p>
    </Link>


        </div>
  )
}

export default Product;