const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			deportes1: [
				{
					date: "Nov. 13, 2019",
					image:
						"https://video-images.vice.com/test-uploads/articles/5e750fa8d601be009716c21b/lede/1584730032631-3_19_2020_THE_WAY_THINGS_SHOULD_CHANGE_FOR_GOOD_AFTER_COVID_CV.jpeg?crop=1xw:1xh;center,center&resize=1600:*",
					type: "DEPORTES",
					title: "Liga de zebulon",
					image2:
						"https://scontent.fmia1-1.fna.fbcdn.net/v/t1.15752-9/88004731_226442865190024_7356238380486623232_n.jpg?_nc_cat=108&_nc_oc=AQnvBg9nRUyDYcg22drKEc8e6IpVjV8IFJ_n47UgXG6lgTap_GhfwJECh5aMDO03qzyJggvCylY8CAEteftul8LL&_nc_ht=scontent.fmia1-1.fna&oh=b577bf6936c7f5db4e61b53ccd3b0ac7&oe=5F030C6E",
					image3:
						"https://scontent.fmia1-2.fna.fbcdn.net/v/t1.15752-9/87392303_556785374927551_6277322207521669120_n.jpg?_nc_cat=110&_nc_oc=AQmUL79zmo2-3wQwJkiqAUTJExVW_uoc537lXOk8HF1Kw9gmylvsdZQ3UHqTQvICO6PZSBv3LZNN31ZYATShStux&_nc_ht=scontent.fmia1-2.fna&oh=4ff670d7bfdcf1cebd6e5c4a99ea3fa3&oe=5EF753CC",
					image4:
						"https://scontent.fmia1-1.fna.fbcdn.net/v/t1.15752-9/87365319_631993397602198_2654835434458185728_n.jpg?_nc_cat=106&_nc_oc=AQl5gQCw1pTCbooMld5bhsor_iJE_nl5JDPfVwsOLlRwDlcB8UEKu0NFL-cjXcqh6_wxDmAjgEqN3fvhU8CWYbLl&_nc_ht=scontent.fmia1-1.fna&oh=02ae446bc12994d5713adff68b8418f7&oe=5EFCE1ED",
					image5:
						"https://scontent.fmia1-1.fna.fbcdn.net/v/t1.15752-9/87365308_268401044130503_1447391342958215168_n.jpg?_nc_cat=106&_nc_oc=AQnTymd3_RUq-8qieqSeB9CT5x-MlFtQxeaebNjEKdfpGUvDnqQKtwpjRYuWvfOzT7t58-O9JYCBoBNtqvT1tPyE&_nc_ht=scontent.fmia1-1.fna&oh=5b8213d4c6694aa604cfed370ed7a521&oe=5EF8CF36",
					image6:
						"https://scontent.fmia1-1.fna.fbcdn.net/v/t1.15752-9/87949035_601678734020512_6511704714667622400_n.jpg?_nc_cat=108&_nc_oc=AQm08tTZ6BXxlpvrVCEIJIwPrXmxoUuaSxWsf6uNDE1T9nUB0GKHjnDWQ2B4apS6VPKQ0-HAUr8QAXP48pEQSYz9&_nc_ht=scontent.fmia1-1.fna&oh=9d856eeedbba454e65a2fe22162ceb8a&oe=5EC2AA4F",
					image7:
						"https://scontent.fmia1-2.fna.fbcdn.net/v/t1.15752-9/87328280_499680977391611_5835075442301730816_n.jpg?_nc_cat=104&_nc_oc=AQnJL2OkMpPPTayXzhketvHth13oOvDHtzPOhqwLNuJqfO3uK-kQmyqbJji9QVYz7RhSVfWfVtcRKYW_wNyBulzC&_nc_ht=scontent.fmia1-2.fna&oh=68fed8fb477c052554b137048d16b273&oe=5EFD9962"
				}
			],
			deportes2: [
				{
					date: "Nov. 13, 2019",
					image:
						"https://vrl-eu-cdn.wetransfer.net/ivise/eyJwaXBlbGluZSI6W1sic3JnYiIse31dLFsiYXV0b19vcmllbnQiLHt9XSxbImdlb20iLHsiZ2VvbWV0cnlfc3RyaW5nIjoiMjA0OHgyMDQ4In1dLFsiZm9yY2VfanBnX291dCIseyJxdWFsaXR5Ijo4NX1dLFsic2hhcnBlbiIseyJyYWRpdXMiOjAuNzUsInNpZ21hIjowLjV9XV0sInNyY191cmwiOiJzMzovL3dldHJhbnNmZXItZXUtcHJvZC1zcGFjZXNoaXAvc25vcmptMjNtMDFwbHZzZTAyMDIwMDEzMTE2NDEyOC9zdGloNzR2bm4zdnUwNjM0YjIwMjAwMTMxMTY0MTI4In0/d80402b017c2fc89272f8c6573f9335ec3d616ecd6e870e06b911f7a00de49f3",
					type: "DEPORTES",
					title: "Liga JR de Raleigh",
					image2:
						"https://scontent.fmia1-1.fna.fbcdn.net/v/t1.15752-9/88004731_226442865190024_7356238380486623232_n.jpg?_nc_cat=108&_nc_oc=AQnvBg9nRUyDYcg22drKEc8e6IpVjV8IFJ_n47UgXG6lgTap_GhfwJECh5aMDO03qzyJggvCylY8CAEteftul8LL&_nc_ht=scontent.fmia1-1.fna&oh=b577bf6936c7f5db4e61b53ccd3b0ac7&oe=5F030C6E",
					image3:
						"https://scontent.fmia1-2.fna.fbcdn.net/v/t1.15752-9/87392303_556785374927551_6277322207521669120_n.jpg?_nc_cat=110&_nc_oc=AQmUL79zmo2-3wQwJkiqAUTJExVW_uoc537lXOk8HF1Kw9gmylvsdZQ3UHqTQvICO6PZSBv3LZNN31ZYATShStux&_nc_ht=scontent.fmia1-2.fna&oh=4ff670d7bfdcf1cebd6e5c4a99ea3fa3&oe=5EF753CC",
					image4:
						"https://scontent.fmia1-1.fna.fbcdn.net/v/t1.15752-9/87365319_631993397602198_2654835434458185728_n.jpg?_nc_cat=106&_nc_oc=AQl5gQCw1pTCbooMld5bhsor_iJE_nl5JDPfVwsOLlRwDlcB8UEKu0NFL-cjXcqh6_wxDmAjgEqN3fvhU8CWYbLl&_nc_ht=scontent.fmia1-1.fna&oh=02ae446bc12994d5713adff68b8418f7&oe=5EFCE1ED",
					image5:
						"https://scontent.fmia1-1.fna.fbcdn.net/v/t1.15752-9/87365308_268401044130503_1447391342958215168_n.jpg?_nc_cat=106&_nc_oc=AQnTymd3_RUq-8qieqSeB9CT5x-MlFtQxeaebNjEKdfpGUvDnqQKtwpjRYuWvfOzT7t58-O9JYCBoBNtqvT1tPyE&_nc_ht=scontent.fmia1-1.fna&oh=5b8213d4c6694aa604cfed370ed7a521&oe=5EF8CF36",
					image6:
						"https://scontent.fmia1-1.fna.fbcdn.net/v/t1.15752-9/87949035_601678734020512_6511704714667622400_n.jpg?_nc_cat=108&_nc_oc=AQm08tTZ6BXxlpvrVCEIJIwPrXmxoUuaSxWsf6uNDE1T9nUB0GKHjnDWQ2B4apS6VPKQ0-HAUr8QAXP48pEQSYz9&_nc_ht=scontent.fmia1-1.fna&oh=9d856eeedbba454e65a2fe22162ceb8a&oe=5EC2AA4F",
					image7:
						"https://scontent.fmia1-2.fna.fbcdn.net/v/t1.15752-9/87328280_499680977391611_5835075442301730816_n.jpg?_nc_cat=104&_nc_oc=AQnJL2OkMpPPTayXzhketvHth13oOvDHtzPOhqwLNuJqfO3uK-kQmyqbJji9QVYz7RhSVfWfVtcRKYW_wNyBulzC&_nc_ht=scontent.fmia1-2.fna&oh=68fed8fb477c052554b137048d16b273&oe=5EFD9962"
				}
			],
			deportes3: [
				{
					description:
						"En el inicio de la fase pública de la investigación para el impeachment de Trump en el Congreso comparecieron dos veteranos diplomáticos: William Taylor, actualmente encargado de negocios en Ucrania, y George Kent, subsecretario adjunto de Asuntos Europeos y Euroasiáticos.",
					date: "Nov. 13, 2019",
					type: "DEPORTES",
					title: " Liga Hispana de Monte Olivo",
					image:
						"https://scontent.fmia1-1.fna.fbcdn.net/v/t1.15752-9/87515762_535318780430064_722366095633154048_n.jpg?_nc_cat=107&_nc_oc=AQl5hBrPWaFKDFSai1DirQFB6M_9lkXmeSv00ljxYMsoDhV8ZBVBmIhmZpnrOH5nc4dromDJ6OHGosBUP-rAat95&_nc_ht=scontent.fmia1-1.fna&oh=9b5a4567e708d99edc388d50a14c1159&oe=5F037D26",
					image2:
						"https://scontent.fmia1-1.fna.fbcdn.net/v/t1.15752-9/88004731_226442865190024_7356238380486623232_n.jpg?_nc_cat=108&_nc_oc=AQnvBg9nRUyDYcg22drKEc8e6IpVjV8IFJ_n47UgXG6lgTap_GhfwJECh5aMDO03qzyJggvCylY8CAEteftul8LL&_nc_ht=scontent.fmia1-1.fna&oh=b577bf6936c7f5db4e61b53ccd3b0ac7&oe=5F030C6E",
					image3:
						"https://scontent.fmia1-2.fna.fbcdn.net/v/t1.15752-9/87392303_556785374927551_6277322207521669120_n.jpg?_nc_cat=110&_nc_oc=AQmUL79zmo2-3wQwJkiqAUTJExVW_uoc537lXOk8HF1Kw9gmylvsdZQ3UHqTQvICO6PZSBv3LZNN31ZYATShStux&_nc_ht=scontent.fmia1-2.fna&oh=4ff670d7bfdcf1cebd6e5c4a99ea3fa3&oe=5EF753CC",
					image4:
						"https://scontent.fmia1-1.fna.fbcdn.net/v/t1.15752-9/87365319_631993397602198_2654835434458185728_n.jpg?_nc_cat=106&_nc_oc=AQl5gQCw1pTCbooMld5bhsor_iJE_nl5JDPfVwsOLlRwDlcB8UEKu0NFL-cjXcqh6_wxDmAjgEqN3fvhU8CWYbLl&_nc_ht=scontent.fmia1-1.fna&oh=02ae446bc12994d5713adff68b8418f7&oe=5EFCE1ED",
					image5:
						"https://scontent.fmia1-1.fna.fbcdn.net/v/t1.15752-9/87365308_268401044130503_1447391342958215168_n.jpg?_nc_cat=106&_nc_oc=AQnTymd3_RUq-8qieqSeB9CT5x-MlFtQxeaebNjEKdfpGUvDnqQKtwpjRYuWvfOzT7t58-O9JYCBoBNtqvT1tPyE&_nc_ht=scontent.fmia1-1.fna&oh=5b8213d4c6694aa604cfed370ed7a521&oe=5EF8CF36",
					image6:
						"https://scontent.fmia1-1.fna.fbcdn.net/v/t1.15752-9/87949035_601678734020512_6511704714667622400_n.jpg?_nc_cat=108&_nc_oc=AQm08tTZ6BXxlpvrVCEIJIwPrXmxoUuaSxWsf6uNDE1T9nUB0GKHjnDWQ2B4apS6VPKQ0-HAUr8QAXP48pEQSYz9&_nc_ht=scontent.fmia1-1.fna&oh=9d856eeedbba454e65a2fe22162ceb8a&oe=5EC2AA4F",
					image7:
						"https://scontent.fmia1-2.fna.fbcdn.net/v/t1.15752-9/87328280_499680977391611_5835075442301730816_n.jpg?_nc_cat=104&_nc_oc=AQnJL2OkMpPPTayXzhketvHth13oOvDHtzPOhqwLNuJqfO3uK-kQmyqbJji9QVYz7RhSVfWfVtcRKYW_wNyBulzC&_nc_ht=scontent.fmia1-2.fna&oh=68fed8fb477c052554b137048d16b273&oe=5EFD9962"
				}
			],
			noticias1: [
				{
					date: "Marzo 22, 2020",

					image:
						"https://video-images.vice.com/test-uploads/articles/5e74f3aa14263d009d0643dc/lede/1584724928788-tired-nurse.jpeg?crop=1xw:0.5617xh;0xw,0.0757xh&resize=800:*",
					type: "NOTICIAS",
					
					title:
						"Corona Virus",
					
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
