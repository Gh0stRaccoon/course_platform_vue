const getUser = async () => {
	let cursos = await fetch(
		'https://http-cors-proxy.p.rapidapi.com/https://rest-courses-api.herokuapp.com/api/v1/users/me',
		{
			headers: {
				origin: 'example.com',
				'x-requested-with': 'example.com',
				'X-RapidAPI-Key': 'eb3493e60bmshb389779cf7750fep1f5271jsn0d613a4786fd',
				'X-RapidAPI-Host': 'http-cors-proxy.p.rapidapi.com',
			},
		}
	);
	let cursosJson = await cursos.json();
	return cursosJson;
};

const getCourses = async (course = '') => {
	let cursos = await fetch(
		`https://http-cors-proxy.p.rapidapi.com/https://rest-courses-api.herokuapp.com/api/v1/courses/${course}`,
		{
			headers: {
				origin: 'example.com',
				'x-requested-with': 'example.com',
				'X-RapidAPI-Key': 'eb3493e60bmshb389779cf7750fep1f5271jsn0d613a4786fd',
				'X-RapidAPI-Host': 'http-cors-proxy.p.rapidapi.com',
			},
		}
	);
	let cursosJson = await cursos.json();
	let response = course != '' ? cursosJson : cursosJson.data;
	return response;
};

export { getUser, getCourses };
