import React from "react";
import ReactDOM from "react-dom";
import Counter from "./Counter";

const App = () => {
  return (
    <div>
      <h1>Testing Esbuild live reload!</h1>
      <Counter /> 
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
