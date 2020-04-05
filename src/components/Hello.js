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
                    <img src="https://lh3.googleusercontent.com/MypYdeg-rwzyA9MIWrHxD81ZZqasbPrNz-9wIVFNDbSmSpMNF_LVyQXpjXXzyHvXDW6NVqZCYzhy2fxDNjwFAWYKyxOxi1s0ny53BaPNc_1D-FQsJ-QtntmkRYTY0wTa8CGOxIHjXehRcWZkRHNpl3upy1O2nnwKvyrIDsLWAWZ8QzXpf6ea-wUuVlnDSzs7WtChxHrTlzFQiaYAGwg3FzlcQfJvt-9KkRXTBZ70cGNbEUG4qWOjiBQIaCuLYEWV1HjGzrgYc83uV5ke6k1bVNMz3PttVVMihGokyGjFAWkVo0h3muQbEOp5glD5sfW7IK8A6dxUeYG4pq4Ftzo_qw2yqvthU-M2bRViuAoLQS6Hq2IpKsUTU0746PXqYtiif-p5xAbvXenffcJ0xgMjBQCYroB0TlFFaoy8mjNmFciINW0LGvC5FOm6AsPthN8kNE5oELNpe55P5c0zQiqpQZqSdR3JCFB0q3We0emniQlHIw5BNfQ_2AN2_SRxb6dRofnUhCde_iu9dXRT2e3r1NvVcBSOy8FfnvIhAikLso_FBOBFaF-RdC5WK_BbwAlyX6FC5eXfsLr7wNnXhbfFuwGxI_a4sNiNDmfdNVaKr28hKWX8X0joSSSk50IYXaJs2V5CTJPbgO4HVs3eqWCHFEN-Wk5gipfRRsEEkAa411_QDobpWgOea28i4LxXNStS2w=s824-w809-h824-no" />
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
