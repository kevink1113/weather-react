import React from "react";
import "./Weather.css";

function Weather({ img, main, temp }) {
    // console.log(id);
    return (
        <div className="weather">
            <p>Your current weather at Seoul is: </p>
            <img src={img} alt="weather" />
            <p>{main}</p>
            <p>temp: {temp}°C</p>
        </div>
    );
}

export default Weather;
