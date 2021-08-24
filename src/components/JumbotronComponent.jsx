import React from "react";
import { Jumbotron, Button, Container } from "reactstrap";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    title: state.employees.title,
  };
};

const JumbotronComponent = (props) => {
  return (
    <div>
      <Jumbotron>
        <Container color="info" className="mt-5">
          <h3 className="display-3 mb-4">{props.title}</h3>
          <p className="lead">
            This is a simple hero unit, a simple Jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <hr className="my-2" />
          <p>
            It uses utility classes for typography and spacing to space content
            out within the larger container.
          </p>
          <p className="lead">
            <Button color="primary">
              <FontAwesomeIcon icon={faInfoCircle} />
              <span className="ml-3">Learn More</span>
            </Button>
          </p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default connect(mapStateToProps, null)(JumbotronComponent);
