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
        <NextDays />
        <NextDays />
        <NextDays />
        <NextDays />
      </div>
    </div>
  );
}
