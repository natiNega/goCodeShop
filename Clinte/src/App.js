import "./App.css";
import Home from "./cmps/view/Home";
import { Routes, Route } from "react-router-dom";
import ProductDetails from "./cmps/view/ProductDetails";
import About from "./cmps/view/About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="ProductDetails" element={<ProductDetails />} />
    </Routes>
  );
}

export default App;
