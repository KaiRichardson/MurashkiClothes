import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Search from "./pages/Search";
import NoMatch from "./pages/NoMatch";
import User from "./pages/User";
import AboutUs from "./pages/AboutUs";
import ContributePg from "./pages/ContributePg";

function App() {
	return (
		<Router>
			<div>
				<Switch>
					<Route exact path="/" component={Login} />
					<Route exact path="/main" component={Main} />
					<Route path="/main/search" component={Search} />
					<Route exact path="/main/user" component={User} />
					<Route exact path="/AboutUs" component={AboutUs} />
					<Route exact path="/ContributePg" component={ContributePg} />
					<Route component={NoMatch} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
