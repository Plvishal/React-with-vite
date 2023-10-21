import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [score, setScore] = useState(0);
  const [wicket, setWicket] = useState(0);
  function addOne() {
    console.log('click 1');
    setScore(score + 1);
  }
  function addTwo() {
    console.log('click 2');
    setScore(score + 2);
  }
  function addThree() {
    console.log('click 3');
    setScore(score + 3);
  }
  function addFour() {
    console.log('click 4');
    setScore(score + 4);
  }
  function addSix() {
    console.log('click 6');
    setScore(score + 6);
  }
  function addWicket() {
    // setWicket(wicket + 1);

    if (wicket < 10) {
      setWicket(wicket + 1);
      console.log('click wicket');
    }
  }

  return (
    <>
      <h1>Cricket Score</h1>
      <h2>
        Score: {score}/{wicket}
      </h2>
      <div className="button">
        <button onClick={addOne}>1</button>
        <button onClick={addTwo}>2</button>
        <button onClick={addThree}>3</button>
        <button onClick={addFour}>4</button>
        <button onClick={addSix}>6</button>
        <button onClick={addWicket}>wicket</button>
      </div>
    </>
  );
}

export default App;
