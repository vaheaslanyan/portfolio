import React from "react";

//fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGit } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

//Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Contact = () => {
  return (
    <React.Fragment>
      <div className="row row-odd row-bottom">
        <div className="inside-row-div">
          <Container>
            <div className="contact-content">
              <Row>
                <Col>
                  <h3>How to get a hold of me.</h3>
                </Col>
              </Row>
              <Row>
                <Col>
                  <FontAwesomeIcon icon={faGit} />
                </Col>
                <Col>
                  <FontAwesomeIcon icon={faLinkedin} />
                </Col>
                <Col>
                  <FontAwesomeIcon icon={faEnvelope} />
                </Col>
              </Row>
              <Row></Row>
            </div>
          </Container>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contact;
