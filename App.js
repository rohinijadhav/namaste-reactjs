
import React from "react";
import ReactDOM from "react-dom/client"

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

// Original React.createElement code
// const parent = React.createElement("div", {id: "parent"}, [
//         React.createElement("div", {id: "child"}, [
//             React.createElement("h1", {"id": "heading"}, "this is heading 1"),
//             React.createElement("h1", {"id": "heading2"}, "this is heading 2")
//         ]),
//         React.createElement("div", {id: "child2"}, [
//             React.createElement("h1", {"id": "heading3"}, "this is heading 3"),
//             React.createElement("h1", {"id": "heading4"}, "this is heading 4")
//         ])
//     ]
// );


//JSX code 

// Below line is nothing React element but JSX code which Babel will convert into React.createElement code
// It is a HTML like syntax to create React elememt
// JSX - Javascript XML

// JSX - Create React Elemnent
// How things work with JSX
// JSX => React Element => Javascript Object => HTML (DOM Manipulation)
const jsxHeading = (<div>
        <h1 id="jsxHeading"> Namaste React JS</h1>
        <h2> Welcome to JSX Code</h2>   
    </div>
);

//JSX - React Component has 2 types 
// - Class Based Compoent

// - Function Based Component - It is a javascript function returning React Element.

const TitleCompoent = function() {
    // using React.createElement
    // return (React.createElement("div", {id: "child2"}, [
    //         React.createElement("h1", {"id": "heading3"}, "this is heading 3"),
    //         React.createElement("h1", {"id": "heading4"}, "this is heading 4")
    //     ]));

    // or using JSX
    return (
    <div id="child2">
            <h2 id="title1" className = "title" tabIndex="5" >this is title 1 jsx</h2>
            <h2 id="title">this is title 2 jsx</h2>
    </div>
    );

}
const spanElm = <span>This is a span element</span>;

// Arrow Function Based Component. 
// Element inside the component should be wrapped inside parenthesis ()

// Added element spanElm inside other component HeaderCompoenent
// Added component TitleCompoent inside another component HeaderCompoenent
    const HeaderCompoenent = () => (
        <div id="container">
            {spanElm}    
            <h2> This is the Header compoenent.</h2>
            <TitleCompoent/>     
        </div>
);

// Added jsxHeading Element inside element
// Added  component HeaderCompoenent inside element.

// so we can pass component and element inside each other.

const elem = (<h1>
    Hello World from ReactJS !!
    {jsxHeading}
    <HeaderCompoenent/>
    {/* {HeaderCompoenent()} */}
</h1>);

console.log(HeaderCompoenent());

console.log(TitleCompoent());

console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));  

// root.render(<HeaderCompoenent/>);  // Call component inside render method
// root.render(TitleCompoent())  // can ass component without <> also as javascript function
root.render(elem);  // Call element inside render method

