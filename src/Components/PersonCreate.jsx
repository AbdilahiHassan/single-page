import React, { Component } from "react";
class PersonCreate extends Component {
  createperson = (event) => {
    event.preventDefault();
 console.log(event);
    const person = {
    
      FirstName: event.target["FirstName"].value,
      InCityId: event.target["InCityId"].value,
        PhoneNumber: Number(event.target["PhoneNumber"].value),
    };

    this.props.addPerson(person);
  };

  render() {
    return (
      <div className="col-md-6">
        <div className="row">
          <h3 className="col-12">Add person</h3>
        </div>

        <form onSubmit={this.createperson}>
          <div className="row mb-2">
            <label htmlFor="FirstName" className="col-2 mt-2">
            FirstName:
            </label>
            <input
              id="FirstName"
              type="text"
              required
              minLength="2"
              className="form-control col-10"
              placeholder="Enter Name"
            />
          </div>
          <div className="row mb-2">
            <label htmlFor="Name" className="col-2 mt-2">
            InCityId:
            </label>
            <input
              id="InCityId"
              type="text"
              required
              className="form-control col-10"
              placeholder="Enter City"
            />
          </div>
          <div className="row mb-2">
            <label htmlFor="PhoneNumber" className="col-2 mt-2">
            PhoneNumber:
            </label>
            <input
              id="PhoneNumber"
              type="number"
              required
              step="1"
              min="1"
              className="form-control col-10"
              placeholder="Enter PhoneNumber"
            />
          </div>

          <div className="row d-flex justify-content-center">
            <input
              type="reset"
              className="mr-2 btn btn-warning"
              value="Reset"
            />
            <input type="submit" className=" btn btn-success" value="Create" />
          </div>
        </form>
        <div className="d-flex justify-content-end">
          <button
            className="btn btn-secondary"
            onClick={this.props.closeCreate}>
            Close
          </button>
        </div>
      </div>
    );
  }
}

export default PersonCreate;