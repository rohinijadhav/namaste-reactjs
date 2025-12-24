
import React from "react";
import ReactDOM from "react-dom/client"

const heading = React.createElement("h1", {id:"heading"}, "Hello Word From ReactJS !!");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
    

// <div id="parent">
//      <div id="child">
    //      <h1 id="heading">Hello Word From ReactJS !!</h1>
    //      <h1 id="heading2">Hello Word From ReactJS 2 !!</h1>
//      </div>
//      <div id="child2">
    //      <h1 id="heading3">Hello Word From ReactJS !!</h1>
    //      <h1 id="heading4">Hello Word From ReactJS 2 !!</h1>
//      </div>
// </div>

const parent = React.createElement("div", {id: "parent"}, [
        React.createElement("div", {id: "child"}, [
            React.createElement("h1", {"id": "heading"}, "this is heading 1"), 
            React.createElement("h1", {"id": "heading2"}, "this is heading 2")
        ]), 
        React.createElement("div", {id: "child2"}, [
            React.createElement("h1", {"id": "heading3"}, "this is heading 3"), 
            React.createElement("h1", {"id": "heading4"}, "this is heading 4")
        ])
    ]
);

root.render(parent);