import React,{useState, useEffect} from 'react';
import ProductList from './ProductList';
import NoMatching from './NoMatching';
import {getProductList} from './api';
import Loading from './Loading';

function Home(){

  const [all_data, setAllData] = useState([]);
  const [query, setQuery] =useState("");
  const [sort, setSort]=useState("default");
  const [loading, setLoading]= useState(true);

  useEffect(function(){

    const xyz= getProductList();
    console.log(xyz);
    xyz.then(function(response){
        setAllData(response.data.products);
      console.log(response);
      setLoading(false);
  });
    
}, []);

  if(loading){
    return <Loading></Loading>
  }
  
  // const [data, setData] = useState(all_data);

 const data=all_data.filter(function(item){
    const lowercaseTitle=item.title.toLowerCase();
    const lowercaseQuery=query.toLowerCase();

    return lowercaseTitle.indexOf(lowercaseQuery)!=-1;
  });

  if(sort=='price'){
    data.sort(function(x,y){
      return x.price-y.price;
      });
  }else if(sort=='name'){
    data.sort(function(x,y){
      return x.title < y.title ?-1:1;
    });
  }

  function handleQueryChange(event) {
    setQuery(event.target.value);
  }
  function handleSortChange(event){
    setSort(event.target.value);
  }

  return (
    <>
      <div className="p-2 bg-white mx-auto max-w-6xl px-9 py-[50px] my-16">
        <div className="p-2">Home/Shop</div>
        <div className="text-3xl text-red-400 p-2">Shop</div>
        <input value={query} onChange={handleQueryChange} placeholder="Search" className="border border-gray-700 rounded-md p-2"></input>
        <select value={sort} className="border border-gray-700 rounded-md p-2" onChange={handleSortChange}>
          <option value="default">Default Sort</option>
          <option value="name">Sort By Name</option>
          <option value="price">Sort By Price</option>
          <option value="des"> Sort By Category</option>
        </select>
      </div>
      {data.length > 0 && <ProductList product={data}/>}
      {data.length ==0 && <NoMatching></NoMatching>}
      </>
  );
}
export default Home;