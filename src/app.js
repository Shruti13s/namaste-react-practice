import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";


const root = ReactDOM.createRoot(document.getElementById("root"));
// const elem = React.createElement("h1",{},"Hey there enjoying react?🚀")

// const root = ReactDom.createRoot(document.getElementById("root"));
// root.render(elem);








const AppLayout = () => {
  
  return (
    <div className="app">
      <Header/>
      <Body />
    </div>
  );
};
root.render(<AppLayout />);
