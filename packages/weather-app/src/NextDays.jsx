import sunny from '/src/sunny.svg';

export default function NextDays(props) {
  return (
    <>
      <p>{props.day}</p>
      <img src={sunny} alt="sun" />
      <p>{props.temp}</p>
    </>
  );
}
