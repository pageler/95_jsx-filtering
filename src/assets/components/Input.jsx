import React from "react";

function Input({ changeHandler, value, title, name, color }) {
  return (
    <>
      <label className="sidebar-label-container">
        <input
          type="radio"
          name={name}
          value={value}
          onChange={changeHandler}
        />
        <span className="checkmark" style={{ backgroundColor: color }}></span>
        {title}
      </label>
    </>
  );
}

export default Input;
