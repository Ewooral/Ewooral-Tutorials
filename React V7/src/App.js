// /* global React ReactDOM */

const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", { id: "brand" }, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havanese",
    }),
    React.createElement(Pet, {
      name: "Kuka",
      animal: "Cat",
      breed: "Barkohese",
    }),
    React.createElement(Pet, {
      name: "Suaso",
      animal: "Ant",
      breed: "Soldier Ant",
    })
  );
};
ReactDOM.render(React.createElement(App), document.getElementById("root"));
