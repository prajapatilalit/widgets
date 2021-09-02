import React, { useState } from "react";

const Accordion = ({ items }) => {
  const [activIndex, setActiveIndex] = useState(null);

  const onTitleHandleClick = (index) => {
    setActiveIndex(index);
    // console.log("active index is", index);
  };

  const renderAccordionList = items.map((item, index) => {
    return (
      <React.Fragment key={item.title}>
        <div className="active title" onClick={() => onTitleHandleClick(index)}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className="active content">
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });
  return (
    <div className="ui styled accordion">
      {renderAccordionList}
      <h1>{activIndex}</h1>
    </div>
  );
};

export default Accordion;
