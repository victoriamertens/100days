type props = {
  number: number;
  letters: string;
};

export default function Button(props: props) {
  return (
    <div className="dial">
      <p>{props.number}</p>
      <p>{props.letters}</p>
    </div>
  );
}
