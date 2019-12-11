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
import { DeportesOne } from "./component/deportesOne";
import { DeportesTwo } from "./component/deportes2";
import { DeportesThree } from "./component/deportes3";
import { ComunidadOne } from "./component/comunidad1";
import { ComunidadTwo } from "./component/comunidad2";
import { ComunidadThree } from "./component/comunidad3";
import { NoticiasOne } from "./component/noticias1";
import { NoticiasTwo } from "./component/noticias2";
import { NoticiasThree } from "./component/noticias3";
import { SeccionDeportes } from "./component/seccionDeportes";
import { SeccionComunidad } from "./component/seccionComunidad";
import { SeccionNoticias } from "./component/seccionNoticias";
import { Sponsors } from "./component/sponsors";
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
						<Route exact path="/deportes-noticia-uno" component={DeportesOne} />
						<Route exact path="/deportes-noticia-dos" component={DeportesTwo} />
						<Route exact path="/deportes-noticia-tres" component={DeportesThree} />
						<Route exact path="/noticias-uno" component={NoticiasOne} />
						<Route exact path="/noticias-dos" component={NoticiasTwo} />
						<Route exact path="/noticias-tres" component={NoticiasThree} />
						<Route exact path="/comunidad-uno" component={ComunidadOne} />
						<Route exact path="/comunidad-dos" component={ComunidadTwo} />
						<Route exact path="/comunidad-tres" component={ComunidadThree} />
						<Route exact path="/seccion-deportes" component={SeccionDeportes} />
						<Route exact path="/seccion-comunidad" component={SeccionComunidad} />
						<Route exact path="/sponsors" component={Sponsors} />
						<Route exact path="/seccion-noticias" component={SeccionNoticias} />
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
