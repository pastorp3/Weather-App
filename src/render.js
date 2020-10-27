/* eslint-disable  no-unused-vars */

import {
  city, cord, temp, hum, status,
} from './extractinfo';

function clear(container) {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

const render = (img, data) => {
  const title = city(data);
  const location = cord(data);
  const actualTemp = temp(data.main.temp);
  const feelsLike = temp(data.main.feels_like);
  const humidity = hum(data);
  const condition = status(data);
  const tempMax = temp(data.main.temp_max);
  const temMin = temp(data.main.temp_min);
  const container = document.getElementById('container');
  clear(container);
  const Card = document.createElement('div');
  const background = document.createElement('div');
  container.appendChild(Card);
  Card.appendChild(background);
  background.innerHTML = `<img src="${img}" class="background" >`;
  const changebttn = document.getElementById('select-temperature');
  const dataContainer = document.createElement('div');
  const titleCity = document.createElement('p');
  const ubication = document.createElement('p');
  const tempNow = document.createElement('p');
  const feelsTemp = document.createElement('p');
  const Humidity = document.createElement('p');
  const description = document.createElement('p');
  const timeDiv = document.createElement('div');
  const Max = document.createElement('span');
  const Min = document.createElement('span');
  Card.appendChild(dataContainer);
  dataContainer.appendChild(titleCity);
  dataContainer.appendChild(ubication);
  dataContainer.appendChild(tempNow);
  dataContainer.appendChild(feelsTemp);
  dataContainer.appendChild(Humidity);
  dataContainer.appendChild(description);
  dataContainer.appendChild(timeDiv);
  timeDiv.appendChild(Max);
  timeDiv.appendChild(Min);
  dataContainer.setAttribute('class', 'align-container center');
  titleCity.setAttribute('class', 'title');
  ubication.setAttribute('class', 'location normal-margin');
  tempNow.setAttribute('class', 'tempNow normal-margin');
  feelsTemp.setAttribute('class', 'feels_like normal-margin');
  Humidity.setAttribute('class', 'feels_like normal-margin');
  description.setAttribute('class', 'feels_like normal-margin');
  titleCity.textContent = `${title}`;
  ubication.textContent = `${location}`;
  tempNow.textContent = `${actualTemp}`;
  feelsTemp.textContent = `Feels like: ${feelsLike}`;
  Humidity.textContent = `Humidity: ${humidity}`;
  description.textContent = `${condition}`;
  timeDiv.setAttribute('class', 'flex');
  Max.setAttribute('class', 'temp margin-right');
  Min.setAttribute('class', 'temp');
  Max.innerHTML = `Max<br>${tempMax}`;
  Min.innerHTML = `Min<br>${temMin}`;
  changebttn.addEventListener('click', change => {
    render(img, data);
  });
};

export default render;