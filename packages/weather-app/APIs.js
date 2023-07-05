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
  await axios({
    method: 'GET',
    url: url,
    withCredentials: false,
  })
    .then((res) => {
      console.log('RESPONSE::', res);
      let formattedCoordinates = [res.data[0].latitude, res.data[0].longitude];
      response = formattedCoordinates;
    })
    .catch((err) => console.log('fetchCoordinates Errored:', err));
  console.log('fetchCoordinates response:', response);
  return response;
};

const fetchWeather = async (coordinates) => {
  console.log('In fetchWeather', coordinates);
  let lat = coordinates[0];
  let lon = coordinates[1];
  let url = hiddedWeatherAPIUrl + 'lat=' + lat + '&lon=' + lon;

  let response;
  await axios({ method: 'GET', url: url })
    .then((res) => (response = res))
    .catch((err) => console.log('fetchCoordinates Errored:', err));
  console.log('fetchCoordinates response:', response);
  return response;
};
console.log('TESTING FUNCTION:', fetchWeather([44.9772995, -93.2654692]));

const fetchAPIs = { cityToWeather, fetchCoordinates, fetchWeather };
export default fetchAPIs;
