import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Main from "./pages/main/Main";
import Projects from "./pages/projects/Projects";
import Footer from "../src/components/footer/Footer";
import Navibar from "../src/components/navibar/Navibar";
import Contact from "./pages/contact/Contact";

function App() {
	return (
		<BrowserRouter basename={window.location.pathname || ""}>
			<Route exact path="/">
				<Main />
			</Route>

			<Route exact path="/projects">
				<Navibar />
				<Projects />
			</Route>

			<Route exact path="/contact">
				<Navibar />
				<Contact />
			</Route>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
