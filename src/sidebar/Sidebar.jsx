import "./Sidebar.css";

import { FaShoppingCart } from "react-icons/fa";

import Categories from "./categories/Categories";
import Colors from "./colors/Colors";
import Price from "./price/Price";

function Sidebar() {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <h1>
            <FaShoppingCart />
          </h1>
        </div>

        <Categories />
        <Price />
        <Colors />
      </section>
    </>
  );
}

export default Sidebar;
