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
						<Link to="/">
							<img
								src="https://scontent.fmia1-2.fna.fbcdn.net/v/t1.15752-9/81700594_520547998584329_1374220845584482304_n.png?_nc_cat=110&_nc_oc=AQmuoFtfUrNQwOCvVHo7EVyNYLn5hvEg8V9PQESrIpQ0DZItUtoTOukdD396Fh9gzjk&_nc_ht=scontent.fmia1-2.fna&oh=b9a4b4cdc8407f8a6754489187176b27&oe=5E91BBB7"
								height="150"
								width="350"
								className="img-fluid max-width-100%"
								alt="..."
							/>
						</Link>
					</Navbar.Brand>
					{/* <div className="icons">COMUNIDAD</div> */}
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
