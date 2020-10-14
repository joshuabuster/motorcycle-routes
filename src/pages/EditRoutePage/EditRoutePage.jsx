import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './EditRoutePage.css';
import NavBar from '../../components/NavBar/NavBar';

class EditRoutePage extends Component {
  state = {
    invalidForm: false,
    formData: this.props.location.state.route
  };

  formRef = React.createRef();

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleAddRoute(this.state.formData);
  };

  handleChange = e => {
    const formData = {...this.state.formData, [e.target.name]: e.target.value};
    this.setState({
      formData,
      invalidForm: !this.formRef.current.checkValidity()
    });
  };

  render() {
    return (
      <div>
        <h1>Add New Route</h1>
        <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Name of Route</label>
            <input
              className="form-control"
              name="name"
              value={this.state.formData.name}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Start Point (address)</label>
            <input
              className="form-control"
              name="startPoint"
              value={this.state.formData.startPoint}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>End Point (address)</label>
            <input
              className="form-control"
              name="endPoint"
              value={this.state.formData.endPoint}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Distance (in miles)</label>
            <input
              className="form-control"
              name="miles"
              value={this.state.formData.miles}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Difficulty (Easy, Moderate, Difficult)</label>
            <input
              className="form-control"
              name="difficulty"
              value={this.state.formData.difficulty}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Rating (1-5: 5 being Great!)</label>
            <input
              className="form-control"
              name="rating"
              value={this.state.formData.rating}
              onChange={this.handleChange}
            />
          </div>
          <button
            type="submit"
            className="btn"
            disabled={this.state.invalidForm}
          >
            Save Route
          </button>
          &nbsp;&nbsp;
          <Link to='/userpage'>Cancel</Link>
        </form>
      </div>
    );
  }
}

export default EditRoutePage;