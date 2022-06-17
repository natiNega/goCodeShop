
import './App.css';
import Header from './cmps/header/Header'
import Products from './cmps/products/Products';
import { useEffect, useState } from 'react';
import  Loader  from './cmps/loader/Loader';
import  Cart  from './cmps/cart/Cart';
import CartContext from './context/CartContext';


function App() {
  const [products,setProductArray] = useState([]);
  const [productCart,setProductCart] = useState([]);  
  const [isLoader,setIsLoader] = useState([true]);
  const categories = products.map(p => p.category)
  .filter((value, index, array) => array.indexOf(value)===index);

const clearCart = () => {
// const clear = productCart;
setProductCart ([]); 

// const Details = ()

} 
 function filterArr(category) {
   return setProductArray(products.filter((product) => 
   category === "all" ? product : product.category === category)) 
 };


 // push selected item to a new array
const onAdd = (productId) => {
  const exist = productCart.find((x) => x.id === productId);

  if(exist) {
    setProductCart(productCart.map((x) => x.id === productId ? {...exist,qty:exist.qty +1} : x))
    
  }else{
    const newProduct = products.find(x => x.id === productId);
    setProductCart([...productCart, {...newProduct,qty: 1}]);
  }

}

const remove = (productId) => {
  const filterProduct = productCart.filter(x => x.id !== productId);
  setProductCart ([...filterProduct]);
  
}

 useEffect(() => {
  
  fetch('https://fakestoreapi.com/products')
.then(function(res) {
  return res.json();
})
.then(function(json) {
  setProductArray(json);
  setIsLoader(false);
});

},[]);
 
  return (
  <>
   <CartContext.Provider value= {{
    onAdd:onAdd
    ,categories:categories
    ,remove:remove
    ,clearCart:clearCart
    }}> 


     <Cart productCart = {productCart} onAdd ={onAdd} products= {products} />
      <Header categories={categories} filterArr={filterArr}  />
    <Products products={products} />
    {isLoader&&<Loader />} 
      </CartContext.Provider>
  </>
  );
}

export default App;
