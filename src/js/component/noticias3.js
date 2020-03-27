import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.scss";
import { Card, Button, CardImg, CardTitle, CardText, CardGroup, CardSubtitle, CardBody, CardDeck } from "reactstrap";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const NoticiasThree = () => {
	const { store, actions } = useContext(Context);

	return (
		<React.Fragment>
			{store.noticias3.map((item, index) => {
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
						<br />
						<br />
						<div className="espacio3" />
						<p className="parrafo">
							El condado de Wake seguirá el ejemplo de Durham y anunciará una orden de quedarse en casa hoy, confirmaron las autoridades.

El miércoles, el número de casos positivos de coronavirus en Carolina del Norte llegó a 513, con 73 en el condado de Wake. El estado informó su primera muerte por el virus el martes en el condado de Cabarrus.

							<br />
							El virus altamente contagioso ya ha llevado al gobernador Roy Cooper a ordenar el cierre de escuelas y negocios en todo el estado. El alcalde Steve Schewel anunció el martes por la noche que Durham les diría a sus residentes que se refugien en el lugar.
							<br />
		Greg Ford, quien preside la Junta de Comisionados del Condado de Wake, confirmó que {'"'}debido a la rápida escalada de la emergencia de salud pública causada por COVID-19, el Condado de Wake compartirá detalles sobre una Orden de quedarse en casa muy pronto{'"'}.
							<br />
		{'"'}Durante los últimos dos días, los Comisionados del Condado de Wake y el personal de la oficina del Gerente del Condado han estado en estrecho contacto con funcionarios de salud pública estatales y locales, líderes de hospitales locales y alcaldes y gerentes municipales de cada uno de los 15 pueblos y ciudades del Condado de Wake, {'"'}Ford dijo en un correo electrónico. {'"'}También estamos teniendo conversaciones cruciales con nuestra comunidad empresarial local. El personal del condado ha estado trabajando con urgencia en un borrador de declaración basado en esa información, y haremos un anuncio en una conferencia de prensa mañana. Los detalles se compartirán en un aviso más tarde hoy {'"'}.

La comisionada Vicki Adamson dijo que la orden solo se aplicará a las partes no incorporadas del condado, pero que Wake está {'"'}pidiendo que nuestros municipios se unan para que sea coherente en todo el condado{'"'}.

Si bien los funcionarios aún no han compartido los detalles de la orden, el plan se verá {'"'}muy similar{'"'} a lo que se implementó en el condado de Mecklenberg a principios de esta semana, dijo Adamson.
		Info: IndyWeek.com
							
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
