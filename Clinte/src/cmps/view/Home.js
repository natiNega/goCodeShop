import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Header from "../header/Header";
import Products from "../products/Products";
import Loader from "../loader/Loader";
import Cart from "../cart/Cart";
import CartContext from "../../context/CartContext";
import ProductDetails from "./ProductDetails";

function Home() {
  const [products, setProductArray] = useState([]);
  const [categorieFilter, setCategorieFilter] = useState([]);
  const [productCart, setProductCart] = useState([]);
  const [isLoader, setIsLoader] = useState([true]);
  // const [details,setDetails] = useState ()

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(function (res) {
        return res.json();
      })
      .then(function (json) {
        setProductArray(json);
        setCategorieFilter(json);
        // categorieFilter(json);
        setIsLoader(false);
      });
  }, []);

  const categories = categorieFilter
    .map((p) => p.category)
    .filter((value, index, array) => array.indexOf(value) === index);
  // console.log(categories);
  const clearCart = () => {
    // const clear = productCart;
    setProductCart([]);
    // const Details = ()
  };
  function filterArr(category) {
    return setProductArray(
      categorieFilter.filter((product) =>
        category === "all" ? product : product.category === category
      )
    );
  }
  // push selected item to a new array
  const onAdd = (productId) => {
    const exist = productCart.find((x) => x.id === productId);
    if (exist) {
      setProductCart(
        productCart.map((x) =>
          x.id === productId ? { ...exist, quntity: exist.quntity + 1 } : x
        )
      );
    } else {
      const newProduct = products.find((x) => x.id === productId);
      setProductCart([...productCart, { ...newProduct, quntity: 1 }]);
    }
  };
  const remove = (productId) => {
    const filterProduct = productCart.find((x) => x.id === productId);
    if (filterProduct.quntity > 1) {
      setProductCart(
        productCart.map(
          (prev) =>
            prev.id === filterProduct.id
              ? { ...filterProduct, quntity: filterProduct.quntity - 1 }
              : prev
          // console.log(productCart);
        )
      );
    } else {
      setProductCart(productCart.filter((x) => x.id !== productId));
    }
  };

  const ProductDetails = (productId) => {
    <Link to="./ProductDetails:">ProductDetails</Link>;
  };

  return (
    <>
      <Link to="./about">About</Link>
      <br />
      <Link to="./ProductDetails">ProductDetails</Link>

      <CartContext.Provider
        value={{
          onAdd: onAdd,
          categories: categories,
          remove: remove,
          clearCart: clearCart,
          productCart: productCart,
          ProductDetails: ProductDetails,
        }}
      >
        <Cart
          productCart={productCart}
          onAdd={onAdd}
          products={products}
          remove={remove}
        />

        <Header categories={categories} filterArr={filterArr} />
        <Products products={products} />
        <ProductDetails ProductDetails={ProductDetails} />
        {isLoader && <Loader />}
      </CartContext.Provider>
    </>
  );
}

export default Home;
