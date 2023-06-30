// import axios from 'axios';
import {
  coordinatesAPIUrl as hiddenAPIUrl,
  weatherAPIUrl as hiddedWeatherAPIUrl,
} from './HiddenAPI';
import axios from 'axios';

//Decided to implement Amazon's Lambda service to handle the http request to keep app fully frontend/serverless
// axios({
//   method: 'GET',
//   url: 'https://api.api-ninjas.com/v1/geocoding?city=' + searchTerm,
//   header: { 'X-Api-Key': keyNinja },
// })
//   .then((res) => res.json()) // parse response as JSON
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => console.log(err));

const cityToWeather = async (city) => {
  let coordinates = await fetchCoordinates(city);
  let weather = await fetchWeather(coordinates);
  return weather;
};

const fetchCoordinates = async (city) => {
  console.log('In fetchCoordinates', city);
  let url = hiddenAPIUrl + city;
  let response;
  await axios({ method: 'GET', url: url })
    .then((res) => (response = res))
    .catch((err) => console.log('fetchCoordinates Errored:', err));
  console.log('fetchCoordinates response:', response);
  return response;
};

const fetchWeather = async (coordinates) => {
  console.log('In fetchWeather', coordinates);
  let url =
    hiddedWeatherAPIUrl + 'lat=' + coordinates.lat + '&lon=' + coordinates.lon;

  let response;
  await axios({ method: 'GET', url: url })
    .then((res) => (response = res))
    .catch((err) => console.log('fetchCoordinates Errored:', err));
  console.log('fetchCoordinates response:', response);
  return response;
};
console.log('TESTING FUNCTION:', fetchCoordinates('Minneapolis'));

const fetchAPIs = { cityToWeather, fetchCoordinates, fetchWeather };
export default fetchAPIs;
