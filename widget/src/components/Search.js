import React, { useEffect, useState } from "react";

const Search = () => {
  const [text, setText] = useState("");
  console.log("outside ");

  useEffect(() => {
    console.log("inside use Effect");
  }, [text]);
  return (
    <div>
      <div className="ui form">
        <input
          type="text"
          className="input"
          placeholder="Search term..."
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
      </div>
    </div>
  );
};

export default Search;
