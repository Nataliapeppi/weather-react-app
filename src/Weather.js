import React from "react";
import "./Weather.css";
export default function Weather() {
  let weatherData = {
    city: "Madrid",
    date: "Sunday Nov 20",
    temperature: 25,
    description: "Cloudy",
    imageUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    humidity: 10,
    wind: 1,
  };

  return (
    <div className="Weather">
      <form className="mb-3">
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              autofocus="on"
              autoComplete="off"
              placeHolder="Type your city"
              className="form-control"
            />
          </div>
          <div className="col-3 p-0">
            <input
              type="submit"
              value="Search"
              className="form-control btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <h1>
        <strong>{weatherData.city}</strong>
      </h1>
      <ul>
        <li>{weatherData.date}</li>
        <li>
          <span>{weatherData.description}</span>
        </li>
      </ul>
      <div className="row">
        <div className="col-6">
          <div className="d-flex weather-temperature">
            <img
              src={weatherData.imageUrl}
              alt={weatherData.description}
              className="float-left"
            />
            <span className="float-left"></span>
            <span className="units">{weatherData.temperature}°C</span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity:{weatherData.humidity} %</li>
            <li>Wind:{weatherData.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
