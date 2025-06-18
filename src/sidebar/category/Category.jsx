import "./Category.css";

import Input from "../../assets/components/Input";

function Category({ changeHandler }) {
  return (
    <>
      <div>
        <h2 className="sidebar-title">Category</h2>
      </div>

      <div className="sidebar-items">
        <label className="sidebar-label-container">
          <input type="radio" value="" name="test" onChange={changeHandler} />
          <span className="checkmark"></span> All
        </label>

        <Input
          value="sneakers"
          title="Sneakers"
          name="test"
          onChange={changeHandler}
        />
        <Input
          value="flats"
          title="Flats"
          name="test"
          onChange={changeHandler}
        />
        <Input
          value="sandals"
          title="Sandals"
          name="test"
          onChange={changeHandler}
        />
        <Input
          value="heels"
          title="Heels"
          name="test"
          onChange={changeHandler}
        />
      </div>
    </>
  );
}

export default Category;
