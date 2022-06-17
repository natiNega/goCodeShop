// import Cart from "../cart/Cart";
const CartItem = ({image,title,price,qty}) => {

    return (
       
      <div>
        <img src={image} alt="" width="100px"></img>
    
      {/* <div className="product-info"> */}
        <h5>{title}</h5>
        <h6>{price}</h6>
        <h6> Quntity: {qty}</h6>
       </div>
    )
}

export default CartItem;