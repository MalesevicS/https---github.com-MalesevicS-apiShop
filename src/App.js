import React from "react";
import "./App.css"
import Home from "./components/Home";
import About from "./components/About";
import Info from "./components/Info";
import { useState,useEffect } from "react";
import Navbar from "./components/Navbar";


function App() {
  const [StoreItem,setStoreItem]=useState([]);
  const [cart,SetCart]=useState([]);
  const [show,SetShow]=useState(true)



  useEffect(()=>{
     const fetchData=async()=>{
      const result=await fetch(`https://fakestoreapi.com/products`)
      result.json().then(json=>
        setStoreItem(json))
     }
     fetchData();
  })

  const handleRemove=(item)=>{
    const arr=cart.filter((product)=>item.id!==product.id)
    SetCart(arr)
    
}


  const handleClick=(item)=>{
     let isPresent=false;
    cart.forEach((product)=>{
      if(item.id===product.id){
        isPresent=true
      }
    })
    if(isPresent){
      SetCart([...cart,item])
      return
    }
    SetCart([...cart,item])
}

  return(
    <div>
      <Navbar setShow={SetShow}/>
      {
        show?  <Home item={StoreItem} handleClick={handleClick} /> :  <About cart={cart} handleRemove={handleRemove}/>
      }

    </div>
  )
  
  
}

export default App;
