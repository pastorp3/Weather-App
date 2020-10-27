async function getData(input) {
	const url = 'http://api.openweathermap.org/data/2.5/weather?q=' + input + ',&APPID=be7a948e30f210ef85214d3ba4b94273';
	const response = await fetch(url);
	const data = await response.json();
	console.log(data);
};

export default getData;

