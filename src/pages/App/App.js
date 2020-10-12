import React, { Component } from 'react';
import './App.css';
// import SignupPage from '../SignupPage/SignupPage';

class App extends Component {
  constructor() {
    super();
    this.state ={
      user: userService.getUser()
    }
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  }

  /*-- Lifecycle Methods --*/

  render() {
    return(
      <div>
        <header>Motorcycle Routes</header>
        <Switch>
          <Route exact path='/' render={() =>
            <LandingPage />
          }/>
          <Route exact path='/signup' render={({ history }) =>
            <SignupPage
              history={history}
              handlesSignupOrLogin={this.handleSignupOrLogin}
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
            <UserPage />
          }/>
        </Switch>
      </div>
    )
  }
}


export default App;
