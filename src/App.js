import logo from './logo.svg';
import './App.css';
import Header from './cmps/header/Header'
import Products from './cmps/products/Products';
import data from './data'

function App() {
  return (
  <>
    <Header />
    <Products props={data} />
  </>
  );
}

export default App;
