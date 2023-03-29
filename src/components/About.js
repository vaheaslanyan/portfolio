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
						<Row>
							<Col>
							<div id="newPortfolioRedirectDiv">
							<div id="newPortfolioRedirectText">This portfolio is deprecated. Check out the new version.</div>
								<a href="https://urartusoftware.com/vahe" id="newPortfolioBtn">
									Go to new portfolio
								</a>
							</div>
							</Col>
						</Row>
						<Row className="justify-content-center">
							<Col>
								<div className="about-content">
									<p>Welcome to my portfolio.</p>
									<p>
										Knowledge and some projects are included
										below.
									</p>
									<p>
										Feel free to reach out to me with any
										questions.
									</p>
									<p>Thank you for your interest.</p>
									<p>Keep scrolling.</p>
								</div>
							</Col>
						</Row>
						<Row className="justify-content-center">
							<Col>
								<div id="bio-div">
									<h5>Quick Bio</h5>
									<p>
										Full-stack software engineer with over 4
										years of experience building web and
										mobile applications (including
										enterprise level).
									</p>
									<p>
										Specialized in{" "}
										<strong>
											Java with Spring boot and Angular
										</strong>{" "}
										while also having competence and
										experience in many other languages,
										frameworks, tools, and libraries.
									</p>
									<p>
										Resolving complex problems with simple
										solutions. Clean code design is a must
										for me. Constantly learning and
										improving. Highly-motivated and driven,
										which lets me work alone easily, however
										I do enjoy working in teams.
									</p>
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
