import './App.css';
import { useState } from "react";
function App() {

  const [Age, setAge] = useState("")
  const [Lower, setLower] = useState("")
  const [Upper, setUpper] = useState("")

  let calcHrl = (event) => {
    event.preventDefault()
    let Lower = (220 - Age) * 0.65
    let Upper = (220 - Age) * 0.85
    setUpper(Upper.toFixed(0))
    setLower(Lower.toFixed(0))
  }
  return (
    <div className="tausta">
      <h1>Heart rate limits calculator</h1>
      <form onSubmit={calcHrl}>
        <p>Age</p>
        <input type="number" min="0" value={Age} onChange={event => setAge(event.target.value)} />
        <p>Heart Rate limits</p>
        <input value={Lower + " - " + Upper}></input>
        <br />
        <button type='submit'>Calculate</button>
      </form>
    </div>
  );
}

export default App;
