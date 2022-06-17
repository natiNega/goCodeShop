import { useContext } from 'react';
import './Product.css'
import CartContext from '../../context/CartContext';

const Product = ({price,title,image,id}) => {

const {onAdd,remove,Details} = useContext(CartContext);

  return(
    <div className="product-card" >
      <div className="product-image" >
        <img src={image} alt=""></img>
      </div>
      <div className="product-info">
        <h5>{title}</h5>
        <h6>{price}</h6>
       Add To Cart  <button onClick={ () =>onAdd(id)} class="plus-button plus-button--small">+</button>
        <button onClick={ () => remove(id)} className="minus-button minus-button--small">-</button>
        
        {/* <button onClick={ () => remove(id)} >Details</button> */}
      </div>
    </div>
  )};
  export default Product;