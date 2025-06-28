import React from "react";
import ReactDOM from "react-dom/client"
//const x = React.createElement("div", { "id": "parent" }, React.createElement("div", { "id": "child" }, [React.createElement("h1", {"id":"heeader1"}, "This is my h1 header"),React.createElement("h2",{"id":"heeader2"},"This is h2 header")]))
const y = React.createElement("div", { "id": "parent" }, React.createElement("div", { "id": "child" }, React.createElement("h1", {"id":"heeader1"}, "This is my h1 header"),React.createElement("h2",{"id":"heeader2"},"This is Awesome header")))


const heading = React.createElement("h2", { "id": "myId" }, "Hello from React!!")
const root = ReactDOM.createRoot(document.getElementById("roots"));
root.render(y);