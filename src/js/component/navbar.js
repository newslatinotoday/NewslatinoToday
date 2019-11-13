import React from "react";
import "../../styles/home.scss";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import NavDropdown from "react-bootstrap/NavDropdown";
export class NavbarHome extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Navbar bg="light" expand="lg">
					<Navbar.Brand className="m-auto" href="#home">
						NewsLatinoToday
						<i className="far fa-newspaper" />
					</Navbar.Brand>
				</Navbar>
				<Navbar bg="light" expand="lg">
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav>
							<Nav.Link href="#home">
								<div>COMUNIDAD</div>
							</Nav.Link>
							<Nav.Link href="#nosotros">
								<div>DEPORTES</div>
							</Nav.Link>
							<Nav.Link href="#contacto">NOTICIAS</Nav.Link>
							<Nav.Link href="#galeria">
								<div>SPONSORS</div>
							</Nav.Link>
							<Nav.Link href="#galeria">
								<div>APOYA A NEWS LATINO TODAY</div>
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</React.Fragment>
		);
	}
}
