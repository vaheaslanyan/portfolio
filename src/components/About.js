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
            <div className="about-content"></div>
          </Container>
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;
