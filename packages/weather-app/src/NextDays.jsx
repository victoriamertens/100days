import sunny from '/src/sunny.svg';
import cloudy from '/src/cloudy.svg';
import partly from '/src/partly.svg';
import './NextDays.css';

export default function NextDays(props) {
  return (
    <div className="forecast">
      <p className="day">{props.day}</p>
      {props.weathercode === '3' ? (
        <img className="forecast-icon" src={cloudy} alt="cloud" />
      ) : (
        <></>
      )}
      {props.weathercode === '0' ? (
        <img className="forecast-icon" src={sunny} alt="sun" />
      ) : (
        <></>
      )}
      {props.weathercode === '2' ? (
        <img className="forecast-icon" src={partly} alt="partly" />
      ) : (
        <></>
      )}

      <p className="temp">{props.temp}</p>
    </div>
  );
}
