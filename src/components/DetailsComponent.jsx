import React from "react";
import { connect } from "react-redux";
import { Table } from "reactstrap";

const mapStateToProps = (state) => {
  return {
    getEmployeesDetails: state.employees.getEmployeesDetails,
    errorEmployeesDetails: state.employees.errorEmployeesDetails,
  };
};

const DetailsComponent = (props) => {
  return (
    <Table striped>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">{props.getEmployeesDetails.id}</th>
          <td>{props.getEmployeesDetails.name}</td>
          <td>{props.getEmployeesDetails.email}</td>
          <td>{props.getEmployeesDetails.phone}</td>
          <td>{props.getEmployeesDetails.address}</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default connect(mapStateToProps, null)(DetailsComponent);
