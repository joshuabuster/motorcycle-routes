import React, { Component } from 'react';
import './App.css';
import { Route, NavLink, Link, Switch } from "react-router-dom";
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
      user: userService.getUser()
    }
  }


  /*-- Queue Functions --*/
  handleAddToQueue = async (id) => {
    const updatedRoute = await routeAPI.queueAdd(id);
    const newRoutesArray = this.state.routes.map( route => route._id === updatedRoute._id ? updatedRoute : route);
    this.setState(
      { routes: newRoutesArray },
      () => this.props.history.push('/userpage')
    );
  };

  handleRemoveFromQueue = async (id) => {
    const updatedRoute = await routeAPI.queueRemove(id);
    const newRoutesArray = this.state.routes.map( route => route._id === updatedRoute._id ? updatedRoute : route);
    this.setState(
      { routes: newRoutesArray },
      () => this.props.history.push('/userpage')
    );
  };


  /*-- CRUD ON ROUTES --*/
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
    
    const userRoutes = this.state.user ? this.state.routes.filter(r => r.user === this.state.user._id) : [];
    const queuedRoutes = this.state.user ? this.state.routes.filter(r => r.subscribedUsers.includes(this.state.user._id)) : [];

    return(
      <div className="App">
        <header className="App-header">
          <nav className="navbar">
            {this.state.user ?  (
              <ul className='navbar-container'>
                <li><NavLink className="navbar-nav" exact to="/">HOME</NavLink></li>
                &nbsp;&nbsp;&nbsp;
                <li><NavLink className="navbar-nav" exact to="/index">ROUTE LIST</NavLink></li>
                &nbsp;&nbsp;&nbsp;
                <li><NavLink className="navbar-nav" exact to="/userpage">{this.state.user.name.toUpperCase()}'S USERPAGE</NavLink></li>
                &nbsp;&nbsp;&nbsp;
                <li><Link className="navbar-nav" id="logout" to="" onClick={this.handleLogout}>LOG OUT</Link></li>
                &nbsp;&nbsp;&nbsp;
              </ul>
            ) : (
              <ul className="navbar-container">
                <li><NavLink className="navbar-nav" exact to="/">HOME</NavLink></li>
                &nbsp;&nbsp;&nbsp;
                <li><NavLink className="navbar-nav" exact to="/index">ROUTE LIST</NavLink></li>
                &nbsp;&nbsp;&nbsp;
                <li><NavLink className="navbar-nav" id="logout" exact to="/login">LOG IN</NavLink></li>
                &nbsp;&nbsp;&nbsp;
                <li><NavLink className="navbar-nav" id="logout" exact to="/signup">SIGN UP</NavLink></li>
              </ul>
            )}
          </nav>
        </header>
        <main>
          <Switch>
            <Route exact path='/' render={() =>
              <LandingPage 
                user={this.state.user}
              />
            }/>
            <Route exact path='/signup' render={({ history }) =>
              <SignupPage
                handleSignupOrLogin={this.handleSignupOrLogin}
                history={history}
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
                routes={this.state.routes}
                handleAddToQueue={this.handleAddToQueue}
                handleRemoveFromQueue={this.handleRemoveFromQueue}
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
                userRoutes={userRoutes}
                queuedRoutes={queuedRoutes}
                handleAddToQueue={this.handleAddToQueue}
                handleRemoveFromQueue={this.handleRemoveFromQueue}
              />
            }/>
            <Route exact path='/add' render={() =>
              <AddRoutePage
                routes={this.state.routes}
                handleAddRoute={this.handleAddRoute}
              />
            }/>
            <Route exact path='/edit' render={({location}) =>
              <EditRoutePage
                routes={this.state.routes}
                handleUpdateRoute={this.handleUpdateRoute}
                location={location}
              />
            }/>
          </Switch>
        </main>
        <footer>
          <h4>&copy; 2020 Motorcycle Routes Tracker</h4>
        </footer>
      </div>
    )
  }
}


export default App;
