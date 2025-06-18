import "./Sidebar.css";

import { GiShoppingCart } from "react-icons/gi";

import Category from "./category/Category";
import Color from "./color/Color";
import Price from "./price/Price";

function Sidebar({ changeHandler }) {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <h1>
            <GiShoppingCart />
          </h1>
        </div>

        <Category changeHandler={changeHandler} />
        <Price changeHandler={changeHandler} />
        <Color changeHandler={changeHandler} />
      </section>
    </>
  );
}

export default Sidebar;
