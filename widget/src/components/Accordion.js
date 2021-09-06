import React, { useState } from "react";

const Accordion = ({ items }) => {
  const [activIndex, setActiveIndex] = useState(null);

  const onTitleHandleClick = (index) => {
    setActiveIndex(index);
  };

  const renderAccordionList = items.map((item, index) => {
    const active = index === activIndex ? "active" : "";
    return (
      <React.Fragment key={item.title}>
        <div
          className={`title ${active}`}
          onClick={() => onTitleHandleClick(index)}
        >
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className="active content">
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });
  return <div className="ui styled accordion">{renderAccordionList}</div>;
};

export default Accordion;
