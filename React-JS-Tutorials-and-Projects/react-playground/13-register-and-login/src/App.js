import { render } from "react-dom";
import { Register, Login } from "./Login";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Register />,
      <Login />
    </Router>
  );
};

render(<App />, document.getElementById("root"));
