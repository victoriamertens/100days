import sunny from '/src/sunny.svg';
import './NextDays.css';

export default function NextDays(props) {
  return (
    <div className="forecast">
      <p className="day">{props.day}</p>
      <img className="forecast-icon" src={sunny} alt="sun" />
      <p className="temp">{props.temp}</p>
    </div>
  );
}
