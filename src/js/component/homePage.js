import React from "react";
import "../../styles/home.scss";
import { Jumbotron, Button } from "reactstrap";
export class HomePage extends React.Component {
	render() {
		return (
			<div>
				<Jumbotron className="jumbohome">
					<div className="container containerhome">
						<div className="jumboedit">
							{/* <div className="row"> */}

							<div className="left float-left">
								<img
									src="http://newslatinotoday.net/wp-content/uploads/2018/08/News-Latino-Today-logo-4.png"
									// className="mt-n5"
									width="256"
									height="131"
									alt="React Bootstrap logo"
								/>
							</div>
							<div className="right float-right">
								<div className="boxes d-inline-block align-top">
									<span>INICIO/HOME</span>
								</div>

								<div className="boxes d-inline-block align-top">
									<span>NOSOTROS/ABOUT US</span>
								</div>

								<div className="boxes d-inline-block align-top">
									<span>CONTACTO/CONTACT US</span>
								</div>

								<div className="boxes d-inline-block align-top">
									<span>GALERÍA/GALLERY</span>
									{/* </div> */}
								</div>
							</div>
						</div>
						<p className="lead">
							This is a simple hero unit, a simple Jumbotron-style component for calling extra attention
							to featured content or information.
						</p>
						<hr className="my-2" />
						<p>
							It uses utility classes for typography and spacing to space content out within the larger
							container.
						</p>
						<p className="lead">
							<Button color="primary">Learn More</Button>
						</p>
					</div>
				</Jumbotron>
			</div>
		);
	}
}
