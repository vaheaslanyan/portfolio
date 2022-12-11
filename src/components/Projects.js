import React from "react";

//Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//import Accordion from "react-bootstrap/Accordion";
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
									<h3>Projects</h3>
									<div>
										<p>
											click on any project icon for
											preview.
										</p>
									</div>
								</Col>
							</Row>
							<Row>
								<Col>
									<Card>
										<Card.Header>
											<div className="icons">
												<a
													href="https://testflight.apple.com/join/FdrrpRJX"
													target="_blank"
													rel="noopener noreferrer"
												>
													<img
														src="https://res.cloudinary.com/hbmteb7ks/image/upload/v1613166380/portfolio/GotGameAppIconBB1024NOALPHA_djyr2m.png"
														alt="GotGame logo"
													/>
												</a>
											</div>
										</Card.Header>
										<Card.Body>
											<h4>GotGame</h4>
											<p>
												A map based iOS application
												allowing users to find
												basketball courts. The app is
												community driven and gives
												registered users the ability to
												add court locations, photos, and
												other relevant data.
											</p>
											<p>
												The app is curently in beta
												testing. You can get access to
												beta by clicking on the project
												image above from any iOS device.
											</p>
											<h5>Main technologies:</h5>
											<ul>
												<li>Swift</li>
												<li>Objective-C</li>
												<li>Firebase</li>
											</ul>
										</Card.Body>
									</Card>
								</Col>
							</Row>
							<Row>
								<Col>
									<Card>
										<Card.Header>
											<div className="icons">
												<a
													href="https://thehoopscoop-app.firebaseapp.com/"
													target="_blank"
													rel="noopener noreferrer"
												>
													<img
														src="https://res.cloudinary.com/hbmteb7ks/image/upload/v1584823044/portfolio/HoopScoopLogoNEW_mn8uh2.png"
														alt="HoopScoop logo"
													/>
												</a>
											</div>
										</Card.Header>
										<Card.Body>
											<h4>HoopScoop</h4>
											<p>
												An initial prototype for GotGame
												iOS app (look above).
											</p>
											<p>
												Will possibly be converted to a
												desktop version of GotGame in
												future.
											</p>
											<h5>Main technologies:</h5>
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
												<a
													href="https://levonart.herokuapp.com/"
													target="_blank"
													rel="noopener noreferrer"
												>
													<img
														src="https://res.cloudinary.com/hsmrn1b8m/image/upload/v1573421644/LevonArt%20Art/Hivand_yxu6he.png"
														alt="LevonArt backdrop"
													/>
												</a>
											</div>
										</Card.Header>
										<Card.Body>
											<h4>LevonArt</h4>
											<p>
												An online art gallery store for
												painter Levon Grujinian.
											</p>
											<h5>Main technologies:</h5>
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
												<a
													href="https://explorersmap.herokuapp.com/"
													target="_blank"
													rel="noopener noreferrer"
												>
													<img
														src="https://res.cloudinary.com/hbmteb7ks/image/upload/v1584823042/portfolio/ExplorersMapLogoNew_y3mbdy.png"
														alt="travlr logo"
													/>
												</a>
											</div>
										</Card.Header>
										<Card.Body>
											<h4>travlr</h4>
											<p>
												A map for travelers to mark
												places traveled.
											</p>
											<h5>Main technologies:</h5>
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
							<Row>
								<Col>
									<Card>
										<Card.Header>
											<div className="icons">
												<a
													href="https://github.com/vaheaslanyan/FoodHero"
													target="_blank"
													rel="noopener noreferrer"
												>
													<img
														src="https://res.cloudinary.com/hbmteb7ks/image/upload/v1670780133/portfolio/Food_Hero_Logo_hk9cjv.png"
														alt="Food Hero logo"
													/>
												</a>
											</div>
										</Card.Header>
										<Card.Body>
											<h4>FoodHero</h4>
											<p>
												A food delivery service
												prototype that includes
												customer, restaurant, and driver
												portals. Once the order is
												placed by a customer, the
												restaurant receives the order
												and marks it complete once it is
												ready to be picked up by a
												driver. The driver accepts the
												delivery, marks it picked up,
												and eventually dropped of once
												it is delivered to the customer.
											</p>
											<p>
												This project was built in a
												team.
											</p>
											<h5>Main technologies:</h5>
											<ul>
												<li>Java</li>
												<li>Spring Boot</li>
												<li>Angular</li>
												<li>PostgreSQL</li>
												<li>Google Cloud Platform</li>
											</ul>
										</Card.Body>
									</Card>
								</Col>
								<Col>
									<Card>
                  <Card.Header>
											<div className="icons">
												<a
													href="https://github.com/vaheaslanyan/FoodHero"
													target="_blank"
													rel="noopener noreferrer"
												>
													<img
														src="https://res.cloudinary.com/hbmteb7ks/image/upload/v1670781925/portfolio/ERSLogo-01_yrmleo.png"
														alt="ESR Employee Reimbursement System Logo"
													/>
												</a>
											</div>
										</Card.Header>
										<Card.Body>
											<h4>Employee Reimbursement System</h4>
											<p>
												An expense tracking and reimbursement system that allows employees to create expense reimbursement requests along with pictures of receipts. Admin can view requests, approve or deny them.
											</p>
											<h5>Main technologies:</h5>
											<ul>
												<li>Java</li>
												<li>HTML/JavaScript/CSS</li>
												<li>PostgreSQL</li>
												<li>Google Cloud Platform</li>
											</ul>
										</Card.Body>
									</Card>
								</Col>
							</Row>
							<Row>
								<Col>
									<div id="projects-notes-div">
										<p>
											Feel free to visit my{" "}
											<a
												href="https://github.com/vaheaslanyan"
												target="_blank"
												rel="noopener noreferrer"
											>
												GitHub page
											</a>{" "}
											where you can find source code for
											many of the projects as well as more
											minor projects.
										</p>
									</div>
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
