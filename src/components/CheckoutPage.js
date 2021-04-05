import React,{useEffect,useState} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {addToProductInfos} from '../redux/productToolkit';
import './CheckoutPage.css';
import StarRateIcon from '@material-ui/icons/StarRate';


const CheckoutPage = (props) => {
 const productInfos=useSelector(state=>state.basketProduct.productInfos)
 const basket=useSelector(state=>state.basketProduct.basket)
const [quantity, setQuantity] = useState(0)
const [changeQuantity, setChangeQuantity] = useState(false)



//const dispatch=useDispatch()
const addBtn=(soni)=>{
	setQuantity(quantity+1)

}

const minusBtn=(soni)=>{
	soni>quantity && setQuantity(quantity-1)

}


  return (

    <div className="checkOutPage">
   {basket.length!==0 ? 
   	(
    <div className="productsList">
   	   {productInfos.map((item) =>(
   		 <div className="list">
   		   <h2>Mahsulot nomi: {item.title}</h2>
             <div className="allInfos">
   	           <img  src={item.image}/>
   		         <div className="infos">
   	               <p>Id: {item.id}</p>
   	               <p>Name: {item.title}</p>
   	               <p>Price: {item.price} $</p>
   	               <p>Total price: {item.jamiNarxi} $</p>
   	                {Array(item.rating)
   	                 .fill(
   	                  <StarRateIcon style={{color:"orange"}}/>
   	                  )}
   	                <p>Mahsulot soni:{Number(item.soni+quantity)}</p>
                     <button
                     onClick={()=>addBtn(item.id,item.soni)}
                      className="add_btn">Add </button>
   	                 <button
   	                    onClick={()=>minusBtn(item.id,item.soni)}
   	                  className="minus_btn">Minus </button>
   	                 <button className="delete_btn">Delete</button>

   	             </div>
         	</div>
   	      </div>
   	      ))}
     </div>

   	)
   : <h1 style={{color:"white",marginLeft:"10px"}}>There is no products in your basket yet</h1>
}

    </div>
  )
}

export default CheckoutPage;