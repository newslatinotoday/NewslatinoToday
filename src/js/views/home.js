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
											<Link to="/deportes-noticia-dos">
												<strong>{item.title}</strong>
											</Link>
											<br />
											<span className="secciones">{item.type}</span>
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
										<Link to="/noticias-uno">
											<span className="textspam">
												<strong>{item.title}</strong>
											</span>
										</Link>
										<br />
										<span className="littetextspam">
											{item.halfdescription}
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
									{store.noticias2.map((item, index) => {
										return (
											<Card key={index}>
												<div className="textandphoto">
													<div className="">
														<Link to="/noticias-dos">
															<span className="">
																{item.title}
																<br />
															</span>
														</Link>
													</div>
												</div>
												<div>
													<strong>
														<span className="secciones float-left">{item.type}</span>
													</strong>
													<span className="date float-right"> {item.date}</span>
												</div>
											</Card>
										);
									})}
								</div>
							</li>
							<li>
								<div className="box">
									{store.comunidad1.map((item, index) => {
										return (
											<Card key={index}>
												<div className="textandphoto">
													{/* <CardBody> */}
													<div className="">
														<Link to="/comunidad-uno">
															<span className="">
																{item.title}
																<br />
															</span>
														</Link>
													</div>
												</div>
												<div>
													<strong>
														{" "}
														<span className="secciones float-left">{item.type}</span>
													</strong>
													<span className="date float-right"> {item.date}</span>
												</div>
											</Card>
										);
									})}
								</div>
							</li>
							<li>
								<div className="box">
									{store.comunidad2.map((item, index) => {
										return (
											<Card key={index}>
												<div className="textandphoto">
													{/* <CardBody> */}
													<div className="">
														<Link to="/comunidad-dos">
															<span className="">
																{item.title}
																<br />
															</span>
														</Link>
													</div>
												</div>
												<div>
													<strong>
														{" "}
														<span className="secciones float-left">{item.type}</span>
													</strong>
													<span className="date float-right"> {item.date}</span>
												</div>
											</Card>
										);
									})}
								</div>
							</li>
							<li>
								<div className="box">
									{store.comunidad3.map((item, index) => {
										return (
											<Card key={index}>
												<div className="textandphoto">
													{/* <CardBody> */}
													<div className="">
														<Link to="/comunidad-tres">
															<span className="">
																{item.title}
																<br />
															</span>
														</Link>
													</div>
												</div>
												<div>
													<strong>
														{" "}
														<span className="secciones float-left">{item.type}</span>
													</strong>
													<span className="date float-right">{item.date}</span>
													{/*  */}
												</div>
											</Card>
										);
									})}
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
						{store.comunidad1.map((item, index) => {
							return (
								<Card key={index}>
									{/* <div className="comunidadFotos1" style={{ height: "300px" }} /> */}
									<img
										src={item.image}
										height="300"
										className="img-fluid height-auto max-width-100%"
										alt="..."
									/>
									<CardBody>
										<Link to="/comunidad-uno">
											<span className="secondeparttextspam">
												<strong>
													{" "}
													{item.title}
													<br />
												</strong>
											</span>
										</Link>
									</CardBody>
								</Card>
							);
						})}
					</div>
					<div className="col-sm-4">
						{store.comunidad2.map((item, index) => {
							return (
								<Card key={index}>
									{/* <div className="comunidadFotos1" style={{ height: "300px" }} /> */}
									<img
										src={item.image}
										height="300"
										className="img-fluid height-auto max-width-100%"
										alt="..."
									/>
									<CardBody>
										<Link to="/comunidad-dos">
											<span className="secondeparttextspam">
												<strong>
													{" "}
													{item.title}
													<br />
												</strong>
											</span>
										</Link>
									</CardBody>
								</Card>
							);
						})}
					</div>
					<div className="col-sm-4">
						{store.comunidad3.map((item, index) => {
							return (
								<Card key={index}>
									{/* <div className="comunidadFotos1" style={{ height: "300px" }} /> */}
									<img
										src={item.image}
										height="300"
										className="img-fluid height-auto max-width-100%"
										alt="..."
									/>
									<CardBody>
										<Link to="/comunidad-tres">
											<span className="secondeparttextspam">
												<strong>
													{" "}
													{item.title}
													<br />
												</strong>
											</span>
										</Link>
									</CardBody>
								</Card>
							);
						})}
					</div>
				</div>
				{/* DEPORTES!!!!!!!!!*/}
				<div className="espacio" />
				<span className="homespam">DEPORTES</span>
				<div className="row row1">
					<div className="col-sm-4">
						{store.deportes1.map((item, index) => {
							return (
								<Card key={index}>
									{/* <div className="comunidadFotos1" style={{ height: "300px" }} /> */}
									<img
										src={item.image}
										height="300"
										className="img-fluid height-auto max-width-100%"
										alt="..."
									/>
									<CardBody>
										<Link to="/deportes-noticia-uno">
											<span className="secondeparttextspam">
												<strong>
													{" "}
													{item.title}
													<br />
												</strong>
											</span>
										</Link>
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
										src={item.image}
										height="300"
										className="img-fluid height-auto max-width-100%"
										alt="..."
									/>
									<CardBody>
										<Link to="/deportes-noticia-dos">
											<span className="secondeparttextspam">
												<strong>
													{" "}
													{item.title}
													<br />
												</strong>
											</span>
										</Link>
									</CardBody>
								</Card>
							);
						})}
					</div>
					<div className="col-sm-4">
						{store.deportes3.map((item, index) => {
							return (
								<Card key={index}>
									{/* <div className="comunidadFotos1" style={{ height: "300px" }} /> */}
									<img
										src={item.image}
										height="300"
										className="img-fluid height-auto max-width-100%"
										alt="..."
									/>
									<CardBody>
										<Link to="/deportes-noticia-tres">
											<span className="secondeparttextspam">
												<strong>
													{" "}
													{item.title}
													<br />
												</strong>
											</span>
										</Link>
									</CardBody>
								</Card>
							);
						})}
					</div>
				</div>
				{/* NOTICIAS!!!!!!!!!*/}

				<div className="espacio" />
				<span className="homespam">NOTICIAS</span>
				<div className="row row1">
					<div className="col-sm-4">
						{store.noticias1.map((item, index) => {
							return (
								<Card key={index}>
									{/* <div className="comunidadFotos1" style={{ height: "300px" }} /> */}
									<img
										src={item.image}
										height="300"
										className="img-fluid height-auto max-width-100%"
										alt="..."
									/>
									<CardBody>
										<Link to="/noticias-uno">
											<span className="secondeparttextspam">
												<strong>
													{" "}
													{item.title}
													<br />
												</strong>
											</span>
										</Link>
									</CardBody>
								</Card>
							);
						})}
					</div>
					<div className="col-sm-4">
						{store.noticias2.map((item, index) => {
							return (
								<Card key={index}>
									{/* <div className="comunidadFotos1" style={{ height: "300px" }} /> */}
									<img
										src={item.image}
										height="300"
										className="img-fluid height-auto max-width-100%"
										alt="..."
									/>
									<CardBody>
										<Link to="/noticias-dos">
											<span className="secondeparttextspam">
												<strong>
													{" "}
													{item.title}
													<br />
												</strong>
											</span>
										</Link>
									</CardBody>
								</Card>
							);
						})}
					</div>
					<div className="col-sm-4">
						{store.noticias3.map((item, index) => {
							return (
								<Card key={index}>
									{/* <div className="comunidadFotos1" style={{ height: "300px" }} /> */}
									<img
										src={item.image}
										height="300"
										className="img-fluid height-auto max-width-100%"
										alt="..."
									/>
									<CardBody>
										<Link to="/noticias-tres">
											<span className="secondeparttextspam">
												<strong>
													{" "}
													{item.title}
													<br />
												</strong>
											</span>
										</Link>
									</CardBody>
								</Card>
							);
						})}
					</div>
				</div>
				<div className="espacio" />
				{/* SPONSORS!!!!!!!!!*/}
				<span className="homespam">SPONSORS</span>
			</div>
		</React.Fragment>
	);
};
