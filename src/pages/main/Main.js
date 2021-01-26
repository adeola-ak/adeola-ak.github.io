import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Main.css";
import Navibar from "../../components/navibar/Navibar";

const Main = () => {
	const [copySuccess, setCopySuccess] = useState("");

	const copyToClipBoard = async (copyMe) => {
		try {
			await navigator.clipboard.writeText(copyMe);
			setCopySuccess(alert("Email Copied"));
		} catch (err) {
			setCopySuccess(
				alert("Failed to Autocopy Email Address: adeola.ak@outlook.com")
			);
		}
	};

	return (
		<>
			<div
				className="test"
				id="display-nav-mobile"
				style={{ display: "none" }}
			>
				<Navibar />
			</div>
			<div className="grid">
				<div className="intro">
					<h1 className="greeting">Hello.</h1>

					<p className="statement">
						I'm Adeola! A curious pioneer who <br></br>
						enjoys turning complex problems into <br></br>
						beautiful, unique, and intuitive software.
					</p>

					<p className="skills-list">
						<b>SKILLFUL AREAS:</b>
						<br></br>
						Javascript, Ruby, CSS, React, Express, mongoDB, Rails,
						postgreSQL
					</p>
				</div>
				<div className="content-links">
					<div className="section">
						<h3 className="title">ABOUT</h3>
						<div className="hover-content" id="about">
							<div className="mobile-img">
								<img
									src="https://res.cloudinary.com/dusr8fbuo/image/upload/v1607567617/Screen_Shot_2020-12-09_at_9.25.22_PM_uvzufz.png"
									alt={"about"}
									style={{
										height: "10em",
										opacity: ".5",
										filter: "blur(2px) sepia(.6)",
									}}
								/>
								<div className="mobile-txt-container">
									ABOUT &nbsp;
								</div>
							</div>
							<p className="section-text">
								I'm an avid learner who loves being able to be
								creative and think outside of the box. When it
								comes to coding, it is important that my code is
								clean, reusable, and adheres to convention,
								resulting in a flawless experience for the user.
								Outside of coding, I'm a little bit of a product
								junkie. I am also intrigued by art and all
								aspects of design. Additionally, I love to
								travel, try new foods, workout, and stay current
								with what is going on in the world.
							</p>
							<hr></hr>
						</div>
					</div>
					<div className="section">
						<h3 className="title">PROJECTS</h3>
						<Link
							to="/projects"
							style={{ color: "black", textDecoration: "none" }}
						>
							<div className="hover-content">
								<div className="mobile-img">
									<img
										src="https://res.cloudinary.com/dusr8fbuo/image/upload/v1607299788/kevin-bhagat-zNRITe8NPqY-unsplash_a3q93n.jpg"
										alt={"projects"}
										style={{
											height: "10em",
											opacity: ".5",
											filter: "blur(2px) sepia(.6)",
										}}
									/>
									<div className="mobile-txt-container">
										PROJECTS &nbsp;
									</div>
								</div>
								<p className="section-text">
									{" "}
									I enjoy building user-centered applications
									and hyper focusing on great product
									experiences. Take a look
									<Link
										to="/projects"
										style={{
											color: "rgb(251, 207, 156)",
											fontWeight: "bold",
										}}
									>
										<span id="here-link">
											{" "}
											<i> here </i>
										</span>
									</Link>
									at how I use technologies like React and
									Express/Ruby on Rails to create applications
									that I'm passionate about.
								</p>
								<hr></hr>
							</div>
						</Link>
					</div>
					<div className="section">
						<h3 className="title" id="contact">
							CONTACT
						</h3>
						<div className="hover-content">
							<div className="mobile-img">
								<img
									src="https://res.cloudinary.com/dusr8fbuo/image/upload/v1607299767/solen-feyissa-LBNJi8qHIbA-unsplash_hbyq2x.jpg"
									alt={"contact"}
									style={{
										height: "10em",
										mixBlendMode: "multiply",
										opacity: ".5",
										filter: "blur(2px) sepia(1)",
									}}
								/>
								<div className="mobile-txt-container">
									CONTACT &nbsp;
								</div>
							</div>
							<p className="section-text">
								I'd love to hear from you! I'm currently located
								in the NY Metropolitan area and I am open to
								opportunities in NY, NJ, and GA. Linked below
								are my email address, resume, LinkedIn, and
								GitHub profiles.
							</p>
							<div className="social-icons">
								{/* <a href="" target="_blank" rel="noreferrer"> */}
								{/* <button
									className="email-btn"
									onClick={() =>
										copyToClipBoard("adeola.ak@outlook.com")
									}
								> */}
								<i
									class="far fa-envelope fa-2x"
									onClick={() =>
										copyToClipBoard("adeola.ak@outlook.com")
									}
								></i>
								{/* </button> */}
								{copySuccess}
								{/* </a> */}
								<a
									href="https://docs.google.com/document/d/1jewZzeNjB6tKnvfCHeGO962OB1sVrwz3EkvNOpCKdyY/export?format=pdf"
									target="_blank"
									rel="noreferrer"
									download
								>
									<i class="far fa-file fa-2x"></i>
								</a>
								<a
									href="https://www.linkedin.com/in/adeola-a-b0b6b270"
									target="_blank"
									rel="noreferrer"
								>
									<i class="fab fa-linkedin fa-2x"></i>
								</a>
								<a
									href="https://github.com/adeola-ak"
									target="_blank"
									rel="noreferrer"
								>
									<i class="fab fa-github-square fa-2x"></i>
								</a>
							</div>
							<hr></hr>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Main;
