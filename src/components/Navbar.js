import React from 'react'
import {BrowserRouter,Routes,Route,NavLink} from "react-router-dom"
import Home from './Home'
import About from './About'
import Info from './Info'
import {AiOutlineShoppingCart} from "react-icons/ai"
import "./Card.css"

function Navbar({setShow}) {
  return (
    <div className='nav_box'>
      <span className='myShop' onClick={()=>setShow(true)}>Welcome to the shop</span>
      <div className="cart" onClick={()=>setShow(false)} >
    <AiOutlineShoppingCart/>
      </div>
      
    </div>
  )
}

export default Navbar