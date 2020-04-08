import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.scss";
import { Card, Button, CardImg, CardTitle, CardText, CardGroup, CardSubtitle, CardBody, CardDeck } from "reactstrap";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const ComunidadTwo = () => {
	const { store, actions } = useContext(Context);

	return (
		<React.Fragment>
			{store.comunidad2.map((item, index) => {
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
							El ministerio cristiano Comunidad Vida Nueva bajo el lema {'"Mi Prójimo es cualquier persona que tenga necesidad"'}.
							<br />
		El grupo hispano de Comunidad Vida Nueva, es parte integral de la Iglesia {'"Hope Cafe"'} {'(Hope Fellowship Church)'} con sede en la 201 Tryon Rd. en Raleigh, NC 27603.
							<br />
		{'"Estamos ayudando con comida y articulos para el hogar a las familias afectadas directa o indirectamente por el COVID-19. Muchos de ellos son personas indocumentadas y no califican para los recursos y/o ayuda federal."'}Dice el Pastor Nestor Gomez
		
							
							<br />
			Agradecemos a la {"'Elder'"} Hanna Broome del Ministerio A.M.E. Zion Church por su colaboracion y servicio de amor al prójimo.{'(*en la foto principal junto a la Co-Directora de Comunidad Vida Nueva Sandra Amado Gomez.)'}
							<br />
				Prójimo es cualquiera que está triste y yo puedo llevarle un poco de alegría.
Prójimo es cualquiera que está solo y yo puedo hacerle compañía.
Prójimo es cualquiera que tiene hambre y yo puedo darle de comer.
Prójimo es cualquiera que está enfermo y yo puedo visitarlo.
Prójimo es cualquiera que está necesitado y yo puedo hacer algo por él.
Prójimo es cualquier extranjero que se siente solo y yo puedo acompañarle.
Prójimo es cualquier desconocido y a quien yo puedo saludarle cordialmente.
Prójimo es cualquiera que vive lejos y a quien yo puedo acercarme.
La idea de prójimo trasciende lo geográfico, lo cultural, lo social, lo religioso.
Prójimo es {'“cualquiera”'} al que yo puedo tender una mano.
Esta es parte esencial en la Vision de {"'Comunidad Vida Nueva'"}segun su pastor.

							
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
