import WeatherCard from './WeatherCard';
import './App.css';

function App() {
  return (
    <div id="whole-app">
      <input placeholder="Enter a City..." type="text"></input>
      <WeatherCard />
    </div>
  );
}

export default App;
