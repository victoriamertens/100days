import WeatherCard from './WeatherCard';
import './App.css';

function App() {
  return (
    <div id="whole-app">
      <input placeholder="Enter a City..." type="text" id="city-input"></input>
      <WeatherCard />
    </div>
  );
}

export default App;
