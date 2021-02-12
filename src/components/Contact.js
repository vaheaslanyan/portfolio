import React from "react";

import SocialBar from "./shared/SocialBar";

//fontawesome
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
//import { faGit } from "@fortawesome/free-brands-svg-icons";
//import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

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
                  <p aria-label="CodePen">
                    <span data-text="C">C</span>
                    <span data-text="O">O</span>
                    <span data-text="N">N</span>
                    <span data-text="T">T</span>
                    <span data-text="A">A</span>
                    <span data-text="C">C</span>
                    <span data-text="T">T</span>
                  </p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h4>
                    I am currently <span className="available">available</span>{" "}
                    for work.
                  </h4>
                  <h4>Get in touch with me via email or LinkedIn.</h4>
                </Col>
              </Row>
              <Row>
                <Col>
                  <SocialBar />
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contact;
