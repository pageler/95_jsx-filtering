import './Color.css';

import Input from '../../assets/components/Input';

function Color({ changeHandler }) {
  return (
    <>
      <div>
        <h2 className="sidebar-title color-title">Color</h2>

        <label className="sidebar-label-container">
          <input type="radio" value="" name="test1" onChange={changeHandler} />
          <span className="checkmark all"></span> All
        </label>

        <Input
          value="black"
          title="Black"
          name="test1"
          color="black"
          changeHandler={changeHandler}
        />
        <Input
          value="blue"
          title="Blue"
          name="test1"
          color="blue"
          changeHandler={changeHandler}
        />
        <Input
          value="red"
          title="Red"
          name="test1"
          color="red"
          changeHandler={changeHandler}
        />
        <Input
          value="green"
          title="Green"
          name="test1"
          color="green"
          changeHandler={changeHandler}
        />
        <Input
          value="white"
          title="White"
          name="test1"
          color="white"
          changeHandler={changeHandler}
        />
      </div>
    </>
  );
}

export default Color;
