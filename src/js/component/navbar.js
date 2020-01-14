import React from "react";
import "../../styles/home.scss";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

export class NavbarHome extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div className="icons ml-auto pr-5 pt-3 img-fluid max-width-100%">
					<i className="fab fa-instagram icon" />

					<i className="fab fa-twitter icon" />

					<i className="fab fa-facebook icon" />
				</div>
				<Navbar bg="light" expand="lg">
					<Navbar.Brand className="" href="#home">
						<Link to="/">
							<img
								src="https://scontent.fmia1-1.fna.fbcdn.net/v/t1.15752-9/83194744_599465614209879_3208406626709012480_n.png?_nc_cat=108&_nc_oc=AQkxY8VZg0_V1rl-zuezge-EyAAw2eXJXYhYt3yiZfZvyzfZ3Ut1HwVIYCSfgdwKHrg2o-GgnuYrCWyjB-yACm17&_nc_ht=scontent.fmia1-1.fna&oh=1fe7f5d32987f7527636ba8a8931d86d&oe=5ED9BC60"
								height="150"
								width="350"
								className="img-fluid max-width-100%"
								alt="..."
							/>
						</Link>
					</Navbar.Brand>
				</Navbar>
				<Navbar bg="light" expand="lg" className="fullnavbar" sticky="top">
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav>
							<Nav.Link href="#home">
								<Link to="/seccion-comunidad">
									<div>COMUNIDAD</div>
								</Link>
							</Nav.Link>
							<Nav.Link href="#nosotros">
								<Link to="/seccion-deportes">
									<div>DEPORTES</div>
								</Link>
							</Nav.Link>
							<Nav.Link href="#nosotros">
								<Link to="/seccion-noticias">
									<div>NOTICIAS</div>
								</Link>
							</Nav.Link>
							<Nav.Link href="#galeria">
								<Link to="/sponsors">
									<div>SPONSORS</div>
								</Link>
							</Nav.Link>
							<Nav.Link href="#galeria">
								<Link to="">
									<div>APOYA A NEWS LATINO TODAY</div>
								</Link>
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</React.Fragment>
		);
	}
}
