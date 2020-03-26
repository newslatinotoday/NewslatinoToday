import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.scss";
import { Card, Button, CardImg, CardTitle, CardText, CardGroup, CardSubtitle, CardBody, CardDeck } from "reactstrap";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const DeportesTwo = () => {
	const { store, actions } = useContext(Context);

	return (
		<React.Fragment>
			{store.deportes2.map((item, index) => {
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
				className="deportes2"
				style={{
					height: "613px"
					// width: "813px"
				}}
			/> */}
						<br />
						<br />
						<div className="espacio3" />
						<p className="parrafo">
		Un cordial saludopara los Señores DT de equipos , Jugadores y Familias ; se les informa que este fin de semana quedan suspendidas las jornadas de sábado ( Veteranos ) y domingo ( libre ) , la razón pues todos ya lo sabemos y por orden de las autoridades locales, el fútbol se reanudará, hasta nuevo aviso, lo siento por el inconveniente .
				
							<br />
		Tranquilos que "la pelota no se mancha".
							<br />
							{/* */}
							<br />
							<br />
							{/*  */}
						</p>
						<div className="row row1 spacewithmain">
							<div className="col-sm-4">
								{store.deportes2.map((item, index) => {
									return (
										<Card key={index}>
											{/* <div className="comunidadFotos1" style={{ height: "300px" }} /> */}
											<img
												src={item.image2}
												height="613"
												width="100%"
												className="img-fluid height-auto max-width-100%"
												alt="..."
											/>
											<CardBody>
												<span className="secondeparttextspam">
													<strong>
														{" "}
														{/* {item.title} */}
														<br />
													</strong>
												</span>
											</CardBody>
										</Card>
									);
								})}
							</div>
							<div className="col-sm-4">
								{store.deportes2.map((item, index) => {
									return (
										<Card key={index}>
											{/* <div className="comunidadFotos1" style={{ height: "300px" }} /> */}
											<img
												src={item.image3}
												height="613"
												width="100%"
												className="img-fluid height-auto max-width-100%"
												alt="..."
											/>
											<CardBody>
												<span className="secondeparttextspam">
													<strong>
														{" "}
														{/* {item.title} */}
														<br />
													</strong>
												</span>
											</CardBody>
										</Card>
									);
								})}
							</div>

							<div className="col-sm-4">
								{store.deportes2.map((item, index) => {
									return (
										<Card key={index}>
											{/* <div className="comunidadFotos1" style={{ height: "300px" }} /> */}
											<img
												src={item.image4}
												height="300"
												className="img-fluid height-auto max-width-100%"
												alt="..."
											/>
											<CardBody>
												<span className="secondeparttextspam">
													<strong>
														{" "}
														{/* {item.title} */}
														<br />
													</strong>
												</span>
											</CardBody>
										</Card>
									);
								})}
							</div>
						</div>
						<div className="row row1">
							<div className="col-sm-4">
								{store.deportes2.map((item, index) => {
									return (
										<Card key={index}>
											{/* <div className="comunidadFotos1" style={{ height: "300px" }} /> */}
											<img
												src={item.image5}
												height="300"
												className="img-fluid height-auto max-width-100%"
												alt="..."
											/>
											<CardBody>
												<span className="secondeparttextspam">
													<strong>
														{" "}
														{/* {item.title} */}
														<br />
													</strong>
												</span>
											</CardBody>
										</Card>
									);
								})}
							</div>
							<div className="col-sm-4">
								{store.deportes2.map((item, index) => {
									return (
										<Card key={index}>
											{/* <div className="comunidadFotos1" style={{ height: "300px" }} /> */}
											<img
												src={item.image6}
												height="300"
												className="img-fluid height-auto max-width-100%"
												alt="..."
											/>
											<CardBody>
												<span className="secondeparttextspam">
													<strong>
														{" "}
														{/* {item.title} */}
														<br />
													</strong>
												</span>
											</CardBody>
										</Card>
									);
								})}
							</div>
							<div className="col-sm-4">
								{store.deportes2.map((item, index) => {
									return (
										<Card key={index}>
											{/* <div className="comunidadFotos1" style={{ height: "300px" }} /> */}
											<img
												src={item.image7}
												height="300"
												className="img-fluid height-auto max-width-100%"
												alt="..."
											/>
											<CardBody>
												<span className="secondeparttextspam">
													<strong>
														{" "}
														{/* {item.title} */}
														<br />
													</strong>
												</span>
											</CardBody>
										</Card>
									);
								})}
							</div>
						</div>

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
