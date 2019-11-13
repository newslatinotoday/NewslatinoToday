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
			<Navbar bg="primary" expand="lg">
				<div className="container">
					<Navbar.Brand className="ml-3" href="#home">
						NewsLatinoToday
						<i className="far fa-newspaper" />
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ml-auto">
							<Nav.Link href="#home">
								<div>INICIO</div>
							</Nav.Link>
							<Nav.Link href="#nosotros">
								<div>NOSOTROS</div>
							</Nav.Link>
							<Nav.Link href="#contacto">CONTACTO</Nav.Link>
							<Nav.Link href="#galeria">
								<div>GALERÍA</div>
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</div>
			</Navbar>
			// <Navbar bg="primary" variant="dark">
			// 	<Navbar.Brand href="#home">NewsLatinoToday</Navbar.Brand>
			// 	<Nav className="container">
			// 		<Nav.Link href="#inicio">INICIO/HOME</Nav.Link>
			// 		<Nav.Link href="#nosotros">NOSOTROS/ABOUT US</Nav.Link>
			// 		<Nav.Link href="#contacto">CONTACTO/CONTACT US</Nav.Link>
			// 		<Nav.Link href="#galeria">GALERÍA/GALLERY</Nav.Link>
			// 	</Nav>
			// 	{/* <Form inline>
			// 		<FormControl type="text" placeholder="Search" className="mr-sm-2" />
			// 		<Button variant="outline-light">Search</Button>
			// 	</Form> */}
			// </Navbar>
		);
	}
}
