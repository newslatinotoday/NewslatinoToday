import React, { useState, useEffect, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Card, Button, CardImg, CardTitle, CardText, CardGroup, CardSubtitle, CardBody, CardDeck } from "reactstrap";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<React.Fragment>
			{/* SECCION DE IZQUIERDA */}

			<div className="container">
				<div className="row row1">
					<div className="col-sm-3 leftside">
						{store.deportes1.map((item, index) => {
							return (
								<Card key={index}>
									{/* <div
										className="deportes1"
										style={{
											height: "212px"
										}}
									/> */}
									<img
										src={item.image}
										height="212"
										className="img-fluid height-auto max-width-100%"
										alt="..."
									/>
									<CardBody>
										<span className="lefttextspam">
											<Link to="/deportes-noticia-uno">
												<strong>
													{item.title}

													<br />
													<span className="secciones">{item.type}</span>
												</strong>
											</Link>
										</span>
										<br />
									</CardBody>
								</Card>
							);
						})}
						{store.deportes2.map((item, index) => {
							return (
								<Card key={index}>
									{/* <div className="deportes2" style={{ height: "212px" }} /> */}
									<img
										src={item.image}
										height="212"
										className="img-fluid height-auto max-width-100%"
										alt="..."
									/>
									<CardBody>
										<span className="lefttextspam">
											<strong>
												{item.title}
												<br />
												<span className="secciones">{item.type}</span>
											</strong>
										</span>
									</CardBody>
								</Card>
							);
						})}
					</div>

					{/* MEDIO!!!! */}

					<div className="col-sm-6">
						{store.noticias1.map((item, index) => {
							return (
								<Card key={index}>
									{/* <div
										// className="noticias1"
										backgroundImage={item.image}
										style={{ height: "400px" }}
									/> */}
									<img
										src={item.image}
										height="400"
										className="img-fluid height-auto max-width-100%"
										alt="..."
									/>
									<CardBody>
										<span className="textspam">
											<strong>{item.title}</strong>
										</span>
										<br />
										<span className="littetextspam">
											{item.description}
											<br />
										</span>
										<strong>
											<span className="secciones">{item.type}</span>
										</strong>
									</CardBody>
								</Card>
							);
						})}
					</div>

					{/* DERECHA!!!! */}

					<div className="derechaRow col-sm-3">
						<ul>
							<li>
								<div className="box">
									<Card>
										<div className="textandphoto">
											<div className="">
												<span className="">
													Liga de mujeres votantes decepcionados con el proceso.
													<br />
												</span>
											</div>
										</div>
										<div>
											<strong>
												<span className="secciones float-left">NOTICIAS</span>
											</strong>
											<span className="date float-right"> Nov. 13, 2019</span>
										</div>
									</Card>
								</div>
							</li>
							<li>
								<div className="box">
									<Card>
										<div className="textandphoto">
											{/* <CardBody> */}
											<div className="">
												<span className="">
													$ 1.3 millones adicionales aprobados para el condado de brunswick
													<br />
												</span>
											</div>
										</div>
										<div>
											<strong>
												{" "}
												<span className="secciones float-left">COMUNIDAD</span>
											</strong>
											<span className="date float-right"> Nov. 13, 2019</span>
										</div>
									</Card>
								</div>
							</li>
							<li>
								<div className="box">
									<Card>
										<div className="textandphoto">
											{/* <CardBody> */}
											<div className="">
												<span className="">
													Candidatos para el superintendente escolar de carolina del norte
													enfoque en la educación de la primera infancia.
													<br />
												</span>
											</div>
										</div>
										<div>
											<strong>
												{" "}
												<span className="secciones float-left">COMUNIDAD</span>
											</strong>
											<span className="date float-right"> Nov. 13, 2019</span>
										</div>
									</Card>
								</div>
							</li>
							<li>
								<div className="box">
									<Card>
										<div className="textandphoto">
											{/* <CardBody> */}
											<div className="">
												<span className="">
													Conozca el origen del dia de accion de gracias.
													<br />
												</span>
											</div>
										</div>
										<div>
											<strong>
												{" "}
												<span className="secciones float-left">COMUNIDAD</span>
											</strong>
											<span className="date float-right"> Nov. 13, 2019</span>
											{/*  */}
										</div>
									</Card>
								</div>
							</li>
							{/* </div> */}
						</ul>
					</div>
				</div>
				<div className="espacio" />

				{/* SECCIONES!!!!!!!!!*/}

				<span className="homespam">COMUNIDAD</span>
				<div className="row row1">
					<div className="col-sm-4">
						<Card>
							<div className="comunidadFotos1" style={{ height: "300px" }} />
							<CardBody>
								<span className="secondeparttextspam">
									<strong>
										{" "}
										Candidatos para el superintendente escolar de carolina del norte enfoque en la
										educación de la primera infancia.
										<br />
									</strong>
								</span>
							</CardBody>
						</Card>
					</div>
					<div className="col-sm-4">
						<Card>
							<div className="comunidadFotos2" style={{ height: "300px" }} />

							<CardBody>
								<span className="secondeparttextspam">
									<strong>
										$ 1.3 millones adicionales aprobados para el condado de brunswick.
										<br />
									</strong>
								</span>
							</CardBody>
						</Card>
					</div>
					<div className="col-sm-4">
						<Card>
							<div className="comunidadFotos3" style={{ height: "300px" }} />

							<CardBody>
								<span className="secondeparttextspam">
									<strong>
										Conozca el origen del dia de accion de gracias.
										<br />
									</strong>
								</span>
							</CardBody>
						</Card>
					</div>
				</div>
				{/* DEPORTES!!!!!!!!!*/}
				<div className="espacio" />
				<span className="homespam">DEPORTES</span>
				<div className="row row1">
					<div className="col-sm-4">
						<Card>
							<div className="deportes1" style={{ height: "300px" }} />
							<CardBody>
								<span className="secondeparttextspam">
									<strong>
										{" "}
										Ibrahimovic se despidió de Los Ángeles Galaxy y los mandó {"a ver béisbol"}
										<br />
									</strong>
								</span>
							</CardBody>
						</Card>
					</div>
					<div className="col-sm-4">
						<Card>
							<div className="deportes2" style={{ height: "300px" }} />

							<CardBody>
								<span className="secondeparttextspam">
									<strong>
										Angelici, el Mundial de Clubes, el palito a la oposición y las declaraciones de
										Alfaro
										<br />
									</strong>
								</span>
							</CardBody>
						</Card>
					</div>
					<div className="col-sm-4">
						<Card>
							<div className="deportes3" style={{ height: "300px" }} />

							<CardBody>
								<span className="secondeparttextspam">
									<strong>
										Show de 700: un gol y dos asistencias de Messi para que Barcelona clasifique a
										octavos
										<br />
									</strong>
								</span>
							</CardBody>
						</Card>
					</div>
				</div>
				{/* NOTICIAS!!!!!!!!!*/}

				<div className="espacio" />
				<span className="homespam">NOTICIAS</span>
				<div className="row row1">
					<div className="col-sm-4">
						<Card>
							<div className="noticias1" style={{ height: "300px" }} />
							<CardBody>
								<span className="secondeparttextspam">
									<strong>
										{" "}
										La primera audiencia pública del {"impeachment"} refuerza la idea de que Trump
										presionó a Ucrania para que investigara a Biden
										<br />
									</strong>
								</span>
							</CardBody>
						</Card>
					</div>
					<div className="col-sm-4">
						<Card>
							<div className="noticias2" style={{ height: "300px" }} />

							<CardBody>
								<span className="secondeparttextspam">
									<strong>
										Inmigrantes, con o sin documentos, pueden adquirir cobertura médica.
										<br />
									</strong>
								</span>
							</CardBody>
						</Card>
					</div>
					<div className="col-sm-4">
						<Card>
							<div className="noticias3" style={{ height: "300px" }} />

							<CardBody>
								<span className="secondeparttextspam">
									<strong>
										Corte cree que el recuento de las presidenciales en uruguay irá hasta el fin de
										semana.
										<br />
									</strong>
								</span>
							</CardBody>
						</Card>
					</div>
				</div>
				<div className="espacio" />
				{/* SPONSORS!!!!!!!!!*/}
				<span className="homespam">SPONSORS</span>
			</div>
		</React.Fragment>
	);
};
