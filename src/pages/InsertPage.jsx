import React, { Component } from "react";
import { connect } from "react-redux";
import { Container } from "reactstrap";
import { createEmployee } from "../actions/UserActions";
import BackButton from "../components/BackButton";
import FormComponent from "../components/FormComponent";
import { notifications } from "../utilities/notifications";

const mapStateToProps = (state) => {
  return {
    getEmployeesResponse: state.employees.getEmployeesResponse,
    errorEmployeesResponse: state.employees.errorEmployeesResponse,
  };
};

class InsertPage extends Component {
  handleSubmit = (values) => {
    this.props.dispatch(createEmployee(values));
  };

  render() {
    notifications(this.props, "inserted");
    return (
      <Container>
        <h3>Insert page</h3>
        <BackButton />
        <FormComponent onSubmit={(values) => this.handleSubmit(values)} />
      </Container>
    );
  }
}

export default connect(mapStateToProps, null)(InsertPage);
