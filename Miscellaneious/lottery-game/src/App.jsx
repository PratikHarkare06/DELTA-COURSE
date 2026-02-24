import { useState } from 'react';
import './App.css';
import Lottery from './Lottery';

function App() {
  return (
    <div className="app-container">
      <Lottery winningSum={15} numDigits={3} />
    </div>
  );
}

export default App;
