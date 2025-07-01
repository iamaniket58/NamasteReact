// Removed in Ep-4 for creating Application
import React from "react";
import ReactDOM from "react-dom/client"

const heading = React.createElement("div", {}, "Namaste React 🔥");
console.log(heading)
//jsx
const jsxHeading = <h1>Namaste to React via JSX 👌</h1>;
console.log(jsxHeading)
const root = ReactDOM.createRoot(document.getElementById("roots"));
//root.render(jsxHeading);


//React Component
let Title = () => <h1>This is my Title</h1>
const Head = () => (
    <div>
        <Title />
        <h1>This is heading from React Comp</h1>
    </div>
);
let tile = <h1>Helllo</h1>
const Head22 = () => {
    return (
        <div>
            {tile}
            <Title />

            <h1>This is heading from React Compccccccc</h1>
        </div>
    );
}

const elem = <span>This is span elemet</span>
const title1 = (

    <h2 className="head" tabIndex="5">
        Namaste React using JSX
        {elem}
    </h2>
);
const HeadingComp1 = () => (
    <div id="container">
        {title1}
        <h1 className="heading">Namaste Recat from Functional Component</h1>
    </div>
)

const Fleet = () => (
    <div>
        <HeadingComp1></HeadingComp1>
        <HeadingComp1 />
        <h1>Hello</h1>
        {HeadingComp1()}
        <h1>Hello from F0</h1>
    </div>

)
const Head1 = () => <h1>This is heading from React Comp</h1>
const Head2 = () => (<h1>This is heading from React Comp</h1>)

//Assignment
//1.
const reactElement = React.createElement("div", { "className": "title" }, React.createElement("h1", {}, React.createElement("p", {}, React.createElement("span", {}, "This is H#"))))
const jsx = (
    <div className="title">
        <h1>
            <h2>
                <h3>This is H3</h3>
            </h2>
        </h1>
    </div>
)

const FuncComp=()=>(
    <div className="tilt1">
        {jsx}
        <h1>
            <h2>
                <h3>This is H3 Functional Component</h3>
            </h2>
        </h1>
    </div>
)


//Header Component from Scratch

const Header=()=>{
    return(
        <div className="header">
            <img className="logo" src="https://i.pinimg.com/originals/18/05/ce/1805ce3d6ff5fa2a329d8052ffa90707.jpg" alt="Logo" width="100px" height="100px"/>
            <input className="search" type="text" placeholder="Search."></input>
            <img className="user-icon" src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png" alt="user" width="100px" height="100px"/>
        </div>
    )
}
root.render(<Header/>);



