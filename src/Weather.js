import React from "react";
// import "./Weather.css";

function Weather({ img, main, temp }) {
    // console.log(id);
    return (
        <div className="weather">
            <h1>Your current weather at Seoul is: </h1>
            <img src={img} alt="weather" />
            <h2>{main}</h2>
            <h3>temp: {temp}°C</h3>
        </div>
    );
}

export default Weather;
