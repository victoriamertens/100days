import WeatherCard from './WeatherCard';
import './App.css';
import { useState, useEffect } from 'react';
import fetchAPIs from '../APIs';

function App() {
  let [input, setInput] = useState('');
  let [weather, setWeather] = useState({});
  let [updating, setUpdating] = useState(true);
  let [city, setCity] = useState('');

  useEffect(() => {
    // fetchGeolocation();
  }, []);

  //getCurrentPosition takes in two callbacks, one to run on success, one to run on error
  function fetchGeolocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        successfulGeolocationCall,
        erroredGeolocationCall
      );
    } else {
      alert('Sorry, your browser does not support HTML5 geolocation.');
      setWeather(fetchAPIs.errorData);
    }
  }

  //To handle error of fetchWeather API call, I wrapped the process in a try-catch block inside the callback
  async function successfulGeolocationCall(position) {
    var positionInfo = [position.coords.latitude, position.coords.longitude];
    console.log(positionInfo);
    try {
      let fetchedWeather = await fetchAPIs.fetchWeather(positionInfo);
      setWeather(fetchedWeather);
      setCity(fetchedWeather.timezone);
      setUpdating(false);
    } catch (err) {
      console.log('Error with fetchWeather call:', err);
    }
  }

  function erroredGeolocationCall(error) {
    console.log('Errored Geolocation:', error);
  }

  const fetchWeatherCityInput = async (city) => {
    try {
      setUpdating(true);
      let weather = await fetchAPIs.cityToWeather(city);
      setCity(city);
      setWeather(weather);
      setUpdating(false);
    } catch (err) {
      console.log('Error in fetching Weather from Input:', err);
      alert(
        'Sorry, could not find information. Check you input and try again.'
      );
      setUpdating(false);
    }
  };

  if (updating) {
    return (
      <div id="loading">
        <div className="load-annimation"></div>
        <div className="load-annimation"></div>
        <div className="load-annimation"></div>
        <div className="load-annimation"></div>
        <div className="load-annimation"></div>
      </div>
    );
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
