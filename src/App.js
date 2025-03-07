import React from "react";
import "./App.css";
import Row from "./components/Row";
import { BODY, HEADER } from "./mock";

function App() {
  return (
    <div className="App">
      <div className="header">
        {HEADER.map((item, index) => (
          <div key={index} className={`item${index + 1}`}>
            {item}
          </div>
        ))}
      </div>
      {BODY.map((item) => (
        <Row item={item} key={item.id} />
      ))}
    </div>
  );
}

export default App;
