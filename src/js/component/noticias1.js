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
		Estamos trabajando para fomentar la expansión de las oportunidades educativas para los aprendices de inglés como segundo idioma que asisten a las escuelas públicas de Carolina del Norte (grados K-12).  En la actualidad estos estudiantes carecen de servicios adecuados, por lo tanto, buscamos y apoyamos iniciativas que remuevan las barreras que estropean su desarrollo académico.  Al mismo tiempo abogamos por los servicios y el apoyo necesitados, cambios de políticas, y cambios en los gastos estatales.
	Nuestra labor:
	Educación Sin Barreras NC es una red de base de defensores de la educación bilingüe que surgió en respuesta a la necesidad urgente de mejores servicios y apoyo para los aprendices  de inglés como segundo idioma. Nuestra alianza es una consorcio de familias, educadores, estudiantes y aliados de la comunidad que exaltan el valor del bilingüismo. Estamos trabajando unidos para conseguir el apoyo financiero necesario para que estos estudiantes tengan éxito educativo. 

Para lograr lo anterior hacemos lo siguiente:

Educación y participación comunitaria Ofrecemos talleres bilingües y capacitaciones para padres. También convocamos foros comunitarios para promover una colaboración significativa entre educadores, padres, estudiantes y defensores con el fin de asegurar que las políticas  estatales referentes a la educación se determinen tomando en cuenta la opinión de la comunidad y sean dirigidas por la misma.
Abogacía  Procuramos involucrar  a nuestros miembros en actividades de defensa legislativa para garantizar que el sentir y las experiencias de la comunidad tenga una voz en los procesos  de toma de decisiones que afectan a los aprendices del inglés como segundo idioma.
Comunicación  Promovemos una replanteamiento del bilingüismo como una  habilidad muy valiosa que beneficia a todos y fortalece nuestra comunidad.
	
¡Conéctate!

info@sinbarrerasnc.org
					
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
