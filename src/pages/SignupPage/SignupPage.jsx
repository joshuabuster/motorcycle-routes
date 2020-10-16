// import { getDefaultNormalizer } from '@testing-library/react';
import React, { Component } from 'react';
import SignupForm from '../../components/SignupForm/SignupForm';
import './SignupPage.css';

class SignupPage extends Component {
    constructor(props) {
      super(props);
      this.state = {message: ''}
    }
  
    updateMessage = (msg) => {
      this.setState({message: msg});
    }
  
    render() {
      return (
        <div className='container'>
          <div className='signup-form'>
            <h3>Sign Up</h3>
            <SignupForm {...this.props} updateMessage={this.updateMessage} />
            <p>{this.state.message}</p>
          </div>
        </div>
      );
    }
  }

export default SignupPage;