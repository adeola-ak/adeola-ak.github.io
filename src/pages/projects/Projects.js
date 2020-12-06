import React, { useState, useEffect, Fragment } from "react";
import Navibar from "../../components/navibar/Navibar";
import Footer from "../../components/footer/Footer";
import Tabletop from "tabletop";
import "./Projects.css";

const Projects = () => {
	const [projects, setProjects] = useState([]);

	useEffect(() => {
		Tabletop.init({
			key: "15hl-b3NdtdyqyUn-P5kG1xgbm-2yHpubX_m1A0fR9fE",
			simpleSheet: true,
		})
			.then((data) => setProjects(data))
			.catch((err) => console.warn(err));
	}, []);

	let project = projects.map((project, index) => {
		const handleRepoClick = () => {
			let url = project.repo;
			window.open(url, "_blank");
		};

		const handleLiveClick = () => {
			let url = project.live;
			window.open(url, "_blank");
		};

		return (
			<>
				<div className="proj-card" id={`c${index}`} key={index}>
					<div className="image" id={`i${index}`}>
						<img
							src={project.image}
							alt={project.title}
							style={{ height: "8em" }}
						/>
					</div>
					<div className="proj-info" id={`s${index}`}>
						<h4 className="proj-titl">{project.title}</h4>
						<p className="proj-desc">{project.description}</p>
						<div className="proj-btns">
							<button onClick={handleLiveClick}>live</button>
							<button onClick={handleRepoClick}>
								repository
							</button>
						</div>
					</div>
				</div>
			</>
		);
	});

	return (
		<Fragment>
			<Navibar />

			<div className="proj-container">{project}</div>
			<Footer />
		</Fragment>
	);
};

export default Projects;
