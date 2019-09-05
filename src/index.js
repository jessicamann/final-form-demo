import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

import "react-table/react-table.css";
import FruitForm from "./FruitForm";

// const data = [
//   { name: "Banana", color: "Yello" },
//   { name: "Mango", color: "Red" }
// ];

const data = Array(5)
  .fill(null)
  .map((_, index) => ({
    name: `Banana${index}`,
    color: "Yello"
  }));

function App() {
  return (
    <React.Fragment>
      <h1>Final Form Demo</h1>
      <FruitForm data={data} />
    </React.Fragment>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
