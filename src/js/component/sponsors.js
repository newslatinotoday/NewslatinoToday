import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.scss";
import { Card, Button, CardImg, CardTitle, CardText, CardGroup, CardSubtitle, CardBody, CardDeck } from "reactstrap";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

// export class SeccionDeportes extends React.Component {
// 	render() {
// 		return (

export const Sponsors = () => {
	const { store, actions } = useContext(Context);

	return (
		<React.Fragment>
			<div className="container">
				<div className="espacio" />
				<div className="espacio" />
				<div className="card mb-3 cardstrap">
					<div className="row no-gutters">
						<div className="col-md-4">
							<a href="http://www.weadfm.com/">
								<img
									src="http://www.weadfm.com/wp-content/uploads/2018/11/WEADlogo-DOT-COM-125.png"
									className="card-img"
									alt="..."
								/>
							</a>
						</div>
						<div className="col-md-8">
							<div className="card-body">
								<p className="card-text">
									una estación radial orientada a la comunidad latina donde su voz es de suma
									importancia.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="espacio" />
				<div className="espacio" />
				<div className="espacio" />
				<div className="espacio" />
				<div className="card mb-3 cardstrap">
					<div className="row no-gutters">
						<div className="col-md-4">
							<a href="https://m.facebook.com/LigaHispanaDeBunn/">
								<img
									src="https://scontent.fmia1-1.fna.fbcdn.net/v/t31.0-8/22181450_1354862417945008_6077301093248005771_o.jpg?_nc_cat=108&_nc_ohc=2h61ukek2-0AQktih3uNzaWdG8a9r9iJ8SWdSLzrZ-Smr0iXltIdRfqBw&_nc_ht=scontent.fmia1-1.fna&oh=6ac46f94afddb4946fd4e6dfb364ac89&oe=5E7C4886"
									className="card-img"
									alt="..."
								/>
							</a>
						</div>
						<div className="col-md-8">
							<div className="card-body">
								<p className="card-text">Liga Hispana de Futbol en Zebulon</p>
							</div>
						</div>
					</div>
				</div>

				<div className="espacio" />
				<div className="card mb-3 cardstrap">
					<div className="row no-gutters">
						<div className="col-md-4">
							<a href="https://www.facebook.com/La-Cocina-Mexican-Restaurant-Garner-6-117896788269825/">
								<img
									src="https://d1725r39asqzt3.cloudfront.net/46f8485e-984f-4fd3-8553-cd30ddfc6f43/orig.jpg"
									className="card-img"
									alt="..."
								/>
							</a>
						</div>
						<div className="col-md-8">
							<div className="card-body">
								<p className="card-text">La Cocina Restaurante Mexicano</p>
							</div>
						</div>
					</div>
				</div>

				<div className="espacio" />
				<div className="card mb-3 cardstrap">
					<div className="row no-gutters">
						<div className="col-md-4">
							<a href="https://m.facebook.com/ElMolcajeteMexicanRestaurant/">
								<img
									src="https://scontent.fmia1-1.fna.fbcdn.net/v/t1.0-9/fr/cp0/e15/q65/51604189_2843241429023173_3996615399918534656_n.jpg?_nc_cat=109&_nc_ohc=gYV4yNz0m50AQlQF5z9qqPnHiPTl5Dr_rC-Pw5uiWKuB656hoEuxQx4rA&_nc_ht=scontent.fmia1-1.fna&oh=1e43f37a6a75b45656802ef438f81b43&oe=5E81F6A0"
									className="card-img"
									alt="..."
								/>
							</a>
						</div>
						<div className="col-md-8">
							<div className="card-body">
								<p className="card-text">El Molcajete Restaurante Mexicano</p>
							</div>
						</div>
					</div>
				</div>
				<div className="espacio" />
				<div className="card mb-3 cardstrap">
					<div className="row no-gutters">
						<div className="col-md-4">
							<a href="https://hopecafe.church/">
								<img
									src="https://scontent.fmia1-2.fna.fbcdn.net/v/t1.15752-9/s2048x2048/82597766_656709181737457_2370873246481383424_n.png?_nc_cat=111&_nc_oc=AQlXEYOJa6SZGdI6mA6vHsTJ_CfY25whAILLWReJlvlrPi1_PBlJXX6Cs9sel2YFOm9WnV8nnc8muhxWuYAvCIjI&_nc_ht=scontent.fmia1-2.fna&oh=76e168ea0815ff44c0597c2fda47d749&oe=5E8DE384"
									heigjjght="200"
									height="170"
									className="card-img"
									alt="..."
								/>
							</a>
						</div>
						<div className="col-md-8">
							<div className="card-body">
								<p className="card-text">
									Una comunidad de fe, esperanza y amor localizada en la area de Garner-Raleigh
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="espacio" />

				<div className="espacio" />
				<div className="card mb-3 cardstrap">
					<div className="row no-gutters">
						<div className="col-md-4">
							<a href="https://www.aarp.org/espanol/">
								<img
									src="https://www.2ndvote.com/wp-content/uploads/2016/03/4973142632038400.jpg"
									className="card-img"
									alt="..."
								/>
							</a>
						</div>
						<div className="col-md-8">
							<div className="card-body">
								<p className="card-text">
									AARP es una organización sin fines de lucro, no partidaria y de bienestar social que
									ayuda a las personas a convertir sus metas y sueños en posibilidades reales.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};
