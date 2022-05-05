import React, { useState, useEffect } from "react";

function Api(props) {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      console.log(navigator);
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

  return (
    <div>
      <p>Testing API data</p>
    </div>
  );
}

export default Api;
