import WeatherCard from './WeatherCard';
import './App.css';
import { response } from '../weatherCodes.js';
import { useState } from 'react';
import fetchAPIs from '../APIs';

function App() {
  let [input, setInput] = useState('');
  let [weather, setWeather] = useState(response);

  const setNewWeather = (city) => {
    let weather = fetchAPIs.cityToWeather(city);
    setWeather(weather);
  };

  return (
    <div id="whole-app">
      <div id="search">
        <input
          placeholder="Enter a City..."
          type="text"
          id="city-input"
          onChange={(e) => setInput(e.target.value)}
        ></input>
        <button id="search-btn" onClick={() => setNewWeather(input)}>
          Search
        </button>
      </div>
      <WeatherCard response={weather} />
    </div>
  );
}

export default App;
