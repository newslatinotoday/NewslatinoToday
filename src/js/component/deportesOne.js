import React from "react";
import "../../styles/home.scss";
import { Card, Button, CardImg, CardTitle, CardText, CardGroup, CardSubtitle, CardBody, CardDeck } from "reactstrap";

export class DeportesOne extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="espacio2" />
				<div>
					<span className="titulo">
						<strong>
							Ibrahimovic se despidió de Los Ángeles Galaxy y los mandó {"a ver béisbol"}
							<br />
						</strong>
					</span>
				</div>
				<div className="espacio3" />
				<div
					className="bg"
					style={{
						height: "613px"
						// width: "813px"
					}}
				/>
				<br />
				<br />
				<div className="espacio3" />
				<p className="parrafo">
					El sueco, fiel a su estilo, le dijo adiós al conjunto de la MLS con un mensaje picante. A su vez,
					agradeció el apoyo del club que lo hizo sentir vivo de nuevo.
					<br />
					<br />
					Zlatan Ibrahimovic anunció este jueves su despedida de Los Ángeles Galaxy, el equipo de la Major
					League Soccer norteamericana en el que jugó dos temporadas, con un mensaje picante para los hinchas,
					a los que les dijo que.
					<br />
					<br />
					Vine, vi y conquisté. Gracias por hacerme sentir vivo de nuevo. A los hinchas, quisieron Zlatan y
					les di Zlatan. Son bienvenidos, la historia continúa. Ahora vuelvan a ver béisbol, escribió el
					sueco, fiel a su estilo, en su cuenta de Twitter.
				</p>
			</div>
		);
	}
}
