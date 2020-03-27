import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.scss";
import { Card, Button, CardImg, CardTitle, CardText, CardGroup, CardSubtitle, CardBody, CardDeck } from "reactstrap";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const NoticiasTwo = () => {
	const { store, actions } = useContext(Context);

	return (
		<React.Fragment>
			{store.noticias2.map((item, index) => {
				return (
					<div key={index} className="container">
						<div className="espacio2" />
						<div>
							<span className="titulo">
								<strong>
									{item.title}
									{/* Ibrahimovic se despidió de Los Ángeles Galaxy y los mandó {"a ver béisbol"} */}
									<br />
								</strong>
							</span>
						</div>
						<div className="espacio3" />
						<img
							src={item.image}
							height="613"
							width="100%"
							className="img-fluid height-auto max-width-100%"
							alt="..."
						/>

						{/* <div
				className="deportes1"
				style={{
					height: "613px"
					// width: "813px"
				}}
			/> */}
						<br />
						<br />
						<div className="espacio3" />
						<p className="parrafo">
							It is unlawful for broadcasters to intentionally distort the news in a way that causes
							substantial public harm. But that’s what is happening right now with coverage of coronavirus
							in the United States. Broadcasters like Sean Hannity and Rush Limbaugh have used the public
							airwaves to spread false information about the COVID-19 crisis. The public needs the FCC to
							hold TV and radio stations accountable for broadcasting lies. The FCC has a responsibility
							to stop the spread of misinformation about coronavirus. We need the agency to act before
							even more lives are lost.
							<br />
							<br />
							<br />
							<br />
						</p>
						<div className="espacio2" />
						<Link to="/">
							<span className="volver">Volver A La Pagina Principal</span>
						</Link>
					</div>
				);
			})}
		</React.Fragment>
	);
};
