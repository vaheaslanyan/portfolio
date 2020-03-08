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
                    <img src="https://lh3.googleusercontent.com/I1XvM2zEgWhlNMvuKrdXSnKJszRiyXGIn20IoKWRIPgf6OoC95PEND6_p5l6N7cVsNtCqa72w6S10mfdn1uyW99VdonI7VO0iawGtWBKa201ivjjU5w9dJAkltuyGUSHIA_0P21FTdD8UEEEBMlAz7-5xbgQrtGvtUiWdPA5lebpg2L3PWVeH81L6daaVnsblvDw1hRZrGqnvnLXfGMLAHS-I-7wPr9Lo55cZtssZaUn_3kpTL0q4DZz0FvJrhhvk_Td6FJVtW0Wj6A2zHkIEP7CrtAgNYFL4uNDJy1c0nozgPsZucqXjfaqxUvjo7jdZ-hwfWrF1Rzr0EdAm3oOKKt229iWGUFDuvPmm3II9OuumtDfiWJzypFadLjVAhbtsHXPlZCAYby5rDZMNdV5reCZn3C4PIXpgfiFSB_4cMcYAW4hayAdhRnECNbQ8n_IT26fAiDSGdDv_01H6kaOb3lMK8kjaNmhLJgeVt4bODK2s2Rj_zJzadSh1TA-UyE_KdcrUQbbzd9AFh2xLDi155Mx-wC-jvKiNFhy1YVppifF_iuEIWrZQ7lNFF1jSf9pqfc8ZlRGOpiLfeVJsixIFwweDVa6pE41EnCzXCUH1pwlO62AoEEAnKLbfCKiTC2k7QTnUo8xTaRdslKesEz9-d0qkO0Ne_38NwCeZrf25rt04k7ayhFE=w809-h824-no" />
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
                <h3>Full-Stack Software Developer</h3>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Hello;
