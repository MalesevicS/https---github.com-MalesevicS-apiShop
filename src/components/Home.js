import React from "react";
import { useState,useEffect } from "react";
import Card from "./Card";



function Home({item,handleClick}){



return(
    <div className="box">
{item.map((item)=>{
    return <div >
       <Card item={item} handleClick={handleClick}  />
    </div>
})}    
    </div>
)
}
    

export default Home;