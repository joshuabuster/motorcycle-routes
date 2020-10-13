import React, { Component } from 'react';
import './App.css';
import { Route, Link, NavLink, Switch } from "react-router-dom";
import * as routeAPI from "../../utils/routeService";
// User sign in and login pages
import LoginPage from "../LoginPage/LoginPage";
import SignupPage from "../../pages/SignupPage/SignupPage";
import LandingPage from "../../pages/LandingPage/LandingPage";
import RoutesIndexPage from "../../pages/RoutesIndexPage/RoutesIndexPage";
import UserPage from "../../pages/UserPage/UserPage";
import userService from "../../utils/userService";

class App extends Component {
  constructor() {
    super();
    this.state ={
      routes: [],
      user: userService.getUser()
    }
  }
  /*-- CRUD --*/
  handleAddRoute = async (newRouteData) => {
    const newRoute = await routeAPI.create(newRouteData);
    this.setState(
      (state) => ({
        routes: [...state.routes, newRoute],
      }),
      () => this.props.history.push('/')
    );
  };

  /*-- Auth --*/
  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  }

  /*-- Lifecycle Methods --*/
  async componentDidMount() {
    const routes = await routeAPI.getAll();
    this.setState({ routes });
  }

  render() {
    return(
      <div>
        <Switch>
          <Route exact path='/' render={() =>
            <LandingPage 
              user={this.state.user}
              handleLogout={this.handleLogout}
            />
          }/>
          <Route exact path='/signup' render={({ history }) =>
            <SignupPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
          <Route exact path='/login' render={({ history }) =>
            <LoginPage
              handleSignupOrLogin={this.handleSignupOrLogin}
              history={history}
            />
          }/>
          <Route exact path='/index' render={() =>
            <RoutesIndexPage />
          }/>
          <Route exact path='/userpage' render={() =>
            <UserPage
              user={this.state.user}
              handleLogout={this.handleLogout}
            />
          }/>
        </Switch>
      </div>
    )
  }
}


export default App;
