import React, { Component } from "react";
import { connect } from "react-redux";
import { Container } from "reactstrap";

import { editEmployee, getEmployeesDetails } from "../actions/UserActions";
import BackButton from "../components/BackButton";
import FormComponent from "../components/FormComponent";
import { notifications } from "../utilities/notifications";

const mapStateToProps = (state) => {
  return {
    getEmployeesResponse: state.employees.getEmployeesResponse,
    errorEmployeesResponse: state.employees.errorEmployeesResponse,
  };
};

class UpdatePage extends Component {
  componentDidMount() {
    this.props.dispatch(getEmployeesDetails(this.props.match.params.id));
  }

  handleSubmit = (values) => {
    this.props.dispatch(editEmployee(values, this.props.match.params.id));
  };
  render() {
    notifications(this.props, "updated");

    return (
      <Container>
        <h3>Edit page</h3>
        <BackButton />
        <FormComponent onSubmit={(values) => this.handleSubmit(values)} />
      </Container>
    );
  }
}

export default connect(mapStateToProps, null)(UpdatePage);
