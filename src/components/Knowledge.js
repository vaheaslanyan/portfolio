import React from "react";

//Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Knowledge = () => {
  return (
    <React.Fragment>
      <div className="row row-even">
        <div className="inside-row-div">
          <Container>
            <div className="knowledge-content ">
              <Row>
                <Col>
                  <h3>Languages and Frameworks</h3>
                </Col>
              </Row>
              <Row>
              <Col>
                  <div className="knowledge-item knowledge-normal">
                    <div className="knowledge-logo-container">
                      <img src="https://res.cloudinary.com/hbmteb7ks/image/upload/v1589745201/portfolio/58482ce4cef1014c0b5e4a4c_xuguox.png" alt="Swif programming language logo"></img>
                    </div>
                    <h5 className="knowledge-item-title">Swift</h5>
                  </div>
                </Col>
                <Col>
                  <div className="knowledge-item knowledge-normal">
                    <div className="knowledge-logo-container">
                      <img src="https://res.cloudinary.com/hbmteb7ks/image/upload/v1613164146/portfolio/1200px-C_Sharp_logo.svg_sphsun.png" alt="C# programming language logo"></img>
                    </div>
                    <h5 className="knowledge-item-title">C#</h5>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="knowledge-item knowledge-normal">
                    <div className="knowledge-logo-container">
                      <img src="https://res.cloudinary.com/hbmteb7ks/image/upload/v1583979993/portfolio/html_jqmdao.png" alt="HTML programming language logo"></img>
                    </div>
                    <h5 className="knowledge-item-title">HTML</h5>
                  </div>
                </Col>
                <Col>
                  <div className="knowledge-item knowledge-normal">
                    <div className="knowledge-logo-container">
                      <img src="https://res.cloudinary.com/hbmteb7ks/image/upload/v1583979993/portfolio/css_bzott5.png" alt="CSS programming language logo"></img>
                    </div>
                    <h5 className="knowledge-item-title">CSS</h5>
                  </div>
                </Col>
                <Col>
                  <div className="knowledge-item knowledge-normal">
                    <div className="knowledge-logo-container">
                      <img src="https://res.cloudinary.com/hbmteb7ks/image/upload/v1583979993/portfolio/js_wfxwvm.png" alt="JavaScript programming language logo"></img>
                    </div>
                    <h5 className="knowledge-item-title">JavaScript</h5>
                  </div>
                </Col>
              </Row>
              <Row>
                
                <Col>
                  <div className="knowledge-item knowledge-normal">
                    <div className="knowledge-logo-container">
                      <p className="ejs-logo-text">EJS</p>
                    </div>
                    <h5 className="knowledge-item-title">Embeded JavaScript</h5>
                  </div>
                </Col>
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
                      <p className="express-logo-text">express</p>
                    </div>
                    <h5 className="knowledge-item-title">express.js</h5>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h3>Platforms and Environments</h3>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="knowledge-item knowledge-normal">
                    <div className="knowledge-logo-container">
                      <img src="https://res.cloudinary.com/hbmteb7ks/image/upload/v1583983273/portfolio/nodejs-logo-png-node-js-on-dark-background-1843_hqynup.png" alt="Node.js logo"></img>
                    </div>
                    <h5 className="knowledge-item-title">node.js</h5>
                  </div>
                </Col>
                <Col>
                  <div className="knowledge-item knowledge-normal">
                    <div className="knowledge-logo-container">
                      <img src="https://res.cloudinary.com/hbmteb7ks/image/upload/v1583983303/portfolio/mongodb-logo-white_anvha0.png" alt="mongoDB logo"></img>
                    </div>
                    <h5 className="knowledge-item-title">mongoDB</h5>
                  </div>
                </Col>
              </Row>
              <Row>
              <Col>
                  <div className="knowledge-item knowledge-normal">
                    <div className="knowledge-logo-container">
                      <img src="https://res.cloudinary.com/hbmteb7ks/image/upload/v1613166047/portfolio/heroku-5-569467_nyhbth.png" alt="Heroku logo"></img>
                    </div>
                    <h5 className="knowledge-item-title">Heroku</h5>
                  </div>
                </Col>
                <Col>
                  <div className="knowledge-item knowledge-normal">
                    <div className="knowledge-logo-container">
                      <img src="https://res.cloudinary.com/hbmteb7ks/image/upload/v1613166046/portfolio/google_firebase-2-512_mztohl.png" alt="Firebase logo"></img>
                    </div>
                    <h5 className="knowledge-item-title">Firebase</h5>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h3>Libraries</h3>
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
                      <img src="https://res.cloudinary.com/hbmteb7ks/image/upload/v1613166226/portfolio/unnamed_vahmjh.png" alt="ASP.NET logo"></img>
                    </div>
                    <h5 className="knowledge-item-title">ASP.NET</h5>
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
