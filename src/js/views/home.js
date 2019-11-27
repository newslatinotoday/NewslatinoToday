import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Card, Button, CardImg, CardTitle, CardText, CardGroup, CardSubtitle, CardBody, CardDeck } from "reactstrap";

export const Home = () => (
	<React.Fragment>
		<div className="container">
			<div className="row row1">
				<div className="col-sm-3 leftside">
					<Card>
						<div
							className="bg"
							style={{
								height: "212px"
							}}
						/>
						{/* <img
							src="https://media.tycsports.com/files/2019/08/28/67449/zlatan_416x234.jpg?v=2"
							className="rounded"
							alt="Cinque Terre"
							// height="212px"
						/> */}
						<CardBody>
							<span className="lefttextspam">
								<strong>
									Ibrahimovic se despidió de Los Ángeles Galaxy y los mandó {"a ver béisbol"}
									<br />
									<span className="secciones">DEPORTES</span>
								</strong>
							</span>
							<br />
							{/* <span className="littetextspam">
							El sueco, fiel a su estilo, le dijo adiós al conjunto de la MLS con un mensaje picante. A su
							vez, agradeció el apoyo del club que lo hizo sentir vivo de nuevo.
						</span> */}
						</CardBody>
					</Card>
					<Card>
						<div className="bx" style={{ height: "212px" }} />
						{/* <CardImg
							top
							// width="200"
							height="212"
							src="https://media.tycsports.com/files/2019/11/13/77306/daniel-angelici_862x485.jpeg"
							alt="Card image cap"
                        /> */}

						<CardBody>
							<span className="lefttextspam">
								<strong>
									Angelici, el Mundial de Clubes, el palito a la oposición y las declaraciones de
									Alfaro
									<br />
									<span className="secciones">DEPORTES</span>
								</strong>
							</span>
						</CardBody>
					</Card>
				</div>
				<div className="col-sm-6">
					{/* <span className="homespam">Comunidad</span> */}
					<Card>
						<div className="bl" style={{ height: "400px" }} />
						{/* <CardImg
							top
							src="https://static01.nyt.com/images/2019/11/13/us/politics/13dc-impeach2/merlin_164329095_76d97a02-7ebf-4c45-a067-65bc1a1787a8-superJumbo.jpg?quality=90&auto=webp"
							width="250"
							height="400"
							alt="Card image cap"
						/> */}
						<CardBody>
							<span className="textspam">
								<strong>
									La primera audiencia pública del {" 'impeachment' "} refuerza la idea de que Trump
									presionó a Ucrania para que investigara a Biden
								</strong>
							</span>
							<br />
							<span className="littetextspam">
								En el inicio de la fase pública de la investigación para el impeachment de Trump en el
								Congreso comparecieron dos veteranos diplomáticos: William Taylor, actualmente encargado
								de negocios en Ucrania, y George Kent, subsecretario adjunto de Asuntos Europeos y
								Euroasiáticos.
								<br />
							</span>
							<strong>
								<span className="secciones">NOTICIAS</span>
							</strong>
						</CardBody>
					</Card>
				</div>
				<div className="derechaRow col-sm-3">
					<ul>
						{/* <div className="row rowderecha"> */}
						<li>
							<div className="box">
								<Card>
									<div className="textandphoto">
										{/* <CardBody> */}
										<div className="">
											<span className="">
												Liga de mujeres votantes decepcionados con el proceso.
												<br />
											</span>
										</div>
										{/* <div className="left float-right"> */}
										{/* <CardImg
											top
											src="http://www.laconexionusa.com/fotosnoticias/p/voto.jpg"
											width="50"
											height="75"
											alt="Card image cap"
										/>*/}
										{/* </div> */}
										{/* </CardBody> */}
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
										{/* <div className="left float-right"> */}
										{/* <CardImg
											top
											src="http://www.laconexionusa.com/fotosnoticias/p/voto.jpg"
											width="50"
											height="75"
											alt="Card image cap"
										/>*/}
										{/* </div> */}
										{/* </CardBody> */}
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
												Candidatos para el superintendente escolar de carolina del norte enfoque
												en la educación de la primera infancia.
												<br />
											</span>
										</div>
										{/* <div className="left float-right"> */}
										{/* <CardImg
											top
											src="http://www.laconexionusa.com/fotosnoticias/p/voto.jpg"
											width="50"
											height="75"
											alt="Card image cap"
										/>*/}
										{/* </div> */}
										{/* </CardBody> */}
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
										{/* <div className="left float-right"> */}
										{/* <CardImg
											top
											src="http://www.laconexionusa.com/fotosnoticias/p/voto.jpg"
											width="50"
											height="75"
											alt="Card image cap"
										/>*/}
										{/* </div> */}
										{/* </CardBody> */}
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
			{/* AQUI EMPIEZA LA SEGUNDA PARTE DEL DIARIO */}

			<span className="homespam">COMUNIDAD</span>
			<div className="row row1">
				<div className="col-4">
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
				<div className="col-4">
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
				<div className="col-4">
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
			<div className="espacio" />
			<span className="homespam">COMUNIDAD</span>
			<div className="row row1">
				<div className="col-4">
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
				<div className="col-4">
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
				<div className="col-4">
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
			<span className="homespam">Vida</span>
			<div className="row">
				<div className="col-4">
					<Card>
						<CardImg
							top
							height="200"
							width="100%"
							src="http://newslatinotoday.net/wp-content/uploads/2018/08/Salud.jpg"
							alt="Card image cap"
						/>
					</Card>
				</div>
				<div className="col-4">
					<Card>
						<CardImg
							top
							height="200"
							width="100%"
							src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBosxbbncG0zjejxhuBh-9yXFfNri0o3SraOYcy5TnmhZvfKMZ&s "
							alt="Card image cap"
						/>
					</Card>
				</div>
				<div className="col-4">
					<Card>
						<CardImg
							top
							height="200"
							width="100%"
							src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4G0N1fRYBKbHe1xWv5Vj3QB44iqhB79dcb8RFhblJt9bFolOuug&s"
							alt="Card image cap"
						/>
					</Card>
				</div>
			</div>
			<div className="row row3">
				<div className="col-4">
					<Card>
						<CardImg
							top
							height="200"
							width="100%"
							src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-YmTeuGfRPyaAworY2zLdy2cv28H9T_bEakH-7QXo0JrA9a4u&s"
							alt="Card image cap"
						/>
					</Card>
				</div>
				<div className="col-4">
					<Card>
						<CardImg
							top
							height="200"
							width="100%"
							src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxwIYK_W_QbykTCyM4rbuV6T2tDxosD6sckfsJrUQpVdyUgGzJ&s"
							alt="Card image cap"
						/>
					</Card>
				</div>
				<div className="col-4">
					<Card>
						<CardImg
							top
							height="200"
							width="100%"
							src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5ycqbjBuv_051eBU-Voap2Wb9ZJTVrD52IaqjHy0Mzl9RAtsl1w&s"
							alt="Card image cap"
						/>
					</Card>
				</div>
				<span className="textspam">Testimonios y consejos que afectan tu diario vivir. Ver mas...</span>
				<div className="card" style={{ width: "100%", height: "100%" }}>
					<img
						src="https://media.tycsports.com/files/2019/10/12/73681/forlan-independiente_416x234.jpg"
						className="card-img-top"
						alt="..."
					/>
				</div>
			</div>
		</div>
	</React.Fragment>
);
