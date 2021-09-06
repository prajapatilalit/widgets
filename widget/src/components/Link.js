import React from "react";

const Link = ({ className, href, children }) => {
  const onClick = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <a onClick={onClick} className={className} href={href}>
        {children}
      </a>
    </div>
  );
};

export default Link;
