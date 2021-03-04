import React from 'react';
import  "./header.css";
import {Link} from 'react-router-dom';
import {useSelector} from "react-redux";
//import SearchIcon from '@material-ui/icons/Search';
//import {useContextValue} from '../../StateProvider';
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';



const Header = (props) => {

	//const[{basket},dispatch]=useContextValue()
	const basket=useSelector(state=>state.basketProduct.basket)
	console.log(basket)
	console.log(basket[0])
	console.log(basket.length)

  return (
    <nav className="header">
    <Link to="/" key="home">
<img 
className="header_logo" 
src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
 alt="amazon"
 />
 </Link>
 <div className="location_deliver">
 <LocationOnIcon className="location_icon"/>
 <div className="location_name">
 <p className="p_deliver">Deliver to</p>
 <p className="location_state">Uzbekistan</p>
 </div>

 </div>

 <div className="header_search">
<input
 type="text"
className="header_searchinput"
/>
<button className="header_search_btn">
<SearchSharpIcon className="header_searchicon"/>
</button>

 </div>
       <div >
       <select className="select_language">
       <option id="eng">Eng</option>
       <option id="french">French</option>
       <option id="russian">Russian</option>
       <option id="Uzbek">Uzbek</option>
     
       </select>

       </div>

 <div className="header_links" >

 <Link to="login" key="login"
 className="header_option">
 <div className="header_link">
 <span className="header_option1">Hello,Sign in</span>
 <span className="header_option2"> Account</span>
 </div>
 </Link>
 <Link to="checkout"
 key="checkout"
 className="header_option">
 <div className="header_link">
 <span className="header_option1">Returns</span>
 <span className="header_option2"> &Orders</span>
 </div>
 </Link>
 <Link to="" 
 key="checkout"
 className="header_option"
 >
 <div className="header_link">
 <span className="header_option1">Country</span>
 <span className="header_option2"> Enter</span>
 </div>
  </Link>
  <Link to="checkout"
  key="checkout"
 className="header_option">
 <div className="header_basket">
 <ShoppingBasketIcon className="header_shoppingbasket"/>
 <span className="header_productquantity">{basket.length}</span>
 </div>
 </Link>



 </div>


    </nav>
  )
}

export default Header;