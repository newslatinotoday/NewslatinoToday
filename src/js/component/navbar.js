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
				<Navbar bg="light" expand="lg">
					<Navbar.Brand className="" href="#home">
						<Link to="/">NewsLatinoToday</Link>
						<i className="far fa-newspaper" />
					</Navbar.Brand>
				</Navbar>
				<Navbar bg="light" expand="lg" className="fullnavbar" fixed="top">
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
