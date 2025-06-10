import "./App.css";

import Buttons from "./components/Buttons";
import Card from "./components/Card";
import Input from "./components/Input";
import Nav from "./navigation/Nav";
import Products from "./products/Products";
import Recommended from "./recommended/Recommended";
import Categories from "./sidebar/categories/Categories";
import Colors from "./sidebar/colors/Colors";
import Price from "./sidebar/price/Price";
import Sidebar from "./sidebar/Sidebar";

function App() {
  return (
    <div>
      <Card />
      <Input />
      <Buttons />
      <Nav />
      <Products />
      <Recommended />
      <Sidebar />
      <Categories />
      <Colors />
      <Price />
    </div>
  );
}

export default App;
