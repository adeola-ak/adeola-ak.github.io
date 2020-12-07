import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Main.css";

const Main = () => {
	const [copySuccess, setCopySuccess] = useState("");

	const copyToClipBoard = async (copyMe) => {
		try {
			await navigator.clipboard.writeText(copyMe);
			setCopySuccess(alert("Email Copied"));
		} catch (err) {
			setCopySuccess(alert("Failed to Copy"));
		}
	};

	return (
		<>
			<div className="grid">
				<div className="intro">
					<h1 className="greeting">Hello.</h1>

					<p className="statement">
						I'm Adeola Akinsiku! A curious pioneer who <br></br>
						enjoys turning complex problems into <br></br>
						beautiful, unique, and intuitive designs.
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
						<h3 className="title">about</h3>
						<div className="hover-content">
							I'm an avid learner who loves being able to be
							creative and think outside of the box. When it comes
							to coding, it is important that my code is clean,
							reusable, and adheres to convention, resulting in a
							flawless experience for the user. Outside of coding,
							I'm a little bit of a product junkie. I am also
							intrigued by art and all aspects of design.
							Additionally, I love to travel, try new foods,
							workout, and stay on top of what's going on in the
							world.
						</div>
					</div>
					<div className="section">
						<h3 className="title">projects</h3>
						<div className="hover-content">
							I enjoy building user-centered applications and
							hyper focusing on great product experiences. Take a
							look
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
							Express/Ruby on Rails to create applications that
							I'm passionate about.
						</div>
					</div>

					{/* <div className="section">
						<h3 className="title">Education</h3>
						<div className="hover-content">GA, MSU</div>
					</div> */}

					<div className="section">
						<h3 className="title" id="contact">
							contact
						</h3>
						<div className="hover-content">
							I'd love to hear from you! I'm currently located in
							the NY Metropolitan and I am open to opportunities
							in NY, NJ, and GA.
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
									href="https://www.linkedin.com/in/adeola-a-b0b6b270"
									target="_blank"
									rel="noreferrer"
								>
									<i class="fab fa-linkedin fa-2x"></i>
								</a>
								<a
									href="https://docs.google.com/document/d/1jewZzeNjB6tKnvfCHeGO962OB1sVrwz3EkvNOpCKdyY/edit?usp=sharing"
									target="_blank"
									rel="noreferrer"
								>
									<i class="far fa-file fa-2x"></i>
								</a>
								<a
									href="https://github.com/adeola-ak"
									target="_blank"
									rel="noreferrer"
								>
									<i class="fab fa-github-square fa-2x"></i>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Main;
