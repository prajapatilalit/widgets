import React, { useState } from "react";

const Accordion = ({ items }) => {
  const [activIndex, setActiveIndex] = useState(null);

  const onActiveIndex = (index) => {
    setActiveIndex(index);
    // console.log("active index is", index);
  };

  const renderAccordionList = items.map((item, index) => {
    return (
      <React.Fragment key={item.title}>
        <div
          className="ui styled accordion"
          onClick={() => onActiveIndex(index)}
        >
          <div className="active title">
            <i className="dropdown icon"></i>
            {item.title}
          </div>
          <div className="active content">
            <p>{item.content}</p>
          </div>
        </div>
      </React.Fragment>
    );
  });
  return (
    <div>
      {renderAccordionList}
      {activIndex}
    </div>
  );
};

export default Accordion;
