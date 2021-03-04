import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import './App.css';
import Header from './components/header/Header.js';
import BottomHeader from './components/bottomHeader/bottomNavbar';
import Home from './components/homePage/Home.js';
import CheckoutPage from './components/CheckoutPage';
import Footer from './components/footer/footer'

function App() {
  return(
    <Router>
       <div className="app">
       <Switch>
       <Route path="/login">
        <Header />
          Login Page
       </Route> 
       <Route path="/checkout">
         <Header />
       <CheckoutPage/>
       Checkout Page
       </Route>
        <Route path="/">
        
        <Header />
        <BottomHeader/>
         <Home/>
                  <Footer/>



       </Route>

       </Switch>
         </div>
         
         </Router>
     
     )
  
}

export default App;
