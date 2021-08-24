import React, { Component } from "react";
import { Container } from "reactstrap";
import BackButton from "../components/BackButton";
import DetailsComponent from "../components/DetailsComponent";
import { getEmployeesDetails } from "../actions/UserActions";
import { connect } from "react-redux";

class DetailsPage extends Component {

  componentDidMount() {
    this.props.dispatch(getEmployeesDetails(this.props.match.params.id));
  }
  
  render() {
    return (
      <Container>
        <h3>Details page</h3>
        <BackButton />
        <DetailsComponent />
      </Container>
    );
  }
}

export default connect()(DetailsPage)


