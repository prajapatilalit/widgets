import React from "react";
import Link from "./Link";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link href="/" className="items">
        Accordion
      </Link>
      <Link href="/list" className="items">
        Search
      </Link>
      <Link href="/dropdown" className="items">
        Dropdown
      </Link>
      <Link href="/translate" className="items">
        Translate
      </Link>
    </div>
  );
};

export default Header;
