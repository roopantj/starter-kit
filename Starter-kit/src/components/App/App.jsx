import React from "react";
import Dropdown from "../../common-component/Dropdown";
import "./App.style.scss";

const App = () => {
  return (
    <div className="app">
      <Dropdown options={["1min", "5min", "15mins"]} />

      <br />
      <br />
      <br />
      <br />
      <Dropdown options={["4min", "6min", "35mins"]} />
    </div>
  );
};

export default App;
