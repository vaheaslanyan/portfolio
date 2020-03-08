import React from "react";

//Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const About = () => {
  return (
    <React.Fragment>
      <div className="row row-even">
        <div className="inside-row-div">
          <Container>
            <Row>
              <Col>
                <div className="about-content">
                  <p>Was always good with computers.</p>
                  <p>Avoided programming thinking it's boring and dull.</p>
                  <p>Decided to try.</p>
                  <p>Love it.</p>
                  <br />
                  <br />
                  <br />
                  <br />
                  <p>Keep scrolling.</p>
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
