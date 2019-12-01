import React from "react";
import "../../styles/home.scss";

export class Deportes1 extends React.Component {
    render() {
        return 	<Card>
						<div
							className="bg"
							style={{
								height: "212px"
							}}
						/>
						
						<CardBody>
							<span className="lefttextspam">
								<strong>
									Ibrahimovic se despidió de Los Ángeles Galaxy y los mandó {"a ver béisbol"}
									<br />
									<span className="secciones">DEPORTES</span>
								</strong>
							</span>
							<br />
						 <span>
							El sueco, fiel a su estilo, le dijo adiós al conjunto de la MLS con un mensaje picante. A su
							vez, agradeció el apoyo del club que lo hizo sentir vivo de nuevo.
						</span> 
						</CardBody>
                    </Card>
                    ;
    }
}
