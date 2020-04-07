import React from "react";

//Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Hello = () => {
  return (
    <React.Fragment>
      <div className="row row-odd row-top">
        <div className="inside-row-div">
          <div className="hello-container-div">
            <Container>
              <Row className="justify-content-center">
                <Col md="auto">
                  <div className="profile-div">
                    <img src="https://res.cloudinary.com/hbmteb7ks/image/upload/v1586229157/portfolio/D9750C43-166A-45E2-BB0F-7DA49DFE8AD0_fp2kyi.jpg" />
                  </div>
                </Col>
              </Row>
              <Row className="justify-content-center text-center">
                <Col md="auto">
                  <h1>
                    <span>Vahe</span> Aslanyan
                  </h1>
                </Col>
              </Row>
            </Container>
            <Container fluid>
              <Row>
                <h2>Full-Stack Software Developer</h2>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Hello;
