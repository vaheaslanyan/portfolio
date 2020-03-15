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
                        <img src="https://lh3.googleusercontent.com/I1XvM2zEgWhlNMvuKrdXSnKJszRiyXGIn20IoKWRIPgf6OoC95PEND6_p5l6N7cVsNtCqa72w6S10mfdn1uyW99VdonI7VO0iawGtWBKa201ivjjU5w9dJAkltuyGUSHIA_0P21FTdD8UEEEBMlAz7-5xbgQrtGvtUiWdPA5lebpg2L3PWVeH81L6daaVnsblvDw1hRZrGqnvnLXfGMLAHS-I-7wPr9Lo55cZtssZaUn_3kpTL0q4DZz0FvJrhhvk_Td6FJVtW0Wj6A2zHkIEP7CrtAgNYFL4uNDJy1c0nozgPsZucqXjfaqxUvjo7jdZ-hwfWrF1Rzr0EdAm3oOKKt229iWGUFDuvPmm3II9OuumtDfiWJzypFadLjVAhbtsHXPlZCAYby5rDZMNdV5reCZn3C4PIXpgfiFSB_4cMcYAW4hayAdhRnECNbQ8n_IT26fAiDSGdDv_01H6kaOb3lMK8kjaNmhLJgeVt4bODK2s2Rj_zJzadSh1TA-UyE_KdcrUQbbzd9AFh2xLDi155Mx-wC-jvKiNFhy1YVppifF_iuEIWrZQ7lNFF1jSf9pqfc8ZlRGOpiLfeVJsixIFwweDVa6pE41EnCzXCUH1pwlO62AoEEAnKLbfCKiTC2k7QTnUo8xTaRdslKesEz9-d0qkO0Ne_38NwCeZrf25rt04k7ayhFE=w809-h824-no" />
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
                        <img src="https://res.cloudinary.com/hoi9g6lgl/image/upload/v1574137905/ExplorersMapLogo_kcx3nh.png" />
                      </div>
                    </Card.Header>
                    <Card.Body>
                      <h4>Explorer's Map</h4>
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
