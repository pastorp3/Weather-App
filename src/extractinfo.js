const city = (input) => {
  let city = input.name;
  let country = input.sys.country;
  let output = city + ', ' + country;
  return output
}
const cord = (input) => {
  let lat = input.coord.lat;
  let lon = input.coord.lon;
  let location = 'Latitude ' + lat + ', Longitude ' + lon;
  return location;
}
const temp = (input) => {
  const option = document.getElementById('select-temperature').value;
  let actual;
  if (option === 'ºC') {
    actual = calTempCelcius(input);
  } else {
    actual = calTempFah(input)
  }
  return actual;
}

function calTempCelcius(input) {
  let temp = Math.round(input - 273.15);
  temp += 'ºC';
  return temp;
}

function calTempFah(input) {
  let temp = Math.round((input - 273.15) * 9 / 5 + 32);
  temp += 'ºF';
  return temp;
}
const hum = (input) => {
  let humidity = input.main.humidity + '%';
  return humidity;
}
const status = (input) => {
  let condition = input.weather[0].description;
  return condition;
}
export {
  city,
  cord,
  temp,
  hum,
  status
};