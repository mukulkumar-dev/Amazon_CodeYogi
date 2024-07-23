import React from 'react';
import { IoIosBasket } from "react-icons/io";

function Header({productCount}){
  return (
    
    <div className ="bg-white pl-5 max-w-6xl flex justify-between mx-auto pr-5 items-center">
      <img className ="h-20" src="https://1000logos.net/wp-content/uploads/2016/10/Amazon-Logo-640x400.png" />
      <div className="relative">
      <IoIosBasket className="text-4xl text-box-light" />
      <span className="absolute -top-3 -right-2 bg-red-700 px-1 text-white rounded-full" >{productCount}</span>
        </div>
    </div>
      
  );

}

export default Header;