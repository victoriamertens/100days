import './NextDays.css';

export default function NextDays(props) {
  return (
    <div className="forecast">
      <p className="day">{props.day}</p>
      <img className="forecast-icon" src={props.weathericon} alt="cloud" />
      <p className="temp">{props.temp}</p>
    </div>
  );
}
