import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Card, Button, CardImg, CardTitle, CardText, CardGroup, CardSubtitle, CardBody, CardDeck } from "reactstrap";

export const Home = () => (
	<div className="container">
		<span className="homespam">Comunidad</span>
		<Card>
			<CardImg
				top
				width="880"
				height="610"
				src="https://ifoundmyselfinwonderlandsite.files.wordpress.com/2018/05/bcfd98b523447ef10c2c2be8049a1ef7.jpg?w=880"
				alt="Card image cap"
			/>
			<CardBody>
				<span className="textspam"> Ayudando y comprometidos con nuestro prójimo. Ver mas ...</span>
			</CardBody>
		</Card>
		<span className="homespam">Deportes</span>
		<div className="row row1">
			<div className="col-8">
				<Card>
					<CardImg
						top
						width="100%"
						height="600"
						src="https://media.tycsports.com/files/2019/10/15/74092/angelici_1440x810.jpg?v=1"
						alt="Card image cap"
						className=""
					/>
					<CardBody>
						<span className="textspam">Cada semana una pasión. Ver mas...</span>
					</CardBody>
				</Card>
			</div>
			<div className="col-4">
				<Card>
					<CardImg
						top
						width="200"
						height="300"
						src="https://media.tycsports.com/files/2019/11/11/77077/milonguita-heredia_416x234.jpg?v=1"
						alt="Card image cap"
					/>
				</Card>
				<Card>
					<CardImg
						top
						width="200"
						height="300"
						src="https://media.tycsports.com/files/2019/10/12/73681/forlan-independiente_416x234.jpg"
						alt="Card image cap"
					/>
				</Card>
			</div>

			{/* <img
				className=""
				src="http://newslatinotoday.net/wp-content/uploads/bb-plugin/cache/1140-community-portrait.jpg"
				alt="1140-community"
				itemProp="image"
				height="400"
				width="300"
				title="1140-community"
			/>
		// </div> */}
		</div>
		<span className="homespam">Vida</span>
		<div className="row row2">
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
		</div>
	</div>
);
