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
							El año pasado, Yojana García Hernández recibió una llamada de un familiar que vivía en la
							frontera mexicana con Estados Unidos: su hijo había sido secuestrado. Tres meses después que
							Yefri González García, de 17 años, salió de Honduras esperando lograr asilo en los Estados
							Unidos, fue retenido contra su voluntad a plena luz del día por miembros armados de lo que
							vecinos sospechaban era un cartel mexicano. Yefri se fue de Honduras en mayo del 2018,
							porque la pandilla en su barrio lo había golpeado después de que se rehusara a ser
							reclutado. Migró hacia el norte, se quedó en la ciudad de Nuevo Laredo, y ahí desapareció.
							Cuando su padre, que trabajaba en la frontera entre Estados Unidos y México, salió con su
							vehículo a buscarlo, también desapareció. Este año, Yojana ha venido a México desde
							Tegucigalpa en Honduras, junto con una organización que busca a miles de migrantes
							desaparecidos, para intentar encontrarlos. En el último año, cerca de 850.000 migrantes,
							muchos de ellos centroamericanos, fueron detenidos en la frontera entre México y Estados
							Unidos. Mientras algunos fueron liberados de centros estadounidenses de detención de
							inmigrantes y otros quedaron varados al norte y al interior de México, otros ni siquiera
							lograron llegar a la frontera. De algunos se sabe el paradero, de otros solo se sabe la
							ubicación de la última llamada.
							{'"'}.<br />
							<br />
							Cuando hay un familiar migrante desaparecido la distancia hace difícil siquiera dar
							seguimiento a la denuncia policial que se hace desde sus países de origen. Sin embargo,
							anualmente, colectivos de familiares de migrantes de Centroamérica buscan a los suyos, con
							el apoyo del Movimiento Migrante Mesoamericano, una organización civil con base en México.
							Este año, el bus que les lleva ha cruzado desde Talismán, una pequeña ciudad fronteriza
							entre Guatemala y México, hasta Monterrey, el centro de negocios en el norte de México. Si
							bien estas caravanas solo llegan a una pequeña parte de México, en cada ciudad en que paran
							los familiares se bajan para manifestar contra el abandono de los gobiernos a los
							indocumentados y para difundir las fotos de los desaparecidos. VER MAS{" "}
							<a href="https://www.vice.com/es_latam/article/59n748/miles-de-migrantes-centroamericanos-desaparecieron-en-mexico-rumbo-a-estados-unidos-sus-madres-los-buscan" />
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
