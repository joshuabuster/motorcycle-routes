import React, {Component} from 'react';

class AddRoutePage extends Component {
  state = {
    invalidForm: true,
    formData: {
      name: '',
      startPoint: '',
      endPoint: '',
      miles: 0,
      difficulty: '',
      rating: 1,
    }
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
      <>
        <h1>Add Route</h1>
        <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Name (required)</label>
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
              startPoint="startPoint"
              value={this.state.formData.startPoint}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>End Point (address)</label>
            <input
              className="form-control"
              endPoint="endPoint"
              value={this.state.formData.endPoint}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Distance (in miles)</label>
            <input
              className="form-control"
              miles="miles"
              value={this.state.formData.miles}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Difficulty (Easy, Moderate, Difficult)</label>
            <input
              className="form-control"
              difficulty="difficulty"
              value={this.state.formData.difficulty}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Rating (1-5: 5 being Great!)</label>
            <input
              className="form-control"
              rating="rating"
              value={this.state.formData.rating}
              onChange={this.handleChange}
            />
          </div>
          <button
            type="submit"
            className="btn"
            disabled={this.state.invalidForm}
          >
            Add Route
          </button>
        </form>
      </>
    );
  }
}

export default AddRoutePage;