import { useContext } from "react";
import CartContext from "../../context/CartContext";
import Product from "../product/Product";
import "./Products.css"; // for style injection

const Products = ({ products }) => {
  const { productCart } = useContext(CartContext);
  return (
    <section className="products">
      {products.map((product) => {
        return (
          <Product
            key={product.id}
            id={product.id}
            price={product.price}
            title={product.title}
            image={product.image}
            description={product.description}
            quntity={
              productCart.find((item) => item.id === product.id)?.quntity
            }
          />
        );
      })}
    </section>
  );
};
export default Products;
