import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.scss";
import { Card, Button, CardImg, CardTitle, CardText, CardGroup, CardSubtitle, CardBody, CardDeck } from "reactstrap";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const DeportesOne = () => {
	const { store, actions } = useContext(Context);

	return (
		<React.Fragment>
			{store.deportes1.map((item, index) => {
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
						{/* <span className="homespam">COMUNIDAD</span> */}
						<br />
						<br />

						<div className="row row1 spacewithmain">
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
						<br />
						<br />
						<div className="espacio3" />
						<p className="parrafo">
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
