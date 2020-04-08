const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			deportes1: [
				{
					date: "Marzo 23,2020",
					image:
						"https://images.daznservices.com/di/library/Goal_Mexico/74/ac/balon_axdpj2dmq9ib1ty5xqstte9nf.jpg?t=349300130&quality=60&w=1600",
					type: "DEPORTES",
					title: "Suspenden todas las Ligas Locales de Futbol",
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
					date: "Marzo 20, 2020",
					image:
						"https://vrl-eu-cdn.wetransfer.net/ivise/eyJwaXBlbGluZSI6W1sic3JnYiIse31dLFsiYXV0b19vcmllbnQiLHt9XSxbImdlb20iLHsiZ2VvbWV0cnlfc3RyaW5nIjoiMjA0OHgyMDQ4In1dLFsiZm9yY2VfanBnX291dCIseyJxdWFsaXR5Ijo4NX1dLFsic2hhcnBlbiIseyJyYWRpdXMiOjAuNzUsInNpZ21hIjowLjV9XV0sInNyY191cmwiOiJzMzovL3dldHJhbnNmZXItZXUtcHJvZC1zcGFjZXNoaXAvc25vcmptMjNtMDFwbHZzZTAyMDIwMDEzMTE2NDEyOC9zdGloNzR2bm4zdnUwNjM0YjIwMjAwMTMxMTY0MTI4In0/d80402b017c2fc89272f8c6573f9335ec3d616ecd6e870e06b911f7a00de49f3",
					type: "DEPORTES",
					title: "Liga Hispana de Zebulon",
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
					date: "Marzo 26,2020",

					image:
						"https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/90941247_544128246238339_4720608970329292800_n.jpg?_nc_cat=103&_nc_sid=b386c4&_nc_ohc=8ri3-iQuas8AX-pH4Je&_nc_ht=scontent-iad3-1.xx&oh=b30dd2ae8b711151c228ff4892e3ca1b&oe=5EA27169",
					type: "NOTICIAS",

					title: "Ser Bilingue es un super poder!"
				}
			],
			noticias2: [
				{
					description: "Dígale a la FCC: detengan la propagación de información errónea sobre el coronavirus",
					date: "Marzo 23,2020",
					image: "https://d3nw1if3cd9gaw.cloudfront.net/images/pet-fox-news-misinfo-covid-200319.jpg",
					type: "NOTICIAS",
					title: "Coronavirus: Stop FakeNews!"
				}
			],
			noticias3: [
				{
					description:
						"ública de la investigación para el impeachment de Trump en el Congreso comparecieron dos veteranos diplomáticos: William Taylor, actualmente encargado de negocios en Ucrania, y George Kent, subsecretario adjunto de Asuntos Europeos y Euroasiáticos.",
					date: "Nov. 13, 2019",
					image:
						"https://indyweek.com/downloads/79247/download/MCA_9372.jpg?cb=9ade37b24766e49ba4f31664cbdfef8e&w=1024&h=",
					type: "NOTICIAS",
					title: "La orden de aislamiento preventivo llega al Condado de Wake,NC"
				}
			],
			comunidad1: [
				{
					description: "",
					date: "Marzo 23, 2020",
					image:
						"https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/83881628_2707971932590487_4513891898020069376_n.jpg?_nc_cat=111&_nc_sid=dd9801&_nc_ohc=hY3BslEM60gAX-VHJF1&_nc_ht=scontent-iad3-1.xx&oh=8c0cd53b49de79aba934dcc1215ff9b7&oe=5E9D5A37",
					type: "COMUNIDAD",
					title:
						"El gobernador Roy Cooper ha cerrado todas las escuelas hasta el 15 de mayo debido a la pandemia del COVID-19."
				}
			],
			comunidad2: [
				{
					description:
						"En el inicio de la fase pública de la investigación para el impeachment de Trump en el Congreso comparecieron dos veteranos diplomáticos: William Taylor, actualmente encargado de negocios en Ucrania, y George Kent, subsecretario adjunto de Asuntos Europeos y Euroasiáticos.",
					date: "Marzo 7, 2020",
					image: "https://scontent-atl3-1.xx.fbcdn.net/v/t1.15752-9/p1080x2048/92306564_839142039926134_179096867773087744_n.jpg?_nc_cat=103&_nc_sid=b96e70&_nc_ohc=u07YEchn3hQAX_0-I3o&_nc_ht=scontent-atl3-1.xx&_nc_tp=6&oh=a403580314758589adf37036a40e3344&oe=5EB242E3",
					type: "COMUNIDAD",
					title: "Comunidad Vida Nueva: Mi prójimo es cualquiera que tenga necesidad"
				}
			],
			comunidad3: [
				{
					description:
						"En el inicio de la fase pública de la investigación para el impeachment de Trump en el Congreso comparecieron dos veteranos diplomáticos: William Taylor, actualmente encargado de negocios en Ucrania, y George Kent, subsecretario adjunto de Asuntos Europeos y Euroasiáticos.",
					date: "Marzo 5, 2020",
					image: "https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/p720x720/87230311_1907338112732289_9132463904369147904_o.jpg?_nc_cat=101&_nc_sid=110474&_nc_ohc=bIDzacdEPMsAX8EYizj&_nc_ht=scontent-atl3-1.xx&_nc_tp=6&oh=a8759a1bbec594f0182db9ba0e9b170c&oe=5EB568D6",
					type: "COMUNIDAD",
					title: "Campaña “Todos somos Familia”."
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
