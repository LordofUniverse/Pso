import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Settings from "./Settings";

import {
	BrowserRouter as Router,
	Switch,
	Route,
	// Link
} from "react-router-dom";

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<Switch>
				<Route path="/settings">
					<Settings />
				</Route>
				<Route path="/">
					<App />
				</Route>
			</Switch>
		</Router>
	</React.StrictMode>,
	document.getElementById("root")
);
