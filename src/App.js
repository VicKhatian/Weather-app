import { useState } from "react";


function App() {
  const [text, setText] = useState("")
console.log(text)
  function handleChange(e) {
    setText(e.target.value)
  }

  return (
    <div className="app">
      <div className="search">
        <input onChange={handleChange} placeholder="Enter Location" />
      </div>
      <div className="main">
        <div className="top">
          <h1>London</h1>
          <h2>8°C</h2>
          <h2>light rain</h2>
          <h2>Feels like 6°C</h2>
          <h2>Wind 5mph</h2>
          <h2>Humidity 50%</h2>
        </div>
        <div className="bottom">
          <div>
            <h2>Friday</h2>
            <p>8°C</p>
          </div>
          <div>
            <h2>Saturday</h2>
            <p>8°C</p>
          </div>
          <div>
            <h2>Sunday</h2>
            <p>8°C</p>
          </div>
        </div>
      </div>
      <div className="footer">Made with 🤘 for 383</div>
    </div>
  );
}

export default App;
