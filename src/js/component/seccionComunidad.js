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
					El sueco, fiel a su estilo, le dijo adiós al conjunto de la MLS con un mensaje picante. A su vez,
					agradeció el apoyo del club que lo hizo sentir vivo de nuevo.
					<br />
					<br />
					Zlatan Ibrahimovic anunció este jueves su despedida de Los Ángeles Galaxy, el equipo de la Major
					League Soccer norteamericana en el que jugó dos temporadas, con un mensaje picante para los hinchas,
					a los que les dijo que.
					<br />
					<br />
					Vine, vi y conquisté. Gracias por hacerme sentir vivo de nuevo. A los hinchas, quisieron Zlatan y
					les di Zlatan. Son bienvenidos, la historia continúa. Ahora vuelvan a ver béisbol, escribió el
					sueco, fiel a su estilo, en su cuenta de Twitter.
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
