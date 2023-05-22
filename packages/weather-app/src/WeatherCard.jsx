import NextDays from './NextDays';
import './WeatherCard.css';
// import sunny from '/src/sunny.svg';
import { codeToIcon } from '../weatherCodes';

export default function WeatherCard(responseObj) {
  let dayForecastArr = responseObj.response.list;

  let today = dayForecastArr[0];
  let iconToday = codeToIcon(today.weather[0].id);

  return (
    <div id="weather-card">
      <div id="today">
        <div className="left">
          <img id="main-svg" src={iconToday} alt="icon" />
        </div>
        <div className="right">
          <h3 id="day">Today</h3>
          <h1 id="location">New York</h1>
          <h3 id="temp">Temperature: {today.main.temp}° F</h3>
          <h3 id="des">{today.weather[0].description}</h3>
        </div>
      </div>
      <div id="forecast">
        {dayForecastArr.map((day) => {
          if (day !== dayForecastArr[0]) {
            return (
              <NextDays
                key={day.dt}
                info={day}
                weathericon={codeToIcon(dayForecastArr[1].weather[0].id)}
              />
            );
          }
        })}
      </div>
    </div>
  );
}
