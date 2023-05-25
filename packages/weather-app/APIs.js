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

export const fetchCoordinates = (city) => {
  console.log('In Coorinates', city);
};

export const fetchWeather = (coordinates) => {
  console.log('In weather', coordinates);
};
