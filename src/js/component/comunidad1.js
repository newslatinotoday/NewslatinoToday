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
							El gobernador Roy Cooper ha cerrado todas las escuelas hasta el {15} de mayo debido a la pandemia del {COVID-19}. En los próximos días, les estaremos informando sobre los planes para el aprendizaje remoto y detalles adicionales relacionados con las escuelas.
							<br />
							<br />
							
							<br />
							<br />
							
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
