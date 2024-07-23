import React from 'react';
import ProductList from './ProductList';
import {Link} from 'react-router-dom';

function Products({thumbnail,title,category,price,id}){
  
  return (
      <div className ="bg-zinc-300 p-5 max-w-xs shadow-2xl shadow-black hover:scale-105 border border-black rounded-md">
        <div className ="w-full h-60">
          <img className ="w-full h-full object-cover" src={thumbnail}/>
        </div>

        <div className ="text-gray-500 text-xs">{category}</div>
        <div className ="text-base font-semibold">{title}</div>
        <img className ="w-12 pt-1 pb-1" src="https://img.freepik.com/premium-photo/four-out-five-stars-rating_2227-1370.jpg"/>
        <p className ="text-xs font-semibold">${price}</p>
        <div className ="pt-5 flex justify-center">
          <Link className ="hover:bg-red-400 text-black border border-gray-500 rounded-md p-1" to={"/products/"+id}>View Details</Link>
        </div>
      </div>
   
  );
}

export default Products;