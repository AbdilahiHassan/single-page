import React from "react";

const PersonDetails = (props) => {
  return (
    <div className="col-md-6">
      <ul className="list-group">
        <li className="list-group-item">
          <b>FirstName:</b>
          <p>{props.person.FirstName}</p>
        </li>
        <li className="list-group-item">
          <b>PhoneNumber:</b>
          <p>{props.person.PhoneNumber}</p>
        </li>
        <li className="list-group-item">
<<<<<<< HEAD
          <b>Name:</b>
          <p>{props.person.Name}</p>
=======
          <b>InCityId:</b>
          <p>{props.person.InCityId}</p>
>>>>>>> 0fe07416e4f5b15bb2aed1c227ccd609e88a573b
        </li>

        <li className="list-group-item">
          <b>Actions:</b>
          <button className="btn btn-secondary" onClick={props.closeDetails}>
            Close
          </button>
          <button
            className="btn btn-danger"
            onClick={() => props.deletePerson(props.person.id)}>
            Delete
          </button>
        </li>
      </ul>
    </div>
  );
};

export default PersonDetails;