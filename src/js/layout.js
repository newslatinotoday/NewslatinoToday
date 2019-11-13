import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
// import { HomePage } from "./views/homePage";
import { Home } from "./views/home";
// import { Casa } from "./views/casa";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";
// import Navbar from "react-bootstrap/Navbar";
import { NavbarHome } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
export const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter>
				<ScrollToTop>
					<NavbarHome />
					<Switch>
						<Route exact path="/" component={Home} />
						{/* <Route exact path="/" component={Casa} /> */}
						<Route path="/demo" component={Demo} />
						{/* <Route exact path="/" component={HomePage} /> */}
						<Route render={() => <h1>Not found!</h1>} />
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
