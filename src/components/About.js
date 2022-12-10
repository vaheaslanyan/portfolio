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
									<p>
										Avoided programming thinking it's boring
										and dull.
									</p>
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
