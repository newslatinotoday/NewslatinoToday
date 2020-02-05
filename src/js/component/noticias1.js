import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.scss";
import { Card, Button, CardImg, CardTitle, CardText, CardGroup, CardSubtitle, CardBody, CardDeck } from "reactstrap";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const NoticiasOne = () => {
	const { store, actions } = useContext(Context);

	return (
		<React.Fragment>
			{store.noticias1.map((item, index) => {
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
							El CEO de Palantir, Alex Karp, admitió que su compañía {' "encuentra'} personas en nuestro{" "}
							{"país"}
							que son indocumentadas
							{'"'}.<br />
							<br />
							Durante años, Palantir ha intentado negar o minimizar cualquier papel en esas operaciones
							señalando las dos alas de ICE, que se ocupan de las
							{' "investigaciones penales" '}y la aplicación de la ley de inmigración.
							<br />
							<br />
							Palantir, una compañía de tecnología fundada por Karp y Peter Thiel, tiene contratos con el
							Pentágono, el Departamento de Justicia y el Departamento de Seguridad Nacional. Solo el año
							pasado, Palantir obtuvo $ 1.5 billones en nuevos contratos del gobierno federal. Pero se ha
							enfrentado al mayor escrutinio sobre sus contratos con ICE.
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
