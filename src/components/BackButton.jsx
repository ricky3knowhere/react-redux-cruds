import { faAngleDoubleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { Button, Col, Row } from "reactstrap";

export default function BackButton() {
  return (
    <Row className="mb-4">
      <Col>
        <Link to="/">
          <Button color="primary">
            <FontAwesomeIcon icon={faAngleDoubleLeft} className="mr-2" /> Back
            to Homepage
          </Button>
        </Link>
      </Col>
    </Row>
  );
}
