import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.scss";
import { Card, Button, CardImg, CardTitle, CardText, CardGroup, CardSubtitle, CardBody, CardDeck } from "reactstrap";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

// export class SeccionDeportes extends React.Component {
// 	render() {
// 		return (

export const SeccionComunidad = () => {
	const { store, actions } = useContext(Context);

	return (
		<React.Fragment>
			<div className="container">
				<div className="espacio2" />
				<div>
					{store.comunidad1.map((item, index) => {
						return (
							<Card key={index}>
								<Link to="/comunidad-uno">
									<span className="titulo">
										<strong>
											{item.title}
											<br />
										</strong>
									</span>
									<div className="espacio3" />
									<img
										src={item.image}
										height="613"
										width="1223"
										className="img-fluid height-auto max-width-100%"
										alt="..."
									/>
								</Link>
							</Card>
						);
					})}
				</div>
				<br />
				<br />
				<div className="espacio3" />
				<p className="parrafo">
					<br />
					<br />

					<br />
					<br />
				</p>

				<div>
					<div className="espacio3" />
					<br />
					<br />
					<br />
					<br />
					{store.comunidad2.map((item, index) => {
						return (
							<Card key={index}>
								<Link to="/comunidad-dos">
									<span className="titulo">
										<strong>
											{item.title}
											<br />
										</strong>
									</span>
									<div className="espacio3" />
									<img
										src={item.image}
										height="613"
										width="1223"
										className="img-fluid height-auto max-width-100%"
										alt="..."
									/>
								</Link>
							</Card>
						);
					})}
				</div>

				<br />
				<br />
				<div className="espacio3" />
				<p className="parrafo">
					<br />
					<br />

					<br />
					<br />
				</p>

				<div className="espacio3" />
				<div>
					<br />
					<br />
					<br />
					<br />
					{store.comunidad3.map((item, index) => {
						return (
							<Card key={index}>
								<Link to="/comunidad-tres">
									<span className="titulo">
										<strong>
											{item.title}
											<br />
										</strong>
									</span>
									<div className="espacio3" />
									<img
										src={item.image}
										height="613"
										width="1223"
										className="img-fluid height-auto max-width-100%"
										alt="..."
									/>
								</Link>
							</Card>
						);
					})}
				</div>
				<br />
				<br />
				<div className="espacio3" />
				<p className="parrafo">
					<br />
					<br />

					<br />
					<br />
				</p>
				<div className="espacio2" />
				<br />
				<br />
				<br />
				<br />
				<Link to="/">
					<span className="volver">VOLVER A LA PAGINA PRINCIPAL</span>
				</Link>
			</div>
		</React.Fragment>
	);
};
