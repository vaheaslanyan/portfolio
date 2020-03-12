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
            <div className="knowledge-content">
              <Row>
                <Col>
                  <h3>Must-haves</h3>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="knowledge-item">
                    <div className="knowledge-logo-container">
                      <img src="https://res.cloudinary.com/hbmteb7ks/image/upload/v1583979993/portfolio/html_jqmdao.png"></img>
                    </div>
                    <p className="knowledge-item-title">HTML</p>
                  </div>
                </Col>
                <Col>
                  <div className="knowledge-item">
                    <div className="knowledge-logo-container">
                      <img src="https://res.cloudinary.com/hbmteb7ks/image/upload/v1583979993/portfolio/css_bzott5.png"></img>
                    </div>
                    <p className="knowledge-item-title">CSS</p>
                  </div>
                </Col>
                <Col>
                  <div className="knowledge-item">
                    <div className="knowledge-logo-container">
                      <img src="https://res.cloudinary.com/hbmteb7ks/image/upload/v1583979993/portfolio/js_wfxwvm.png"></img>
                    </div>
                    <p className="knowledge-item-title">JavaScript</p>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h3>Front-End</h3>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="knowledge-item">
                    <div className="knowledge-logo-container">
                      <span className="react-logo">
                        <span className="nucleo"></span>
                      </span>
                    </div>
                    <p className="knowledge-item-title">React</p>
                  </div>
                </Col>
                <Col>
                  <div className="knowledge-item">
                    <div className="knowledge-logo-container">
                      <p className="ejs-logo-text">EJS</p>
                    </div>
                    <p className="knowledge-item-title">Embeded JavaScript</p>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h3>Back-End</h3>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="knowledge-item">
                    <div className="knowledge-logo-container">
                      <img src="https://res.cloudinary.com/hbmteb7ks/image/upload/v1583982631/portfolio/nodejs-logo-png-node-js-on-dark-background-1843_sg1d26.png"></img>
                    </div>
                    <p className="knowledge-item-title">node.js</p>
                  </div>
                </Col>
                <Col>
                  <div className="knowledge-item">
                    <div className="knowledge-logo-container">
                      <p className="express-logo-text">express</p>
                    </div>
                    <p className="knowledge-item-title">express.js</p>
                  </div>
                </Col>
                <Col>
                  <div className="knowledge-item">
                    <div className="knowledge-logo-container">
                      <img src="https://res.cloudinary.com/hbmteb7ks/image/upload/v1583983303/portfolio/mongodb-logo-white_anvha0.png"></img>
                    </div>
                    <p className="knowledge-item-title">mongoDB</p>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h3>Libraries</h3>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Knowledge;
