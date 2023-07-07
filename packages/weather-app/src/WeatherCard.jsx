import NextDays from './NextDays';
import './WeatherCard.css';
import { codeToIcon } from '../weatherCodes';

export default function WeatherCard(responseObj) {
  let todayCode = new Date().getDay();
  let todayCounter = 0;

  let dayForecastArr;
  let todayData;
  let iconToday;
  let temp;
  let description;

  if (responseObj.response.list !== undefined) {
    console.log('In original Data:', responseObj.response.list);
    dayForecastArr = responseObj.response.list;
    todayData = dayForecastArr[0];
    iconToday = codeToIcon(todayData.weather[0].id);
    temp = todayData.main.temp;
    description = todayData.weather[0].description;
  } else if (responseObj.response.list === undefined) {
    dayForecastArr = responseObj.response.daily;
    todayData = dayForecastArr[0];

    iconToday = codeToIcon(todayData.weather[0].id);
    temp = todayData.temp.day;
    description = todayData.weather[0].description;
  }

  return (
    <div id="weather-card">
      <div id="today">
        <div className="left">
          <img id="main-svg" src={iconToday} alt="icon" />
        </div>
        <div className="right">
          <h3 id="day">Today</h3>
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
                weathericon={codeToIcon(dayForecastArr[1].weather[0].id)}
              />
            );
          }
        })}
      </div>
    </div>
  );
}
