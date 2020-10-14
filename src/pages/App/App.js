import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import * as routeAPI from "../../utils/routeService";
import LoginPage from "../LoginPage/LoginPage";
import SignupPage from "../../pages/SignupPage/SignupPage";
import LandingPage from "../../pages/LandingPage/LandingPage";
import IndexPage from "../../pages/IndexPage/IndexPage";
import UserPage from "../../pages/UserPage/UserPage";
import AddRoutePage from "../../pages/AddRoutePage/AddRoutePage"
import EditRoutePage from "../../pages/EditRoutePage/EditRoutePage"
import DetailPage from "../../pages/DetailPage/DetailPage"
import userService from "../../utils/userService";

class App extends Component {
  constructor() {
    super();
    this.state ={
      routes: [],
      queuedroutes: [],
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
      () => this.props.history.push('/userpage')
    );
  };

  handleUpdateRoute = async (updatedRouteData) => {
    const updatedRoute = await routeAPI.update(updatedRouteData);
    const newRoutesArray = this.state.routes.map( route => route._id === updatedRoute._id ? updatedRoute : route);
    this.setState(
      { routes: newRoutesArray },
      () => this.props.history.push('/userpage')
    );
  };

  handleDeleteRoute = async (id) => {
    await routeAPI.deleteOne(id);
    this.setState(
      (state) => ({
        routes: state.routes.filter(route => route._id !== id),
      }),
      () => this.props.history.push('/userpage')
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
            <IndexPage
              user={this.state.user}
              handleLogout={this.handleLogout}
              routes={this.state.routes}
            />
          }/>
          <Route exact path="/details" render={({ location }) => 
            <DetailPage 
              location={location}
              handleUpdateRoute={this.handleUpdateRoute}
              handleDeleteRoute={this.handleDeleteRoute} 
            />}
          />
          <Route exact path='/userpage' render={() =>
            <UserPage
              user={this.state.user}
              handleLogout={this.handleLogout}
              routes={this.state.routes}
            />
          }/>
          <Route exact path='/add' render={() =>
            <AddRoutePage
              user={this.state.user}
              handleLogout={this.handleLogout}
              routes={this.state.routes}
              handleAddRoute={this.handleAddRoute}
            />
          }/>
          <Route exact path='/edit' render={({location}) =>
            <EditRoutePage
              user={this.state.user}
              handleLogout={this.handleLogout}
              routes={this.state.routes}
              handleUpdateRoute={this.handleUpdateRoute}
              location={location}
            />
          }/>
        </Switch>
      </div>
    )
  }
}


export default App;
