import "./App.css";

import Nav from "./navigation/Nav";
import Products from "./products/Products";
import Recommended from "./recommended/Recommended";
import Category from "./sidebar/category/Category";
import Color from "./sidebar/color/Color";
import Price from "./sidebar/price/Price";
import Sidebar from "./sidebar/Sidebar";

function App() {
  return (
    <>
      <Nav />
      <Products />
      <Recommended />
      <Sidebar />
      <Category />
      <Color />
      <Price />
    </>
  );
}

export default App;
