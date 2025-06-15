import "./App.css";

import Nav from "./navigation/Nav";
import Products from "./products/Products";
import Recommended from "./recommended/Recommended";
import Sidebar from "./sidebar/Sidebar";

function App() {
  return (
    <>
      <Nav />
      <Products />
      <Recommended />
      <Sidebar />
    </>
  );
}

export default App;
