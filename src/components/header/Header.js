import React from 'react';
import  "./header.css";
import {Link} from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {useContextValue} from '../../StateProvider';



const Header = (props) => {

	const[{basket},dispatch]=useContextValue()

  return (
    <nav className="header">
    <Link to="/" key="home">
<img 
className="header_logo" 
src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
 alt="amazon"
 />
 </Link>

 <div className="header_search">
<input
 type="text"
className="header_searchinput"
/>
<SearchIcon className="header_searchicon"/>

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
 <span className="header_productquantity">0 and {basket.length}</span>
 </div>
 </Link>



 </div>


    </nav>
  )
}

export default Header;