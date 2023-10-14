import React, { useState } from 'react';
import './App.css';

function App() {
  const [birthDate, setBirthDate] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    const birthDateObj = new Date(birthDate);
    const currentDate = new Date();
    const ageInMilliseconds = currentDate - birthDateObj;
    const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);
    setAge(Math.floor(ageInYears));
  };

  return (
    <div className="container">
      <h1>Age Calculator</h1> <br></br>
      <label>Enter your date of birth</label> <br></br>
      <input
        type="date"
        value={birthDate}
        onChange={(e) => setBirthDate(e.target.value)}
      /><br></br>
      <button className="btn" onClick={calculateAge}>
        Calculate Age
      </button>
      
      {age !== null && <p>You are {age} years old</p>}
    </div>
  );
}

export default App;