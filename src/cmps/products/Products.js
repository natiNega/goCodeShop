import Product from '../product/Product'
import './Products.css' // for style injection

const Products = ({ props }) => {
  
    return (
      <section className ="products">
        {
        props.map((product) => {
          return <Product key={product.id} price={product.price} title={product.title} image={product.image}/>;
        })
        }
      </section>
    );
  };
  export default Products;