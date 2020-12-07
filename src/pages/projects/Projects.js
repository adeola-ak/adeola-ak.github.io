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
						<h4 className="proj-titl">
							<b>{project.title}</b>
						</h4>

						<p className="proj-desc">{project.description}</p>
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
			<Navibar />
			<div>
				<h1 className="page-title">recent projects</h1>
			</div>
			<div className="proj-container">{project}</div>
			<Footer />
		</Fragment>
	);
};

export default Projects;
