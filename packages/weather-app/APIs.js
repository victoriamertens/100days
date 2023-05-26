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

const fetchCoordinates = (city) => {
  console.log('In Coorinates', city);
  return 0;
};

const fetchWeather = (coordinates) => {
  console.log('In weather', coordinates);
  return 0;
};

const fetchAPIs = { cityToWeather, fetchCoordinates, fetchWeather };
export default fetchAPIs;
