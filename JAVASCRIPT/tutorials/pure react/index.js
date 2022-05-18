const App = () => {
    return React.createElement(
        "div",
        {},
        [
            React.createElement("h1", {}, "Adopt Me!"),
            React.createElement("h2", {}, "Adopt Me!"),
            React.createElement("h3", {}, "Adopt Me!"),
        ]
    );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
