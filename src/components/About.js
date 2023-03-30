import React, { useEffect } from "react";
import "./Card.css"
import { useState,useRef } from "react";

function About({cart,handleRemove}){

const [CartPrice,SetCartPrice]=useState(0)
const [count,setCount]=useState(1)


const handlePrice=()=>{
    let totalprice=0
    cart.map((item)=>{
        totalprice+=count*item.price
    })
    SetCartPrice(totalprice)
}


useEffect(()=>{
    handlePrice();
})


return(
    <div className="cart">
        <div className="cart-price">
        <div className="sum">
            <p>Number of articles {cart.length}</p>
            <div className="price">Total price {CartPrice}$</div>
        </div>
        </div>
    <div className="cart-container">
        {cart.map((item)=>{
            return <div className="cart-product">
                <h2 className="title">Title:{item.title}</h2>
                <img src={item.image} alt="/" className="pic" />
                <p className="price">Price:{item.price}$</p>
                <button className="del" onClick={()=>handleRemove(item)}>DELETE</button>
            </div>
        })}
    </div>
    </div>
)
    
}
export default About;