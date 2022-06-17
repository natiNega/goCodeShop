import { useContext } from 'react';
import Product from '../product/Product'
import './Products.css' // for style injection


const Products = ({products}) => {
 
  
    return (
      <section className ="products">
        {
        products.map((product) => {
          
          return <Product
           key={product.id} 
           id={product.id}
           price={product.price} 
           title={product.title} 
           image={product.image}
           
           />;
        })
        }
      </section>
    );
  };
  export default Products;