import { Link, useParams } from "react-router-dom";
// import Products from "../products";

function ProductDetails(image, title, price, quntity, descrption) {
  // const { itemId } = useParams();
  // console.log("itemId", itemId);
  <Link to="/">Home</Link>;
  return (
    <>
      <div>
        <img src={image} alt=""></img>
      </div>
      <div>
        <h5>{title}</h5>
        <h6>{price}</h6>
        <h5>{quntity}</h5>
        <h5>{descrption}</h5>
      </div>
    </>
  );
}

export default ProductDetails;
