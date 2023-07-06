import './NextDays.css';

export default function NextDays(props) {
  let dayOfWeek = {
    0: 'Sunday',
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
    7: 'Sunday',
    8: 'Monday',
    9: 'Tuesday',
  };

  let temp;
  if (props.info.main === undefined) {
    temp = props.info.temp.day;
  } else {
    temp = props.info.main.temp;
  }

  return (
    <div className="forecast">
      <p className="day">{dayOfWeek[props.day]}</p>
      <img className="forecast-icon" src={props.weathericon} alt="cloud" />
      <p className="temp">{((temp - 273) * (9 / 5) + 32).toFixed(1)}° F</p>
    </div>
  );
}
