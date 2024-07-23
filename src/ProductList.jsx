import React from 'react';
import Products from './Products';
import Header from './Header';
import Footer from './Footer';

function ProductList({product}) {
  return(
  <div className = "grid sm:grid-cols-2 md:grid-cols-3 gap-6  space-y-2 md:space-y-0 mx-auto max-w-6xl px-9 py-[50px] bg-white">
    {product.map(function(item){
    return  <Products key ={item.title} {...item}/>;
            })}
          </div>
        );
    }
    
 export default ProductList;
  
    // <div className ="bg-stone-200 font-bold">
    //   <div >
    //     <Header/>
    //   </div>
    //   <div className="bg-white m-20">
    //     <div className ="flex justify-around mt-10">
    //       <input className= "border border-gray-300 rounded-md p-2" placeholder="Search"></input>
    //       <select className= "border border-gray-300 ">
    //         <option>Default Sorting</option>
    //         <option>By Price</option>
    //         <option>By Title</option>
    //       </select> 
    //     </div>
    //     <div className="flex gap-5 p-5 flex-wrap justify-center">
    //       <Product pic="https://plus.unsplash.com/premium_photo-1673356301514-2cad91907f74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dCUyMHNoaXJ0fGVufDB8fDB8fHww" des="T-Shirt" title="Kotton Club T-Shirt" price="$130.00"/>
    //       <Product pic="https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8amVhbnN8ZW58MHx8MHx8fDA%3D" des="Jeans" title="Van Huesan Jeans" price="$150.00"/>
    //       <Product pic="https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2F0Y2h8ZW58MHx8MHx8fDA%3D" des="Watch" title="Titan Watch" price="$500.00"/>
    //       <Product pic="https://images.unsplash.com/photo-1529810313688-44ea1c2d81d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2hvZXN8ZW58MHx8MHx8fDA%3D" des="Shoes" title="Adidas Shoes" price="$400.00"/>
    //       <Product pic="https://plus.unsplash.com/premium_photo-1711051475177-1ebe1594a9c3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aXBob25lfGVufDB8fDB8fHww" des="IPhone" title="Apple Mac & I Phone" price="$1100.00"/>
    //       <Product pic="https://images.unsplash.com/photo-1505428221302-9d1beeaa2801?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNwZWN0YWNsZXN8ZW58MHx8MHx8fDA%3D" des="Spectacles" title="Quartz Specs" price="$800.00"/>
    //       <Product pic="https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZWFyYnVkc3xlbnwwfHwwfHx8MA%3D%3D" des="Ear-Buds" title="Boult Buds" price="$900.00"/>
    //       <Product pic="https://images.unsplash.com/photo-1604644401890-0bd678c83788?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8amFja2V0c3xlbnwwfHwwfHx8MA%3D%3D" des="Jackets" title="Peter England Jackets" price="$1200.00"/>
    //       <Product pic="https://images.unsplash.com/photo-1637336698223-0d5f048b09ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBlcmZ1bWVzfGVufDB8fDB8fHww" des="Perfumes" title="WildStone Perfumes" price="$200.00"/>
    //       <Product pic="https://images.unsplash.com/photo-1602810320073-1230c46d89d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNoaXJ0c3xlbnwwfHwwfHx8MA%3D%3D" des="Shirts" title="Van Huesan Shirts" price="$1400.00"/>
    //       <Product pic="https://plus.unsplash.com/premium_photo-1677405099651-53669fdee9df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FwfGVufDB8fDB8fHww" des="Caps" title="Desgined Caps" price="$100.00"/>
    //       <Product pic="https://images.unsplash.com/photo-1659708701940-e60893ef03d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGFjY2Vzc29yeXxlbnwwfHwwfHx8MA%3D%3D" des="Artifical Chains" title="PC Diamonds Chain" price="$1300.00"/> 
    //     </div>

    //   </div>
    //   <div>
    //     <Footer/>
    //   </div>
    // </div> 
  
 