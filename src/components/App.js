import React, {useState} from 'react';
import ExoUn from './ExoUn';
import './app.css';
import ExoDeux from './ExoDeux';
import ExoTrois from './ExoTrois';
import ExoQuatre from './ExoQuatre';
import ExoCinq from './ExoCinq';



function App() {

  let [count, setCount] = useState(0);
  let [content, setContent] = useState('Input Content');
  let [value, setValue] = useState('');
  let handleClick = () => {
    setCount(count + 1);
  }

  let handleChange = (event) => {
    setValue(event.target.value)
  }

  let handleKeyDown = () => {
    setContent(value);
  }

  let handleCopy = (e) => {
    alert(e.target.value);
  }

  let handleFocus = (e) => {
    e.target.classList.add('background')
  }

  let handleBlur = (e) => {
    e.target.classList.remove('background')
  }
  return (
  <div>
    <ExoUn count={count} increment={handleClick}/>
    <ExoDeux content={content} changeValue={handleChange} changeText={handleKeyDown}/>
    <ExoTrois copy={handleCopy} />
    <ExoQuatre backgroundGreen={handleFocus} backgroundWhite={handleBlur}/>
    <ExoCinq />
  </div>
  );

}

export default App;
