import React from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home"
import Searchpage from "./pages/SearchPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route path='/searchpage'>
            <Searchpage/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
