import React from "react";

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
                  <h3>Want to get a hold of me?</h3>
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
