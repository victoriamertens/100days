import WeatherCard from './WeatherCard';
import './App.css';
import { response } from '../weatherCodes.js';
import { useState } from 'react';
import axios from 'axios';

function App() {
  let [input, setInput] = useState('');

  function fetchCoordinates(searchTerm) {
    console.log('In fetch Coordinates', searchTerm);
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
  }

  function fetchWeather(coordinates) {
    console.log('In Fetch Weather');
  }

  return (
    <div id="whole-app">
      <div id="search">
        <input
          placeholder="Enter a City..."
          type="text"
          id="city-input"
          onChange={(e) => setInput(e.target.value)}
        ></input>
        <button id="search-btn" onClick={() => fetchCoordinates(input)}>
          Search
        </button>
      </div>
      <WeatherCard response={response} />
    </div>
  );
}

export default App;
