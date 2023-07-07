export default function LoadingAndError({ errorState, error }) {
  if (errorState) {
    return <p>Application Errored, {error} </p>;
  } else {
    return <p>Loading...</p>;
  }
}
