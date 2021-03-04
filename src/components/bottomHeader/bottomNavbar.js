import React from 'react';
import "./bottomNavbar.css";
import MenuIcon from '@material-ui/icons/Menu';


const BottomHeader = (props) => {
  return (
   <div className="bottom_navbar">
<div className="menu_icon">
<MenuIcon/>
<h3>All</h3>
</div>
<div className="today_deal">
Today's Deals
</div>
<div className="customer_service">
Customer Service
</div>
<div className="gift_cards">
Gift Cards
</div>
<div className="sell">
Sell
</div>
<div className="registry">
Registry
</div>
<div className="responce_covid">
Amazon's responce to COVID-19
</div>
    </div>

  )
}

export default BottomHeader;