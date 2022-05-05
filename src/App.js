import { useState, useEffect } from "react";

function App() {
  const [text, setText] = useState("");
  const [location, setLocation] = useState("");
  const [data, setData] = useState(null);
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=2d3e410f0ed7818625d5352a26aeb264`
      )
        .then((res) => res.json())
        .then((result) => {
          setData(result);
          console.log(result);
        });
    };
    fetchData();
  }, [lat, long]);

  function handleChange(e) {
    setText(e.target.value);
  }

  function handleClick() {
    setLocation(text);
  }

  if (data === null) return <p>loading</p>;

  return (
    <div className="app">
      <div className="search">
        <input onChange={handleChange} placeholder="Enter Location" />
        <button onclick={handleClick} className="btn-weather">
          Submit
        </button>
      </div>
      <div className="main">
        <div className="top">
          <h1>London</h1>
          <h2>{data.current.temp}°C</h2>
          <h2>light rain</h2>
          <h2>Feels like 6°C</h2>
          <h2>Wind 5mph</h2>
          <h2>Humidity 50%</h2>
        </div>
        <div className="bottom">
          {/* {data.daily.map((day) => {
            return (
              <div>
                <h2>Friday</h2>
                <p>8°C</p>
              </div>
            )
          })} */}
        </div>
      </div>
      <div className="footer">Made with 🤘 for 383</div>
    </div>
  );
}

export default App;
