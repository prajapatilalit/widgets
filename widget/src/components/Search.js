import React, { useEffect, useState } from "react";
import axios from "axios";

const Search = () => {
  const [text, setText] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const searchTerm = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: text,
        },
      });
      setResults(data.query.search);
    };
    if (text) {
      searchTerm();
    }
  }, [text]);

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            type="text"
            className="input"
            placeholder="Search term..."
            onChange={(e) => setText(e.target.value)}
            value={text}
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
