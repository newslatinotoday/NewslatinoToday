import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.scss";
import { Card, Button, CardImg, CardTitle, CardText, CardGroup, CardSubtitle, CardBody, CardDeck } from "reactstrap";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const ComunidadThree = () => {
	const { store, actions } = useContext(Context);

	return (
		<React.Fragment>
			{store.comunidad3.map((item, index) => {
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
							La Asociación Dominicana de Raleigh (AKA:ADORA) inició la campaña “Todo somos Familia” que
							busca dar soporte a la comunidad inmigrante indocumentada que vive en zonas rurales, donde
							los recursos, a diferencia de las áreas urbanas, son más escasos.
							<br />
							Julián Abreu, Presidente de ADORA, nos dice que la idea es que quienes reciban la ayuda
							federal aprobada por el gobierno de Donald Trump “adopten” una familia para darles la
							posibilidad que obtengan productos de primera necesidad. Quienes colaboren pueden hacerlo
							comprando una tarjeta de regalo de un supermercado o dejar pagado un monto determinado en
							una tienda de comestibles.
							<br />
							“Este es un problema que nos está afectando todos y es injusto que una parte reciba la ayuda
							del gobierno. Por qué no desprendernos de un poco para darle a quienes lo necesitan”.
							<br />
							Interesados en ser parte de la campaña “Todos somos Familia” de ADORA por favor llamen al
							teléfono (919) 539-3537.
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
