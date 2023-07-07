import NextDays from './NextDays';
import './WeatherCard.css';
import { codeToIcon } from '../weatherCodes';

export default function WeatherCard(responseObj) {
  let todayCode = new Date().getDay();
  let todayCounter = 0;

  let dayForecastArr = responseObj.response.daily;

  let todayData = dayForecastArr[0];
  let iconToday = codeToIcon(todayData.weather[0].id);
  let temp = todayData.temp.day;
  let description = todayData.weather[0].description;

  return (
    <div id="weather-card">
      <div id="today">
        <div className="left">
          <img id="main-svg" src={iconToday} alt="weather icon" />
        </div>
        <div className="right">
          <h3 id="day" aria-label="Weather for Today">
            Today
          </h3>
          <h1 id="location">{responseObj.city}</h1>
          <h3 id="temp">
            Temperature: {((temp - 273) * (9 / 5) + 32).toFixed(1)}° F
          </h3>
          <h3 id="des">{description}</h3>
        </div>
      </div>
      <div id="forecast">
        {dayForecastArr.map((day) => {
          if (day !== dayForecastArr[0] && todayCounter <= 3) {
            todayCounter++;
            return (
              <NextDays
                key={day.dt}
                info={day}
                day={todayCode + todayCounter}
                weathericon={codeToIcon(
                  dayForecastArr[todayCounter].weather[0].id
                )}
              />
            );
          }
        })}
      </div>
    </div>
  );
}
