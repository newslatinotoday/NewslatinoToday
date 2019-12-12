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
				<div>
					<img
						src="https://www.2ndvote.com/wp-content/uploads/2016/03/4973142632038400.jpg"
						height="200"
						width="200"
						className="img-fluid height-auto max-width-100% logos"
						alt="..."
					/>
					<img
						src="https://scontent.fmia1-1.fna.fbcdn.net/v/t31.0-8/22181450_1354862417945008_6077301093248005771_o.jpg?_nc_cat=108&_nc_ohc=2h61ukek2-0AQktih3uNzaWdG8a9r9iJ8SWdSLzrZ-Smr0iXltIdRfqBw&_nc_ht=scontent.fmia1-1.fna&oh=6ac46f94afddb4946fd4e6dfb364ac89&oe=5E7C4886"
						height="200"
						width="200"
						className="img-fluid height-auto max-width-100% logos"
						alt="..."
					/>
					<img
						src="https://d1725r39asqzt3.cloudfront.net/46f8485e-984f-4fd3-8553-cd30ddfc6f43/orig.jpg"
						height="200"
						width="200"
						className="img-fluid height-auto max-width-100% logos"
						alt="..."
					/>

					<img
						src="https://scontent.fmia1-1.fna.fbcdn.net/v/t1.0-9/fr/cp0/e15/q65/51604189_2843241429023173_3996615399918534656_n.jpg?_nc_cat=109&_nc_ohc=gYV4yNz0m50AQlQF5z9qqPnHiPTl5Dr_rC-Pw5uiWKuB656hoEuxQx4rA&_nc_ht=scontent.fmia1-1.fna&oh=1e43f37a6a75b45656802ef438f81b43&oe=5E81F6A0"
						height="200"
						width="200"
						className="img-fluid height-auto max-width-100% logos"
						alt="..."
					/>
					<img
						src="data:image/png;base64,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"
						heigjjght="200"
						height="200"
						width="200"
						className="img-fluid height-auto max-width-100% hopecafe logos"
						alt="..."
					/>
				</div>
			</div>
		</React.Fragment>
	);
};
