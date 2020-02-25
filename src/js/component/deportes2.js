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
							{/* El sueco, fiel a su estilo, le dijo adiós al conjunto de la MLS con un mensaje picante. A su
							vez, agradeció el apoyo del club que lo hizo sentir vivo de nuevo. */}
							<br />
							<br />
							{/* Zlatan Ibrahimovic anunció este jueves su despedida de Los Ángeles Galaxy, el equipo de la
							Major League Soccer norteamericana en el que jugó dos temporadas, con un mensaje picante
							para los hinchas, a los que les dijo que. */}
							<br />
							<br />
							{/* Vine, vi y conquisté. Gracias por hacerme sentir vivo de nuevo. A los hinchas, quisieron
							Zlatan y les di Zlatan. Son bienvenidos, la historia continúa. Ahora vuelvan a ver béisbol,
							escribió el sueco, fiel a su estilo, en su cuenta de Twitter. */}
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
