import './Recommended.css';

import Buttons from '../assets/components/Buttons';

function Recommended({ clickHandler }) {
  return (
    <>
      <div>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          <Buttons
            value=""
            title="All Products"
            onClickHandler={clickHandler}
          />
          <Buttons value="Nike" title="Nike" onClickHandler={clickHandler} />
          <Buttons
            value="Adidas"
            title="Adidas"
            onClickHandler={clickHandler}
          />
          <Buttons value="Puma" title="Puma" onClickHandler={clickHandler} />
          <Buttons value="Vans" title="Vans" onClickHandler={clickHandler} />
        </div>
      </div>
    </>
  );
}

export default Recommended;
