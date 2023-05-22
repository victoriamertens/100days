import WeatherCard from './WeatherCard';
import './App.css';
import { response } from '../weatherCodes.js';

function App() {
  return (
    <div id="whole-app">
      <input placeholder="Enter a City..." type="text" id="city-input"></input>
      <WeatherCard response={response} />
    </div>
  );
}

export default App;
