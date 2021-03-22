import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import UseReducerBasic from "./components/UseReducerBasic";
import Header from "./components/Header";
import Home from "./components/Home";
import UseContextBasic from "./components/UseContext";
import Redux from "./components/Redux";

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
      <Route exact path="/redux">
        <Redux />
      </Route>
      <Route exact path="/useContext">
        <UseContextBasic />
      </Route>
    </Router>
  );
}

export default App;
