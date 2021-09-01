import React from "react";

const Accordion = ({ items }) => {
  const renderAccordionList = items.map((item) => {
    return (
      <div className="ui styled accordion">
        <div className="active title">
          <i class="dropdown icon"></i>
          {item.title}
        </div>
        <div className="active content">
          <p>{item.content}</p>
        </div>
      </div>
    );
  });
  return <React.Fragment>{renderAccordionList}</React.Fragment>;
};

export default Accordion;
