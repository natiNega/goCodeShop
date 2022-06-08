
import './App.css';
import Header from './cmps/header/Header'
import Products from './cmps/products/Products';
import {data} from './data'
import { useState } from 'react';
import ChangImg from './toggle_button'
import ToggleButton from './toggle_button'

function App() {
  const [products,setProductArray] = useState(data);
  const categories = data.map(p => p.category)
  .filter((value, index, array) => array.indexOf(value)===index);
  
 function filterArr(category) {
   return setProductArray(data.filter((product) => category === "all" ? product : product.category === category))

  
 }
  return (
  <>
  {/* <ToggleButton />
  <ChangImg />  */}
      <Header categories={categories} filterArr={filterArr}  />
    <Products props={products} /> 
  </>
  );
}

export default App;
