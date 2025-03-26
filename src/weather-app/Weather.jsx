import Axios from "axios";
import { useEffect, useRef, useState } from "react";
import "./style.css";
import ShowLocationInMap from "./ShowLocationInMap";

export default function Weather() {
  let [city, setCity] = useState("");
  let [data, setData] = useState();

  let myRef = useRef();

  async function fetchData() {
    try {
      const response = await Axios.get(
        `http://api.weatherapi.com/v1/current.json?key=a776510ab3d948d48cb132912252503&q=${city}&aqi=no`
      );

      setData(response.data);
      setCity("");
    } catch (error) {
      alert("Looks there is a typo. Please change and try again.");
    }
  }

  useEffect(() => {
    let inputElm = myRef.current;
    inputElm.focus();
  }, []);

  return (
    <div className="container">
      <div className="content">
        <h1 className="h1">Weather App 🌤️ 🌧️ ⛅</h1>
        <input
          type="text"
          className="input"
          placeholder="Enter the city name"
          value={city}
          ref={myRef}
          onChange={(event) => setCity(event.target.value)}
        />
        <button onClick={fetchData} className="button">
          Fetch Data
        </button>
      </div>

      {data?.location?.name && (
        <div className={"data-container"}>
          <h3>
            {data.location.name} {data.current.temp_c}° C
          </h3>
          <h4>{data.location.localtime}</h4>
        </div>
      )}

      {data?.location?.name && (
        <div className="map-container">
          <ShowLocationInMap data={data} />
        </div>
      )}
    </div>
  );
}
