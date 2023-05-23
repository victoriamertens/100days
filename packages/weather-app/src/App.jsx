import WeatherCard from './WeatherCard';
import './App.css';
import { response } from '../weatherCodes.js';
import { useState } from 'react';

function App() {
  let [input, setInput] = useState('');

  return (
    <div id="whole-app">
      <div id="search">
        <input
          placeholder="Enter a City..."
          type="text"
          id="city-input"
          onChange={(e) => setInput(e.target.value)}
        ></input>
        <button id="search-btn" onClick={() => console.log(input)}>
          Search
        </button>
      </div>
      <WeatherCard response={response} />
    </div>
  );
}

export default App;
