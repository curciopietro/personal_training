import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import UseReducerBasic from "./components/UseReducerBasic";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <Header />

      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/useReducer">
        <UseReducerBasic />
      </Route>
    </Router>
  );
}

export default App;
