import React from "react";

//Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Card } from "react-bootstrap";

const About = () => {
  return (
    <React.Fragment>
      <div className="row row-even">
        <div className="inside-row-div">
          <Container>
            <Row className="justify-content-center">
              <Col>
                <div className="about-content">
                  <p>Was always good with computers.</p>
                  <p>Avoided programming thinking it's boring and dull.</p>
                  <p>Decided to try.</p>
                  <p>Love it.</p>
                  <p>Keep scrolling.</p>
                </div>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col>
              <div id="bio-div">
                <h5>Quick Bio</h5>
                  <p>Junior iOS Developer with 2 years of programming experience. Strong passion for tech, problem solving, and delivering simplistic yet impactful experiences to users.</p>
                  <p>Started in the industry by getting into full-stack web development and gradually moved to iOS engineering. Resolving complex problems with simple solutions. Good practices of clean code design. Always eager to learn and improve. Highly-motivated self-learner and a good team player</p>
              </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;
