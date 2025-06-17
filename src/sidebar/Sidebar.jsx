import "./Sidebar.css";

import { GiShoppingCart } from "react-icons/gi";

import Category from "./category/Category";
import Color from "./color/Color";
import Price from "./price/Price";

function Sidebar() {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <h1>
            <GiShoppingCart />
          </h1>
        </div>

        <Category />
        <Price />
        <Color />
      </section>
    </>
  );
}

export default Sidebar;
