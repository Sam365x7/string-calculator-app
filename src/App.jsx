import { useState } from 'react'
import { add } from './utils/stringCalculator'
import './App.css'

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleCalculate = () => {
    try {
      const sum = add(input);
      setResult(sum);
      setError(""); 
    } catch (err) {
      setResult(null); 
      setError(err.message); 
    }
  };

  return (
    <>
      <h1>String Calculator</h1>
      <textarea
        type="text"
        rows={4}
        cols={40}
        placeholder="Enter numbers like 1,2"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleCalculate}>Calculate</button>
      {result !== null && <div className="result">Result: {result}</div>}
      {error && <p className="error">{error}</p>}
    </>
  )
}

export default App
