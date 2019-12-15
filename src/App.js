import React from "react";
//import logo from "./logo.svg";
import "./App.css";
//import Home from "./views/home/Home";
import Login from "./views/login/Login";
import Customer from "./views/customer/Customer";
import Owner from "./views/owner/Owner";
import Transaction from "./views/transaction/Transaction";
import Report from "./views/report/Report";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/customer" component={Customer} />
        <Route exact path="/owner" component={Owner} />
        <Route exact path="/transaction" component={Transaction} />
        <Route exact path="/report" component={Report} />
        <Route path="/" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
