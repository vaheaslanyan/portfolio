import React from "react";

//Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";
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
                        <img src="https://res.cloudinary.com/hbmteb7ks/image/upload/v1584823044/portfolio/HoopScoopLogoNEW_mn8uh2.png" />
                      </div>
                    </Card.Header>
                    <Card.Body>
                      <h4>HoopScoop</h4>
                      <p>A basketball court finder.</p>
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
                        <img src="https://res.cloudinary.com/hsmrn1b8m/image/upload/v1573421644/LevonArt%20Art/Hivand_yxu6he.png" />
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
                        <img src="https://res.cloudinary.com/hbmteb7ks/image/upload/v1584823042/portfolio/ExplorersMapLogoNew_y3mbdy.png" />
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
            </div>
          </Container>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Projects;
