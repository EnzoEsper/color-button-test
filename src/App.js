import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [ buttonColor, setButtonColor ] = useState('red');
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';
  const [ disabled, setDisabled ] = useState(false);

  return (
    <div>
      <button style={{backgroundColor: buttonColor}} onClick={() => setButtonColor(newButtonColor)} disabled={disabled}>Change to {newButtonColor}</button>
      <input type="checkbox" id="enable-button-checkbox" defaultChecked={disabled} aria-checked={disabled} onChange={(e) => setDisabled(e.target.checked)}/>
    </div>
  );
}

export default App;
