import NextDays from './NextDays';
import './WeatherCard.css';
import sunny from '/src/sunny.svg';

export default function WeatherCard() {
  return (
    <div id="weather-card">
      <div id="today">
        <div className="left">
          <img id="main-svg" src={sunny} alt="sun" />
        </div>
        <div className="right">
          <h3 id="today">Today</h3>
          <h1 id="location">New York</h1>
          <h3 id="temp">Temperature: 17° C</h3>
          <h3 id="des">clear sky</h3>
        </div>
      </div>
      <div id="forecast">
        <NextDays day="Wednesday" temp="21°C" weathercode="0" />
        <NextDays day="Thursday" temp="24°C" weathercode="3" />
        <NextDays day="Friday" temp="21°C" weathercode="0" />
        <NextDays day="Saturday" temp="24°C" weathercode="2" />
      </div>
    </div>
  );
}
