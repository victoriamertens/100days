import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import mountain from './assets/mountain.jpeg';
import Button from './Button.tsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div id="whole-app">
      <div id="left-button"></div>
      <div id="phone-body">
        <div id="accessories">
          <div className="camera"></div>
          <div id="speaker">
            <div className="hole"></div>
            <div className="hole"></div>
            <div className="hole"></div>
            <div className="hole"></div>
            <div className="hole"></div>
            <div className="hole"></div>
            <div className="hole"></div>
            <div className="hole"></div>
            <div className="hole"></div>
            <div className="hole"></div>
            <div className="hole"></div>
            <div className="hole"></div>
            <div className="hole"></div>
          </div>
          <div className="camera"></div>
          <div className="camera"></div>
        </div>
        <p id="logo">SAMSUNG</p>
        <div id="screen">
          <img src={mountain} id="mountain"></img>
          <div id="screen-buttons">
            <Button number={1} letters="" />
            <Button number={2} letters="" />
            <Button number={3} letters="" />
            <Button number={4} letters="" />
            <Button number={5} letters="" />
            <Button number={6} letters="" />
            <Button number={7} letters="" />
            <Button number={8} letters="" />
            <Button number={9} letters="" />
            <Button number={0} letters="" />
          </div>
        </div>
      </div>
      <div id="right-button"></div>
    </div>
  );
}

export default App;
