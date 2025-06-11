import "./App.css";

import Nav from "./navigation/Nav";
import Products from "./products/Products";
import Recommended from "./recommended/Recommended";

function App() {
  return (
    <>
      <Nav />
      <Recommended />
      <Products />
    </>
  );
}

export default App;
