import render from './render';

async function getImage(input, info) {
  const url = 'https://api.unsplash.com/photos/random?orientation=landscape&count=1&client_id=7XimdnnMOSmoeVFofk7rEM4_ApTXYE83u8ZAAlOfPZU&query=' + input;
  const response = await fetch(url);
  const data = await response.json();
  render(data[0].urls.regular, info);
}

async function fetchData(input) {
  const url = 'http://api.openweathermap.org/data/2.5/weather?q=' + input + ',&APPID=be7a948e30f210ef85214d3ba4b94273';
  const response = await fetch(url);
  const data = await response.json();
  return new Promise((resolve, reject) => {
    if (data.cod === '404') {
      console.log('Error');
      reject('No valid city');
    } else {
      console.log('Complete');
      resolve(data);
    }
  });
}

async function getData(input) {
  try {
    const request = await fetchData(input);
    getImage(request.weather[0].main, request);
  } catch (error) {
    alert(error);
  }
}

export default getData;