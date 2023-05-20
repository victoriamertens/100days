import NextDays from './NextDays';

export default function WeatherCard() {
  return (
    <div>
      <div>
        <h3>Today</h3>
        <h1>New York</h1>
        <h3>Temperature: 17° C</h3>
        <h3>clear sky</h3>
      </div>
      <div>
        <NextDays day="Wednesday" temp="21°C" weathercode="0" />
        <NextDays day="Thursday" temp="24°C" weathercode="3" />
        <NextDays day="Friday" temp="21°C" weathercode="0" />
        <NextDays day="Saturday" temp="24°C" weathercode="2" />
      </div>
    </div>
  );
}
