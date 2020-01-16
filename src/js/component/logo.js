import React from "react";
import "../../styles/home.scss";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

export class LatinoLogo extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div className="container icons img-fluid max-width-100%">
					<a href="https://www.instagram.com/newslatinotoday/?igshid=1dry1vf5zy37a">
						<i className="fab fa-instagram icon" />
					</a>
					<a href="https://twitter.com/intent/follow?original_referer=https%3A%2F%2Fwww.fnmaker.com%2Ftwitterforpage%2Ftab%2F&ref_src=twsrc%5Etfw&screen_name=NewsLatinoToday&tw_p=followbutton">
						<i className="fab fa-twitter icon" />
					</a>
					<a href="https://www.facebook.com/NewsLatinoToday/">
						<i className="fab fa-facebook icon" />
					</a>
				</div>
				{/* <Navbar bg="light" expand="lg">
                    <Navbar.Brand className="" href="#home"> */}
				<div className="logoHome container text-center">
					<Link to="/">
						<img
							src="https://scontent.fmia1-1.fna.fbcdn.net/v/t1.15752-9/83194744_599465614209879_3208406626709012480_n.png?_nc_cat=108&_nc_oc=AQkxY8VZg0_V1rl-zuezge-EyAAw2eXJXYhYt3yiZfZvyzfZ3Ut1HwVIYCSfgdwKHrg2o-GgnuYrCWyjB-yACm17&_nc_ht=scontent.fmia1-1.fna&oh=1fe7f5d32987f7527636ba8a8931d86d&oe=5ED9BC60"
							height="150"
							width="350"
							className="img-fluid max-width-100%"
							alt="..."
						/>
					</Link>
				</div>
			</React.Fragment>
		);
	}
}
