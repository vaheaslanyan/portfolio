import React from "react";

//Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

const Knowledge = () => {
  return (
    <React.Fragment>
      <div className="row row-even">
        <div className="inside-row-div">
          <Container>
            <Row>
              <Col>
                <h3>Languages</h3>
              </Col>
            </Row>
            <Row>
              <Col>
                <h4>HTML</h4>
              </Col>
              <Col>
                <h4>CSS</h4>
              </Col>
              <Col>
                <h4>JavaScript</h4>
              </Col>
            </Row>
            <Row>
              <Col>
                <h3>Libraries</h3>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="knowledge-item">
                  <div className="knowledge-logo-container">
                    <span className="react-logo">
                      <span className="nucleo"></span>
                    </span>
                    <div></div>
                  </div>
                  <p className="knowledge-item-title">React</p>
                </div>
              </Col>
              <Col>
                <div className="knowledge-item">
                  <div className="knowledge-logo-container">
                    <span className="react-logo">
                      <span className="nucleo"></span>
                    </span>
                    <div></div>
                  </div>
                  <p className="knowledge-item-title">React</p>
                </div>
              </Col>
              <Col>
                <div className="knowledge-item">
                  <div className="knowledge-logo-container">
                    <span className="react-logo">
                      <span className="nucleo"></span>
                    </span>
                    <div></div>
                  </div>
                  <p className="knowledge-item-title">React</p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Knowledge;
