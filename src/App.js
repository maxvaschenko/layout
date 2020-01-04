import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./containers/Home";
import { Layout } from "./containers/Layout";
import { Provider } from "react-redux";
import { configureStore } from "./store";

function App() {
  return (
    <div className="App">
      <Provider store={configureStore()}>
        <Router>
          <Switch>
            <Route path="/layout" component={Layout} />
            <Route path="/" component={Home} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
