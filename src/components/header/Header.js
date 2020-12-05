import React from "react";
import "./Header.css";

const Header = () => {
	return (
		<>
			<div className="grid">
				<div className="intro">
					<h1 className="greeting">hello.</h1>
					<p className="statement">
						I'm Adeola Akinsiku! a curious pioneer that <br></br>
						enjoys turning complex problems into <br></br>
						beautiful, and unique intuitive designs.
					</p>
					<p className="skills-list">
						Tech Stack:<br></br>
						javascript<br></br>
						ruby<br></br>
						css<br></br>
						react<br></br>
						express<br></br>
						mongoDB<br></br>
						ruby on rails<br></br>
						postgresql
					</p>
				</div>

				<div className="content-links">
					<div>
						<h3 className="link">about</h3>
					</div>
					<div>
						<h3 className="link">projects</h3>
					</div>
					<div>
						<h3 className="link">contact</h3>
					</div>
				</div>
			</div>
		</>
	);
};

export default Header;
