import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.scss";
import { Card, Button, CardImg, CardTitle, CardText, CardGroup, CardSubtitle, CardBody, CardDeck } from "reactstrap";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const ComunidadOne = () => {
	const { store, actions } = useContext(Context);

	return (
		<React.Fragment>
			{store.comunidad1.map((item, index) => {
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

						<br />
						<br />
						<div className="espacio3" />
						<p className="parrafo">
							Un grupo de personas trabajadoras de la salud se encontraban frente a los manifestantes de ReOpen NC. 
		<br /> Algunos manifestantes de ReOpen comenzaron a gritar y molestar a los que protestaban.Pero los trabajadores de la salud solo estaban parados frente a los manifestantes de #ReOpenNC, manteniendo la distancia social y sin responder a las agresiones.
		<br /> @NewsLatinoToday
						</p>
						<div className="espacio2" />
						<Link to="/">
							<span className="volver">Volver A La Pagina Principal</span>
						</Link>
						<div className="espacio" />
						<div className="espacio" />

						<br />
						<div className="espacio" />
						<div className="espacio" />

						<br />
					</div>
				);
			})}
		</React.Fragment>
	);
};
