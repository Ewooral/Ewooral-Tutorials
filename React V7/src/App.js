// /* global React ReactDOM */
// import React from "react";
import {render} from "react-dom";
import Pet from "./Pet";

// const App = () => {
//   return React.createElement(
//     "div",
//     {},
//     React.createElement("h1", { id: "brand" }, "Adopt Me!"),
//     React.createElement(Pet, {
//       name: "Luna",
//       animal: "Dog",
//       breed: "Havanese",
//     }),
//     React.createElement(Pet, {
//       name: "Kuka",
//       animal: "Cat",
//       breed: "Barkohese",
//     }),
//     React.createElement(Pet, {
//       name: "Suaso",
//       animal: "Ant",
//       breed: "Soldier Ant",
//     })
//   );
// };

// render(React.createElement(App), document.getElementById("root"));



const App = () => {
  return (
    <div>
      <h1 id="brand">Adopt Me!</h1>
      <Pet name="Luna" animal="Dog" breed="Havanese" />
      <Pet name="Kuka" animal="Cat" breed="Barkohese" />
      <Pet name="Suaso" animal="Ant" breed="Soldier Ant" />
    </div>
  )
}

render(<App />, document.getElementById("root"));