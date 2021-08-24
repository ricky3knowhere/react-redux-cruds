import React, { Component } from "react";
import NavbarComponet from "./components/NavbarComponent";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import InsertPage from "./pages/InsertPage";
import UpdatePage from "./pages/UpdatePage";
import DetailsPage from "./pages/DetailsPage";

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <NavbarComponet />
          <Switch>
            <Route path="/" exact>
              <HomePage
              // employees={this.state.employees}
              // title={this.state.title}
              />
            </Route>
            <Route path="/insert/" component={InsertPage}/>
            <Route path="/details/:id" component={DetailsPage} />
            <Route path="/update/:id" component={UpdatePage} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
