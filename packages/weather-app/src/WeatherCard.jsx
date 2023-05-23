import NextDays from './NextDays';
import './WeatherCard.css';
import { codeToIcon } from '../weatherCodes';

export default function WeatherCard(responseObj) {
  let dayForecastArr = responseObj.response.list;

  let todayData = dayForecastArr[0];
  let iconToday = codeToIcon(todayData.weather[0].id);
  let todayCode = new Date().getDay();
  let todayCounter = 0;

  return (
    <div id="weather-card">
      <div id="today">
        <div className="left">
          <img id="main-svg" src={iconToday} alt="icon" />
        </div>
        <div className="right">
          <h3 id="day">Today</h3>
          <h1 id="location">New York</h1>
          <h3 id="temp">Temperature: {todayData.main.temp}° F</h3>
          <h3 id="des">{todayData.weather[0].description}</h3>
        </div>
      </div>
      <div id="forecast">
        {dayForecastArr.map((day) => {
          if (day !== dayForecastArr[0]) {
            todayCounter++;
            return (
              <NextDays
                key={day.dt}
                info={day}
                day={todayCode + todayCounter}
                weathericon={codeToIcon(dayForecastArr[1].weather[0].id)}
              />
            );
          }
        })}
      </div>
    </div>
  );
}
