import React from "react";

const Dropdown = ({ colorList }) => {
  const renderDropdown = colorList.map((color) => {
    <div key={color.value} className="item">
      {color.label}
    </div>;
  });
  return (
    <div className="ui form">
      <div className="fields">
        <label className="label">select a color</label>
        <div className="ui selection dropdown visible active">
          <i className="dropdown icon"></i>
          <div className="text">select a color</div>
          <div className="menu visible transition">{renderDropdown}</div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
