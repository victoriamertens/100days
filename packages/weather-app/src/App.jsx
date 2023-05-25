import WeatherCard from './WeatherCard';
import './App.css';
import { response } from '../weatherCodes.js';
import { useState } from 'react';
import axios from 'axios';
import { fetchCoordinates, fetchWeather } from '../APIs';

function App() {
  let [input, setInput] = useState('');
  let [weather, setWeather] = useState(response);

  async function cityToWeather(city) {
    let coordinates = await fetchCoordinates(city);
    let weather = await fetchWeather(coordinates);
    setWeather(weather);
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
        <button id="search-btn" onClick={() => cityToWeather(input)}>
          Search
        </button>
      </div>
      <WeatherCard response={weather} />
    </div>
  );
}

export default App;
