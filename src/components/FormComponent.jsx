import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Col, FormGroup, Input, Row, Label } from "reactstrap";
import { Field, reduxForm } from "redux-form";
import EmpValidations from "../validations/EmpValidations";

const mapStateToProps = (state) => {
  return {
    initialValues: {
      name: state.employees.getEmployeesDetails.name,
      email: state.employees.getEmployeesDetails.email,
      phone: state.employees.getEmployeesDetails.phone,
      address: state.employees.getEmployeesDetails.address,
    },
  };
};

const renderField = ({
  input,
  type,
  placehoder,
  label,
  disabled,
  readOnly,
  meta: { touched, error, warning },
}) => (
  <Row>
    <Col md="12">
      <Label htmlFor="{input}" className="col-form-label">
        {label}
      </Label>
    </Col>
    <Col md="12">
      <Input
        {...input}
        type={type}
        placehoder={placehoder}
        disabled={disabled}
        readOnly={readOnly}
      ></Input>

      {touched &&
        ((error && <p style={{ color: "red" }}>{error}</p>) ||
          (warning && <p style={{ color: "brown" }}>{warning}</p>))}
    </Col>
  </Row>
);

class FormComponent extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <FormGroup row>
          <Col md="6">
            <FormGroup>
              <Field
                name="name"
                component={renderField}
                type="text"
                label="Name :"
              />
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Field
                name="email"
                component={renderField}
                type="email"
                label="Email :"
              />
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Field
                name="phone"
                component={renderField}
                type="text"
                label="Phone :"
              />
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Field
                name="address"
                component={renderField}
                type="text"
                label="Address :"
              />
            </FormGroup>
          </Col>
        </FormGroup>

        <FormGroup row>
          <Col md={12}>
            <FormGroup>
              <Button type="submit" disabled={this.props.submitting}>
                Submit
              </Button>
            </FormGroup>
          </Col>
        </FormGroup>
      </form>
    );
  }
}

FormComponent = reduxForm({
  form: "InsertEmpsForm",
  validate: EmpValidations,
  enableReinitialize: true,
})(FormComponent);

export default connect(mapStateToProps, null)(FormComponent);
