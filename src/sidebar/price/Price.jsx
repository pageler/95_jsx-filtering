import './Price.css';

import Input from '../../assets/components/Input';

function Price({ changeHandler }) {
  return (
    <>
      <div className="ml">
        <h2 className="sidebar-title price-title">Price</h2>

        <label className="sidebar-label-container">
          <input type="radio" value="" name="test2" onChange={changeHandler} />
          <span className="checkmark"></span> All
        </label>

        <Input
          value={50}
          title="$0 - $50"
          name="test2"
          changeHandler={changeHandler}
        />
        <Input
          value={100}
          title="$50 - $100"
          name="test2"
          changeHandler={changeHandler}
        />
        <Input
          value={150}
          title="$100 - $150"
          name="test2"
          changeHandler={changeHandler}
        />
        <Input
          value={200}
          title="Over $150"
          name="test2"
          changeHandler={changeHandler}
        />
      </div>
    </>
  );
}

export default Price;
