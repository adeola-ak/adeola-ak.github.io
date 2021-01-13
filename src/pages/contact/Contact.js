import React, { Fragment } from "react";
import "./Contact.css";

const Contact = () => {
	return (
		<Fragment>
			<div className="container">
				<div>
					<h1 className="page-title-contact">CONTACT</h1>
				</div>

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
			</div>
		</Fragment>
	);
};

export default Contact;
