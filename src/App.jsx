import React,{useState} from 'react';
import {Route,Routes} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ProductDetails from './ProductDetails';
import Home from './Home';

function App() {
  const path = window.location.pathname;

  const [cart, setCart] = useState({});
  console.log(cart);
  
  function handleAddToCart(id,count){
    const oldCount = cart[id] || 0;
    console.log(id,count);

    setCart({...cart, [id]:oldCount+count*1});
  }
  const totalCount = Object.keys(cart).reduce(function(previous, current){
    return previous + cart[current];
  }, 0);
  
  return (
    <div className="bg-stone-200 h-screen overflow-scroll">
      <Header productCount={+totalCount}></Header>
      <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/products/:id/" element={<ProductDetails onAddToCart={handleAddToCart}></ProductDetails>}></Route>
      </Routes>
      <Footer> </Footer>
      
    </div>
  );
}
  export default App;