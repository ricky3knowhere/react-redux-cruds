import React, { Component } from "react";
import { connect } from "react-redux";
import { Container } from "reactstrap";

import JumbotronComponent from "../components/JumbotronComponent";

import TableComponent from "../components/TableComponent";
import { clearEmployeesDetails, getEmployeesList } from "../actions/UserActions";

class HomePage extends Component {
  componentDidMount() {
    this.props.dispatch(getEmployeesList());
    this.props.dispatch(clearEmployeesDetails());
  }

  render() {
    return (
      <div>
        <JumbotronComponent />
        <Container>
          <h3>Home page</h3>
          <TableComponent />
        </Container>
      </div>
    );
  }
}

export default connect()(HomePage);
