import React, { Fragment } from "react";
import "./Contact.css";
import Slide from "react-reveal/Slide";
import Bounce from "react-reveal/Bounce";

const Contact = () => {
	return (
		<Fragment>
			<div className="container">
				<div>
					<Slide left>
						<h1 className="page-title-contact">CONTACT</h1>{" "}
					</Slide>
				</div>

				<Bounce bottom>
					<div className="top">
						<h4 className="title-contact">inbox</h4>
						<h1 className="info-contact">adeola.ak@outlook.com</h1>
					</div>

					<div className="bottom">
						<h4 className="title-contact">connect</h4>
						<a
							href="https://www.linkedin.com/in/adeola-a-b0b6b270"
							style={{ textDecoration: "none" }}
						>
							<h1 className="info-contact">LinkedIn</h1>
						</a>
						<a
							href="https://github.com/adeola-ak"
							style={{ textDecoration: "none" }}
						>
							<h1 className="info-contact">GitHub</h1>
						</a>
					</div>
				</Bounce>
			</div>
		</Fragment>
	);
};

export default Contact;
