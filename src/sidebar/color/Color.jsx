import "./Color.css";

import Input from "../../assets/components/Input";

function Color({ changeHandler }) {
  return (
    <>
      <div className="ml">
        <h2 className="sidebar-title color-title">Color</h2>

        <label className="sidebar-label-container">
          <input type="radio" value="" name="test" onChange={changeHandler} />
          <span className="checkmark all"></span> All
        </label>

        <Input value="black" title="Black" name="test1" color="black" />
        <Input value="blue" title="Blue" name="test1" color="blue" />
        <Input value="red" title="Red" name="test1" color="red" />
        <Input value="green" title="Green" name="test1" color="green" />
        <Input value="white" title="White" name="test1" color="white" />
        {/* <label className="sidebar-label-container">
          <input
            onChange={changeHandler}
            type="radio"
            value="white"
            name="test1"
          />
          <span
            className="checkmark"
            style={{ background: "white", border: "2px solid black" }}
          ></span>
          White
        </label> */}
      </div>
    </>
  );
}

export default Color;
