import "./Sidebar.css";

import Category from "./category/Category";
import Color from "./color/Color";
import Price from "./price/Price";

function Sidebar() {
  return (
    <>
      <Category />
      <Price />
      <Color />
    </>
  );
}

export default Sidebar;
