import React from "react";

const PersonTable = (props) => {
  const rows = props.people.map((person) => {
    return (
      <tr key={person.id}>
        <td>{person.FirstName}</td>
        <td>{person.PhoneNumber}</td>
        <td>{person.InCityId}</td>
        <td>
          <button
            onClick={() => {
              props.showPerson(person.id);
            }}
            className="btn btn-info">
            Details
          </button>
        </td>
      </tr>
    );
  });

  return (
    <div className="col-md-6 middle-bar">
      <table className="table table-striped table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>FirstName</th>
            <th>PhoneNumber</th>
            <th>InCityId</th>
            <th>Action</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
};

export default PersonTable;