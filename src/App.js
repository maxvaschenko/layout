import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./containers/Home";
import { Layout } from "./containers/Layout";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/layout" component={Layout} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
