import './Product.css'
const Product = ({price,title,image}) => (
    <div className="product-card">
      <div className="product-image">
        <img src={image}></img>
      </div>
      <div className="product-info">
        <h5>{title}</h5>
        <h6>{price}</h6>
      </div>
    </div>
  );
  export default Product;