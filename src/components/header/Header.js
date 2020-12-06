import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
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
						Skillful Areas:<br></br>
						javascript ruby css react express mongoDB ruby on rails
						postgresql
					</p>
				</div>

				<div className="content-links">
					<div className="section">
						<h3 className="title">About</h3>
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
						<h3 className="title">Projects</h3>
						<div className="hover-content">
							I enjoy building user-centered applications that
							fulfil a need or tackle solutions to making ones'
							life easier. Take a look
							<Link to="/projects">
								<i>here</i>
							</Link>{" "}
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
						<h3 className="title">Contact</h3>
						<div className="hover-content">
							I'd love to hear from you! I'm currently located in
							the NY area and am currently open to opportunities
							in NY, NJ, and GA. Add email icon, when email icon
							is clicked email address is copied to lcipboard.
							linkedin, and resume icon
							<div className="icons">
								<i class="far fa-envelope fa-2x"></i>
								<i class="fab fa-linkedin fa-2x"></i>
								<i class="far fa-file fa-2x"></i>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Header;
