import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Main from "./pages/main/Main";
import Projects from "./pages/projects/Projects";
import Footer from "../src/components/footer/Footer";

function App() {
	return (
		<BrowserRouter basename={window.location.pathname || ""}>
			<Route exact path="/">
				<Main />
			</Route>

			<Route exact path="/projects">
				<Projects />
			</Route>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
