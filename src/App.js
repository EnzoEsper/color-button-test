import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

export function replaceCamelCaseWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, ' $1');
};

function App() {
  const [ buttonColor, setButtonColor ] = useState('MediumVioletRed');
  const newButtonColor = buttonColor === 'MediumVioletRed' ? 'MidnightBlue' : 'MediumVioletRed';
  const [ disabled, setDisabled ] = useState(false);

  return (
    <div>
      <button style={{backgroundColor: disabled === true ? 'gray' : buttonColor}} onClick={() => setButtonColor(newButtonColor)} disabled={disabled}>Change to {replaceCamelCaseWithSpaces(newButtonColor)}</button>
      <br />
      <input type="checkbox" id="disable-button-checkbox" defaultChecked={disabled} aria-checked={disabled} onChange={(e) => setDisabled(e.target.checked)}/>
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;
