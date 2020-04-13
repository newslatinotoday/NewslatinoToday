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
									src="https://scontent.fmia1-1.fna.fbcdn.net/v/t31.0-8/22181450_1354862417945008_6077301093248005771_o.jpg?_nc_cat=108&_nc_sid=85a577&_nc_oc=AQnRcDkHiuEEF-BZ0L33C9zCWLyIf-qxUhXSBqCapU8wRJigV4XxxG6oTPb2v1noy-v7SpQakF8ol6NH80VyIcDp&_nc_ht=scontent.fmia1-1.fna&oh=5517f994295305f264295c98566bb96f&oe=5EB98EFA"
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
				{/* <div className="card mb-3 cardstrap">
					<div className="row no-gutters">
						<div className="col-md-4">
							<a href="https://m.facebook.com/ElMolcajeteMexicanRestaurant/">
								<img
									src=""
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
				</div> */}
				<div className="espacio" />
				<div className="card mb-3 cardstrap">
					<div className="row no-gutters">
						<div className="col-md-4">
							<a href="https://hopecafe.church/">
								<img
									src="https://scontent.fmia1-2.fna.fbcdn.net/v/t1.15752-9/s2048x2048/82597766_656709181737457_2370873246481383424_n.png?_nc_cat=111&_nc_sid=b96e70&_nc_oc=AQkkKSKCrtSpDJO9tmPNCtUvz1CXl4r-qOqkdD-9nyOyIIJ7_QEL50sdoYIJKZYpAWQIg8oluaS0HgsSk66UgEni&_nc_ht=scontent.fmia1-2.fna&oh=182c3b6d2b054744b4eab7e11d949d0e&oe=5EB7C5FC"
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
									src="https://static.wixstatic.com/media/14b520_decc8a90626c45689c0a5aea1f5113f2~mv2.png/v1/fill/w_800,h_439,al_c,q_90/file.jpg"
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
