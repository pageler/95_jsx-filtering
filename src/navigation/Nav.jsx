import './Nav.css';

import {
  AiOutlineShoppingCart,
  AiOutlineUserAdd,
} from 'react-icons/ai';
import { FiHeart } from 'react-icons/fi';

function Nav({ inputChangeHandler, query }) {
  return (
    <nav>
      <div className="nav-container">
        <input
          type="text"
          className="search-input"
          value={query}
          placeholder="Enter your shoe search."
          onChange={inputChangeHandler}
        />
      </div>

      <div className="profile-container">
        <a href="#">
          <FiHeart className="nav-icons" />
        </a>
        <a href="#">
          <AiOutlineShoppingCart className="nav-icons" />
        </a>
        <a href="#">
          <AiOutlineUserAdd className="nav-icons" />
        </a>
      </div>
    </nav>
  );
}

export default Nav;
