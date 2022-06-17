import './Header.css'
import { useContext } from 'react';
import CartContext from "../../context/CartContext"
const Header = ({categories,filterArr}) => {

  const {clearCart} = useContext(CartContext);
  return(
  
    <nav className="product-filter">
    <h1>Jackets</h1>
    <br></br>
     <div> <button onClick={ () => clearCart()} class="clearCart-button clearCart-button--small">Remove Item From Cart</button></div>
    <div className="sort">
      <div className="collection-sort">
        <label>Filter by:</label>

        <select className='collection-filter' 
        onChange = {(e) => filterArr(e.target.value)}>
        <option value="all">All Products</option>
          {categories.map((itmeCategory) =>{
          return(
            <option>{itmeCategory}</option>
            // <option>All categories</option>
            )
          })
        }
         
      
            
  
        </select>
      </div>

      <div className="collection-sort">
        <label>Sort by:</label>
        <select>
          <option value="/">Featured</option>
          <option value="/">Best Selling</option>
          <option value="/">Alphabetically, A-Z</option>
          <option value="/">Alphabetically, Z-A</option>
          <option value="/">Price, low to high</option>
          <option value="/">Price, high to low</option>
          <option value="/">Date, new to old</option>
          <option value="/">Date, old to new</option>
        </select>
      </div>
    </div>
   </nav>
)};

export default Header;