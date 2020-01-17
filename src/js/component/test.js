import React from "react";
import "../../styles/home.scss";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import useWindowScrollPosition from "@rehooks/window-scroll-position";
export const Test = () => {
	// optionally you can pass options, those are default:
	let options = {
		throttle: 100
	};
	let position = useWindowScrollPosition(options);
	console.log(position);
	// position == { x: 0, y: 0 }
	return position.y < 191 ? (
		<Navbar
			expand="lg"
			className="fullnavbar stop-sticky"
			sticky="top"
			style={{ backgroundColor: window.scrollY > 10 ? "white" : "transparent" }}>
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
							<div>APOYA A COMUNIDAD VIDA NUEVA</div>
						</Link>
					</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	) : (
		<Navbar
			expand="lg"
			className="fullnavbar stop-sticky"
			fixed="top"
			style={{ backgroundColor: window.scrollY > 10 ? "white" : "transparent" }}>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav>
					<Nav.Link href="#home">
						<Link to="/seccion-comunidad">
							<div>
								<img
									src="https://scontent.fmia1-1.fna.fbcdn.net/v/t1.15752-9/83194744_599465614209879_3208406626709012480_n.png?_nc_cat=108&_nc_oc=AQkxY8VZg0_V1rl-zuezge-EyAAw2eXJXYhYt3yiZfZvyzfZ3Ut1HwVIYCSfgdwKHrg2o-GgnuYrCWyjB-yACm17&_nc_ht=scontent.fmia1-1.fna&oh=1fe7f5d32987f7527636ba8a8931d86d&oe=5ED9BC60"
									height="150"
									width="41"
									className="img-fluid max-width-100% mr-3"
									alt="..."
								/>
							</div>
						</Link>
					</Nav.Link>
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
							<div>APOYA A COMUNIDAD VIDA NUEVA</div>
						</Link>
					</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};
