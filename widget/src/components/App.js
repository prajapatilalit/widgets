import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Translate from "./Translate";
import Accordion from "./Accordion";
import Search from "./Search";
import Route from "./Route";
import Header from "./Header";

const items = [
  {
    title: "What is React?",
    content:
      "React is a free and open-source front-end JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications. ",
  },
  {
    title: "Why is ReactJS so popular?",
    content:
      "Today, ReactJS has become highly popular because of its extra simplicity and flexibility. Many people are even referring to it as the future of web development. It is estimated that more than 1,300 developers and over 94,000 sites utilize ReactJS.",
  },
  {
    title: "Why React is so fast?",
    content:
      "Which is faster – Angular or React? React is slightly faster than Angular because it's a library and not a framework-platform, like Angular. However, the difference between the startup and running speed isn't significant. Overall, if you are building a small application, React is definitely a better choice.",
  },
];

const options = [
  {
    label: "The color Green",
    value: "green",
  },
  {
    label: "The color Red",
    value: "red",
  },
  {
    label: "The shaded Blue",
    value: "blue",
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="Select a Language"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};

export default App;
