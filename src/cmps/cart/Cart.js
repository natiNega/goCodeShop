import { useContext } from "react";
import CartContext from "../../context/CartContext";
import CartItem from "../cartItem/CartItem"

const Cart = ({ productCart }) => {
  //creat a new context = "maseit"
  // const {clearCart } = useContext(CartContext);
  // console.log(productCart);

  return (
    <div>
      
      <section className="CartItem">
        {productCart.map((cartItem) => {
          return (
            <CartItem 
              key={cartItem.id}
              id={cartItem.id}
              price={cartItem.price}
              title={cartItem.title}
              image={cartItem.image}
             qty = {cartItem.qty}
            />
          );
        })}
      </section>
      
{/* 
      {cart.map((product) => {
        cart.map((product) => <div>{product}</div>);

        <div key={product.id} className="product-card">
          <div className="product-image">
            <img src={product.image} alt="pic"></img>
          </div>
          <div className="product-info">
            <h6>{product.id}</h6>
            <h5>{product.title}</h5>
            <h6>{product.price}</h6>
          </div>
        </div>;
      })} */}
    </div>
  );
};
export default Cart;
