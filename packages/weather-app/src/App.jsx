import WeatherCard from './WeatherCard';
import './App.css';
import { response } from '../weatherCodes.js';
import { useState, useEffect } from 'react';
import fetchAPIs from '../APIs';

function App() {
  let [input, setInput] = useState('');
  let [weather, setWeather] = useState(response);
  let [updating, setUpdating] = useState(false);
  let [city, setCity] = useState('Minneapolis');
  let [position, setPosition] = useState([]);

  useEffect(() => {
    showPosition();
  }, []);

  const setNewWeather = async (city) => {
    setUpdating(true);
    setCity(city);
    let weather = await fetchAPIs.cityToWeather(city);
    setWeather(weather);
    setUpdating(false);
  };

  async function showPosition() {
    if (navigator.geolocation) {
      console.log('In showposition');
      navigator.geolocation.getCurrentPosition(async function (position) {
        var positionInfo = [
          position.coords.latitude,
          position.coords.longitude,
        ];

        console.log('Here it is:', positionInfo);
        let fetchedWeather = await fetchAPIs.fetchWeather(positionInfo);
        setWeather(fetchedWeather);
      });
    } else {
      alert('Sorry, your browser does not support HTML5 geolocation.');
    }
  }

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
          onChange={(e) => setInput(e.target.value)}
        ></input>
        <button id="search-btn" onClick={() => setNewWeather(input)}>
          Search
        </button>
      </div>
      <WeatherCard response={weather} city={city} />
    </div>
  );
}

export default App;
