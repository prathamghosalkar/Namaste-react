const parent = React.createElement(
    "div" , {id: "parent"} ,
    React.createElement(
        "div" , {id: "child"} ,
        [React.createElement("h1" , {} , "hello how are you from h1"),
            React.createElement("h2" , {} , "hello how are you from h12")]


));

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)