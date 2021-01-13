import React, { useState, useEffect, Fragment } from "react";
import Tabletop from "tabletop";
import "./Projects.css";

const Projects = () => {
	const [projects, setProjects] = useState([]);

	useEffect(() => {
		Tabletop.init({
			// key: "15hl-b3NdtdyqyUn-P5kG1xgbm-2yHpubX_m1A0fR9fE",
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
					<div
						className="image"
						id={`i${index}`}
						style={{ marginTop: "-25px" }}
					>
						<img
							src={project.image}
							alt={project.title}
							style={{ height: "12em" }}
						/>
					</div>
					<div className="proj-info" id={`s${index}`}>
						<h4 className="proj-titl">
							<b>{project.title}</b>
						</h4>

						<p className="proj-desc">{project.description}</p>
						<p className="proj-desc">
							skills excercised: {project.built_with}
						</p>

						<div className="proj-btns">
							<i
								class="fas fa-external-link-alt fa-2x"
								id="live"
								onClick={handleLiveClick}
							></i>
							<i
								class="fab fa-github-square fa-2x"
								id="repo"
								onClick={handleRepoClick}
							></i>
						</div>
					</div>
				</div>
			</>
		);
	});

	return (
		<Fragment>
			{/* <Navibar /> */}
			<div>
				<h1 className="page-title">RECENT PROJECTS</h1>
			</div>
			<div className="proj-container">{project}</div>
		</Fragment>
	);
};

export default Projects;
