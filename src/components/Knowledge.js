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
            <div className="knowledge-content ">
              <Row>
                <Col>
                  <h3>Must-haves</h3>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="knowledge-item knowledge-normal">
                    <div className="knowledge-logo-container">
                      <img src="https://res.cloudinary.com/hbmteb7ks/image/upload/v1583979993/portfolio/html_jqmdao.png"></img>
                    </div>
                    <h5 className="knowledge-item-title">HTML</h5>
                  </div>
                </Col>
                <Col>
                  <div className="knowledge-item knowledge-normal">
                    <div className="knowledge-logo-container">
                      <img src="https://res.cloudinary.com/hbmteb7ks/image/upload/v1583979993/portfolio/css_bzott5.png"></img>
                    </div>
                    <h5 className="knowledge-item-title">CSS</h5>
                  </div>
                </Col>
                <Col>
                  <div className="knowledge-item knowledge-normal">
                    <div className="knowledge-logo-container">
                      <img src="https://res.cloudinary.com/hbmteb7ks/image/upload/v1583979993/portfolio/js_wfxwvm.png"></img>
                    </div>
                    <h5 className="knowledge-item-title">JavaScript</h5>
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
                  <div className="knowledge-item knowledge-normal">
                    <div className="knowledge-logo-container">
                      <div className="react-logo">
                        <div className="nucleo"></div>
                      </div>
                    </div>
                    <h5 className="knowledge-item-title">React</h5>
                  </div>
                </Col>
                <Col>
                  <div className="knowledge-item knowledge-normal">
                    <div className="knowledge-logo-container">
                      <p className="ejs-logo-text">EJS</p>
                    </div>
                    <h5 className="knowledge-item-title">Embeded JavaScript</h5>
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
                  <div className="knowledge-item knowledge-normal">
                    <div className="knowledge-logo-container">
                      <img src="https://res.cloudinary.com/hbmteb7ks/image/upload/v1583983273/portfolio/nodejs-logo-png-node-js-on-dark-background-1843_hqynup.png"></img>
                    </div>
                    <h5 className="knowledge-item-title">node.js</h5>
                  </div>
                </Col>
                <Col>
                  <div className="knowledge-item knowledge-normal">
                    <div className="knowledge-logo-container">
                      <p className="express-logo-text">express</p>
                    </div>
                    <h5 className="knowledge-item-title">express.js</h5>
                  </div>
                </Col>
                <Col>
                  <div className="knowledge-item knowledge-normal">
                    <div className="knowledge-logo-container">
                      <img src="https://res.cloudinary.com/hbmteb7ks/image/upload/v1583983303/portfolio/mongodb-logo-white_anvha0.png"></img>
                    </div>
                    <h5 className="knowledge-item-title">mongoDB</h5>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h3>Libraries and Deployment</h3>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="knowledge-item knowledge-mini">
                    <h5 className="library-name">Bootstrap</h5>
                  </div>
                </Col>
                <Col>
                  <div className="knowledge-item knowledge-mini">
                    <h5 className="library-name">jQuery</h5>
                  </div>
                </Col>
                <Col>
                  <div className="knowledge-item knowledge-mini">
                    <h5 className="library-name">Heroku</h5>
                  </div>
                </Col>
                <Col>
                  <div className="knowledge-item knowledge-mini">
                    <h5 className="library-name">Firebase</h5>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h3>Currently Learning</h3>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="knowledge-item knowledge-normal">
                    <div className="knowledge-logo-container">
                      <img src="https://res.cloudinary.com/hbmteb7ks/image/upload/v1584309126/portfolio/swiftui-96x96_2x_kkibsb.png"></img>
                    </div>
                    <h5 className="knowledge-item-title">SwiftUI</h5>
                  </div>
                </Col>
                <Col>
                  <div className="knowledge-item knowledge-normal">
                    <div className="knowledge-logo-container">
                      <div className="react-logo">
                        <div className="nucleo"></div>
                      </div>
                    </div>
                    <h5 className="knowledge-item-title">React Native</h5>
                  </div>
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
