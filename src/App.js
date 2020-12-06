import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Main from "./components/main/Main";
import Projects from "./pages/projects/Projects";

function App() {
	return (
		<Switch>
			<Route exact path="/">
				<Main />
			</Route>

			<Route exact path="/projects">
				<Projects />
			</Route>
		</Switch>
	);
}

export default App;
