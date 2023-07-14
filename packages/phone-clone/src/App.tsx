import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div id="whole-app">
      <div id="left-button"></div>
      <div id="phone-body"></div>
      <div id="right-button"></div>
    </div>
  );
}

export default App;
