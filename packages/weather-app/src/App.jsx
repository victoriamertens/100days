import WeatherCard from './WeatherCard';
import './App.css';
// import { response } from '../weatherCodes.js';
import { useState, useEffect } from 'react';
import fetchAPIs from '../APIs';

function App() {
  let [input, setInput] = useState('');
  let [weather, setWeather] = useState({});
  let [updating, setUpdating] = useState(true);
  let [city, setCity] = useState('');

  useEffect(() => {
    showPosition();
  }, []);

  async function showPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async function (position) {
        var positionInfo = [
          position.coords.latitude,
          position.coords.longitude,
        ];

        let fetchedWeather = await fetchAPIs.fetchWeather(positionInfo);
        setWeather(fetchedWeather);
        setCity(fetchedWeather.timezone);
        setUpdating(false);
      });
    } else {
      alert('Sorry, your browser does not support HTML5 geolocation.');
    }
  }

  const fetchWeatherCityInput = async (city) => {
    setUpdating(true);
    setCity(city);
    let weather = await fetchAPIs.cityToWeather(city);
    setWeather(weather);
    setUpdating(false);
  };

  if (updating) {
    return <p>LOADING...</p>;
  }
  return (
    <div id="whole-app">
      <div id="search">
        <input
          placeholder="Enter a City..."
          type="text"
          id="city-input"
          aria-label="Search for new city"
          onChange={(e) => setInput(e.target.value)}
        ></input>
        <button id="search-btn" onClick={() => fetchWeatherCityInput(input)}>
          Search
        </button>
      </div>
      <WeatherCard response={weather} city={city} />
    </div>
  );
}

export default App;
