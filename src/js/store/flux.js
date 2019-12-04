const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			deportes1: [
				{
					image: "https://media.tycsports.com/files/2019/08/28/67449/zlatan_416x234.jpg?v=2",
					type: "DEPORTES",
					title: "Ibrahimovic se despidió de Los Ángeles Galaxy y los mandó a ver béisbol"
				}
			],
			deportes2: [
				{
					image: "https://media.tycsports.com/files/2019/11/13/77306/daniel-angelici_862x485.jpeg",
					type: "DEPORTES",
					title: "Angelici, el Mundial de Clubes, el palito a la oposición y las declaraciones de Alfaro"
				}
			],
			deportes3: [
				{
					type: "DEPORTES",
					title: ""
				}
			],
			noticias1: [
				{
					image:
						"https://static01.nyt.com/images/2019/11/13/us/politics/13dc-impeach2/merlin_164329095_76d97a02-7ebf-4c45-a067-65bc1a1787a8-superJumbo.jpg?quality=90&auto=webp",
					type: "NOTICIAS",
					title:
						"La primera audiencia pública del 'impeachment' refuerza la idea de que Trump presionó a Ucrania para que investigara a Biden",
					description:
						"En el inicio de la fase pública de la investigación para el impeachment de Trump en el Congreso comparecieron dos veteranos diplomáticos: William Taylor, actualmente encargado de negocios en Ucrania, y George Kent, subsecretario adjunto de Asuntos Europeos y Euroasiáticos."
				}
			],
			noticias2: [
				{
					type: "NOTICIAS",
					title: "Angelici, el Mundial de Clubes, el palito a la oposición y las declaraciones de Alfaro"
				}
			],
			noticias3: [
				{
					type: "NOTICIAS",
					title: "Ibrahimovic se despidió de Los Ángeles Galaxy y los mandó a ver béisbol"
				}
			],
			comunidad1: [
				{
					type: "COMUNIDAD",
					title: "Ibrahimovic se despidió de Los Ángeles Galaxy y los mandó a ver béisbol"
				}
			],
			comunidad2: [
				{
					type: "COMUNIDAD",
					title: "Angelici, el Mundial de Clubes, el palito a la oposición y las declaraciones de Alfaro"
				}
			],
			comunidad3: [
				{
					type: "COMUNIDAD",
					title: "Ibrahimovic se despidió de Los Ángeles Galaxy y los mandó a ver béisbol"
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
