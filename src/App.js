import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Test from "./view/test";
import Survey from './view/CreateSurvey';
import Takesurvey from './view/takeSurvey';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        
        <Switch>
        <Route exact path="/" component={Test } />
          <Route exact path="/create" component={Survey} />
          <Route exact path="/takesurvey" component={Takesurvey} />
        </Switch>
       
      </div>
    </Router>
  );
}

export default App;
