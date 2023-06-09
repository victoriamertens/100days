// import axios from 'axios';
import {
  coordinatesAPIUrl as hiddenAPIUrl,
  weatherAPIUrl as hiddedWeatherAPIUrl,
} from '../HiddenAPI';
import axios from 'axios';

const cityToWeather = async (city) => {
  let coordinates = await fetchCoordinates(city);
  let weather = await fetchWeather(coordinates);
  return weather;
};

const fetchCoordinates = async (city) => {
  console.log('In fetchCoordinates', city);
  let url = hiddenAPIUrl + city;
  let response;
  await axios({
    method: 'GET',
    url: url,
    withCredentials: false,
  })
    .then((res) => {
      let formattedCoordinates = [res.data[0].latitude, res.data[0].longitude];
      response = formattedCoordinates;
    })
    .catch((err) => console.log('fetchCoordinates Errored:', err));
  console.log('In fetchCoordinates', response);
  return response;
};

const fetchWeather = async (coordinates) => {
  let lat = coordinates[0];
  let lon = coordinates[1];
  let url = hiddedWeatherAPIUrl + 'lat=' + lat + '&lon=' + lon;

  let response;
  await axios({ method: 'GET', url: url })
    .then((res) => (response = res.data))
    .catch((err) => console.log('fetchCoordinates Errored:', err));

  return response;
};

const errorData = {
  timezone: 'Location',
  daily: [
    { temp: { day: 0.0 }, weather: { id: 800, description: '' } },
    { temp: { day: 0.0 }, weather: { id: 800, description: '' } },
    { temp: { day: 0.0 }, weather: { id: 800, description: '' } },
    { temp: { day: 0.0 }, weather: { id: 800, description: '' } },
    { temp: { day: 0.0 }, weather: { id: 800, description: '' } },
  ],
};

const fetchAPIs = { cityToWeather, fetchCoordinates, fetchWeather, errorData };
export default fetchAPIs;
