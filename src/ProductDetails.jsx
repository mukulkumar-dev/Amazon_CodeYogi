import React,{useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {Link} from 'react-router-dom';
import Loading from './Loading';
import {getProductData, getProductList} from './api';
import {HiArrowSmLeft, HiArrowSmRight} from 'react-icons/hi';
import { FaArrowCircleLeft } from "react-icons/fa";

function ProductDetails({onAddToCart}){
  const[product, setProduct] = useState(); 
  const[count, setcount] = useState(1);
  
  console.log('Running param');
  const {id} =useParams();
  
  useEffect (function(){
    const p = getProductData(id);
    p.then(function(response){
      setProduct(response.data);
      setcount(1);
      // console.log(response.data);
    });
  },[id]);

  function handleCountChange(event){
    setcount(event.target.value);
    console.log(count);
  }
  function handleButtonClick(){
    onAddToCart(id, count);
  }

  if(!product){
    return <Loading></Loading>
  }
  console.log('Value is:',id);  
  
  return product ?
    (<>
   <div className="flex flex-col md:flex-row items-center justify-center max-h-3xl bg-white px-2 py-8 md:mx-40 md:my-10 m-10">
     <div className="text-4xl self-start">
       <Link to={'/'}> <FaArrowCircleLeft /></Link></div>
     <div>
       <img className="w-80 h-80 object-cover" src={product.thumbnail}></img>
     </div>
     <div className="p-2 w-full md:w-2/3 md:flex flex-col gap-2 justify-center  md:ml-10 p-5">
       <p className="text-stone-400 font-bold ">{product.category}</p>
       <h2 className="font-bold text-3xl ">{product.title}</h2>
       <p className="font-bold text-2xl">${product.price}</p>
       <p className=" pb-2">{product.description}</p>
       <div className="flex gap-2">
         <input className="self-start border border-gray-500 rounded-md p-2 px-4 w-16" value={count} onChange={handleCountChange} type="number" ></input>
          <button onClick={handleButtonClick} className="border self-start border-blue-900 bg-blue-500 text-white font-bold rounded-md p-2 px-5">Add To Cart</button>
       </div>
     </div>
   </div>
      <div className="flex justify-around m-10">
        {id>1 &&<Link className="border border-black bg-red-500 rounded-md px-4 flex justify-center text-white py-2 m-2" to={"/products/"+(id-1)}><HiArrowSmLeft className="text-3xl"></HiArrowSmLeft> Previous</Link>}
      <Link className="border border-black bg-red-500 rounded-md px-4 flex justify-center text-white py-2 m-2" to={"/products/"+(id*1 + 1)}> 
        Next<HiArrowSmRight className="text-3xl"></HiArrowSmRight> </Link>
        </div>
      </>):(
      <Loading></Loading>
      );
}

export default ProductDetails;