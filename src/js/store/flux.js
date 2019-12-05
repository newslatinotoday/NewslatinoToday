const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			deportes1: [
				{
					date: "Nov. 13, 2019",
					image: "https://media.tycsports.com/files/2019/08/28/67449/zlatan_416x234.jpg?v=2",
					type: "DEPORTES",
					title: "Ibrahimovic se despidió de Los Ángeles Galaxy y los mandó a ver béisbol"
				}
			],
			deportes2: [
				{
					date: "Nov. 13, 2019",
					image: "https://media.tycsports.com/files/2019/11/13/77306/daniel-angelici_862x485.jpeg",
					type: "DEPORTES",
					title: "Angelici, el Mundial de Clubes, el palito a la oposición y las declaraciones de Alfaro"
				}
			],
			deportes3: [
				{
					description:
						"En el inicio de la fase pública de la investigación para el impeachment de Trump en el Congreso comparecieron dos veteranos diplomáticos: William Taylor, actualmente encargado de negocios en Ucrania, y George Kent, subsecretario adjunto de Asuntos Europeos y Euroasiáticos.",
					date: "Nov. 13, 2019",
					type: "DEPORTES",
					title: "Show de 700: un gol y dos asistencias de Messi para que Barcelona clasifique a octavos",
					image:
						"https://bolavip.com/__export/1574892162406/sites/bolavip/img/2019/11/27/messi-final_crop1574892161540.jpg_1693159006.jpg"
				}
			],
			noticias1: [
				{
					date: "Nov. 13, 2019",

					image: "http://www.laconexionusa.com/fotosnoticias/g/16030696w.jpg",
					type: "NOTICIAS",
					halfdescription:
						"En el inicio de la fase pública de la investigación para el impeachment de Trump en el Congreso comparecieron dos veteranos...",
					title: "Más de la mitad de estadounidenses desaprueba el desempeño de trump",
					description:
						"En el inicio de la fase pública de la investigación para el impeachment de Trump en el Congreso comparecieron dos veteranos diplomáticos: William Taylor, actualmente encargado de negocios en Ucrania, y George Kent, subsecretario adjunto de Asuntos Europeos y Euroasiáticos."
				}
			],
			noticias2: [
				{
					description:
						"En el inicio de la fase pública de la investigación para el impeachment de Trump en el Congreso comparecieron dos veteranos diplomáticos: William Taylor, actualmente encargado de negocios en Ucrania, y George Kent, subsecretario adjunto de Asuntos Europeos y Euroasiáticos.",
					date: "Nov. 13, 2019",
					image: "http://www.laconexionusa.com/fotosnoticias/g/Obamacare11.jpg",
					type: "NOTICIAS",
					title: "Inmigrantes, con o sin documentos, pueden adquirir cobertura médica."
				}
			],
			noticias3: [
				{
					description:
						"En el inicio de la fase pública de la investigación para el impeachment de Trump en el Congreso comparecieron dos veteranos diplomáticos: William Taylor, actualmente encargado de negocios en Ucrania, y George Kent, subsecretario adjunto de Asuntos Europeos y Euroasiáticos.",
					date: "Nov. 13, 2019",
					image: "http://www.laconexionusa.com/fotosnoticias/g/16012659w.jpg",
					type: "NOTICIAS",
					title: "Corte cree que el recuento de las presidenciales en uruguay irá hasta el fin de semana."
				}
			],
			comunidad1: [
				{
					description:
						"En el inicio de la fase pública de la investigación para el impeachment de Trump en el Congreso comparecieron dos veteranos diplomáticos: William Taylor, actualmente encargado de negocios en Ucrania, y George Kent, subsecretario adjunto de Asuntos Europeos y Euroasiáticos.",
					date: "Nov. 13, 2019",
					image: "http://www.laconexionusa.com/fotosnoticias/g/esuclea.jpg",
					type: "COMUNIDAD",
					title:
						"Candidatos para el superintendente escolar de carolina del norte enfoque en la educación de la primera infancia."
				}
			],
			comunidad2: [
				{
					description:
						"En el inicio de la fase pública de la investigación para el impeachment de Trump en el Congreso comparecieron dos veteranos diplomáticos: William Taylor, actualmente encargado de negocios en Ucrania, y George Kent, subsecretario adjunto de Asuntos Europeos y Euroasiáticos.",
					date: "Nov. 13, 2019",
					image: "http://www.laconexionusa.com/fotosnoticias/g/dolar.jpg",
					type: "COMUNIDAD",
					title: "$ 1.3 millones adicionales aprobados para el condado de brunswick"
				}
			],
			comunidad3: [
				{
					description:
						"En el inicio de la fase pública de la investigación para el impeachment de Trump en el Congreso comparecieron dos veteranos diplomáticos: William Taylor, actualmente encargado de negocios en Ucrania, y George Kent, subsecretario adjunto de Asuntos Europeos y Euroasiáticos.",
					date: "Nov. 13, 2019",
					image: "http://www.laconexionusa.com/fotosnoticias/g/dia.jpg",
					type: "COMUNIDAD",
					title: "Conozca el origen del dia de accion de gracias."
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
