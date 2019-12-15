import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Account from "../account/Account";
import Report from "../report/Report";
import Sidebar from "../../components/sidebar/Sidebar";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Sidebar></Sidebar>
        {/* <Switch>
          <Route>
            <Route exact path="/home/account" component={Account} />
            <Route path="/home/report" component={Report} />
          </Route>
        </Switch> */}
      </div>
    );
  }
}
