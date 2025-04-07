import { useState } from 'react'
import { add } from './utils/stringCalculator'
import './App.css'

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    const sum = add(input);
    setResult(sum);
  };

  return (
    <>
      <h1>String Calculator</h1>
      <input
        type="text"
        placeholder="Enter numbers like 1,2"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleCalculate}>Calculate</button>
      {result !== null && <div className="result">Result: {result}</div>}
    </>
  )
}

export default App
