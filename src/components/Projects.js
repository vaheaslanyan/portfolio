import React from "react";

//Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

const Projects = () => {
  return (
    <React.Fragment>
      <div className="row row-odd">
        <div className="inside-row-div">
          <Container>
            <div className="project-div">
              <Row>
                <Col>
                  <h3>Some Projects</h3>
                </Col>
              </Row>
              <Row>
              <Col>
                  <Card>
                    <Card.Header>
                      <div className="icons">
                        <a
                          href="https://testflight.apple.com/join/FdrrpRJX"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img src="https://res.cloudinary.com/hbmteb7ks/image/upload/v1613166380/portfolio/GotGameAppIconBB1024NOALPHA_djyr2m.png" alt="GotGame logo" />
                        </a>
                      </div>
                    </Card.Header>
                    <Card.Body>
                      <h4>GotGame</h4>
                      <p>
                        A map based iOS application allowing users to find basketball courts. The app is community driven and gives registered users the ability to add court locations, photos, and other relevant data.
                      </p>
                      <p>
                        The app is curently in beta testing. You can get access to beta by clicking on the project image above from any iOS device.
                      </p>
                      <h5>Languages used</h5>
                      <ul>
                        <li>Swift</li>
                        <li>Objective-C</li>
                        <li>Heroku</li>
                      </ul>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Card>
                    <Card.Header>
                      <div className="icons">
                        <a
                          href="https://thehoopscoop-app.firebaseapp.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img src="https://res.cloudinary.com/hbmteb7ks/image/upload/v1584823044/portfolio/HoopScoopLogoNEW_mn8uh2.png" alt="HoopScoop logo"/>
                        </a>
                      </div>
                    </Card.Header>
                    <Card.Body>
                      <h4>HoopScoop</h4>
                      <p>An initial prototype for GotGame iOS app (look above).</p>
                      <p>Will possibly be converted to a desktop version of GotGame in future.</p>
                      <h5>Languages used</h5>
                      <ul>
                        <li>HTML, CSS, JS</li>
                        <li>React.js</li>
                        <li>Node.js, Express</li>
                        <li>MongoDB</li>
                      </ul>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card>
                    <Card.Header>
                      <div className="icons">
                        <a
                          href="https://levonart.herokuapp.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img src="https://res.cloudinary.com/hsmrn1b8m/image/upload/v1573421644/LevonArt%20Art/Hivand_yxu6he.png" alt="LevonArt backdrop"/>
                        </a>
                      </div>
                    </Card.Header>
                    <Card.Body>
                      <h4>LevonArt</h4>
                      <p>
                        An online art gallery store for painter Levon Grujinian.
                      </p>
                      <h5>Languages used</h5>
                      <ul>
                        <li>HTML, CSS, JS</li>
                        <li>EJS</li>
                        <li>Node.js, Express</li>
                        <li>MongoDB</li>
                        <li>Bootstrap</li>
                      </ul>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card>
                    <Card.Header>
                      <div className="icons">
                        <a
                          href="https://explorersmap.herokuapp.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img src="https://res.cloudinary.com/hbmteb7ks/image/upload/v1584823042/portfolio/ExplorersMapLogoNew_y3mbdy.png" alt="travlr logo"/>
                        </a>
                      </div>
                    </Card.Header>
                    <Card.Body>
                      <h4>travlr</h4>
                      <p>A map for travelers to mark places traveled.</p>
                      <h5>Languages used</h5>
                      <ul>
                        <li>HTML, CSS, JS</li>
                        <li>EJS</li>
                        <li>Node.js, Express</li>
                        <li>MongoDB</li>
                        <li>Bootstrap</li>
                      </ul>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col>
                <div id="projects-notes-div">
                  <p>Feel free to visit my <a href="https://github.com/vaheaslanyan" target="_blank" rel="noopener noreferrer">GitHub page</a> , where you can find source code for many of the projects as well as mire minor projects</p>
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

export default Projects;
