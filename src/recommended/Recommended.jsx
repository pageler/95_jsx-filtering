import "./Recommended.css";

function Recommended({ clickHandler }) {
  return (
    <>
      <div>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          <button className="btns" onClick={clickHandler}>
            All Products
          </button>
          <button className="btns" onClick={clickHandler}>
            Nide
          </button>
          <button className="btns" onClick={clickHandler}>
            Adidas
          </button>
          <button className="btns" onClick={clickHandler}>
            Puma
          </button>
          <button className="btns" onClick={clickHandler}>
            Vans
          </button>
        </div>
      </div>
    </>
  );
}

export default Recommended;
