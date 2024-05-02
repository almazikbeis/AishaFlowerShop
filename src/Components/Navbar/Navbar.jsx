
//import logo from '..Assets/logo-black.png'
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';
import logo from '../Assets/logo-black (2).ico'; // Adjust the path as needed
import cart_icon from '../Assets/cart_icon.png';
import { ShopContext } from '../Context/Shopcontext';
export const Navbar = () => {
  const [menu,setMenu] = useState("shop");
  const {getTotalCartItems } = useContext(ShopContext);
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt="Logo" />
      </div>
      <ul className='nav-menu'>
            <li activeClassName="active"  onClick={()=>{setMenu("shop")}} ><Link to='/'>Главная</Link>{menu==="shop"?<h/>:<></>} </li>
            <li  activeClassName="active" onClick={()=>{setMenu("roses")}} ><Link to='/roses'>Розы</Link>{menu==="roses"?<h/>:<></>} </li>
            <li  activeClassName="active" onClick={()=>{setMenu("chris")}} ><Link to ='/chris'>Хризантемы</Link>{menu==="chris"?<h/>:<></>} </li>
            <li   activeClassName="active" onClick={()=>{setMenu("gift")}} ><Link to ='/gift'>Подарки</Link>{menu==="gift"?<h/>:<></>} </li>
            <li   activeClassName="active" onClick={()=>{setMenu("home")}} ><Link to ='/home'>Домашнии растения</Link>{menu==="home"?<h/>:<></>} </li>
            <li   activeClassName="active" onClick={()=>{setMenu("about")}} ><Link to ='/about'>О нас</Link>{menu==="about"?<h/>:<></>} </li>
        </ul>
        <div className='nav-login-cart'>
        <Link to ='/login'> <button>Login</button></Link>
        <Link to ='/cart'><img src={cart_icon} alt="" /></Link>
        <div className='nav-cart-count'>{getTotalCartItems()}</div>
        </div>
        
      
    </div>
  );
};

