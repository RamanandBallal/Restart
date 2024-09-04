import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//NOTES:
//root: it is html div-id inside index.html file, root select's html element
//createRoot: createRoot lets you create a root to display React components inside a browser DOM node.
//render:Rendering is React's process of describing a user interface
// React.StrictMode : not compusary to write, we can only render app -->React.StrictMode Lets you find common bugs in your components early during development
//<App />  : custom tag
