// import logo from "./logo.svg";

import React from "react";
import "./App.css";
import Weather from "./Weather";
import axios from "axios";

class App extends React.Component {
    state = {
        isLoading: true,
        img: "",
        data: {},
    };

    getWeathers() {
        const API_KEY = process.env.REACT_APP_API_KEY;
        const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=Seoul&units=metric&appid=${API_KEY}`;

        // console.log(API_URL);

        axios.get(API_URL).then((response) => {
            // console.log(response);
            const data = response.data;
            // console.log(data);
            const weather = data.weather[0];

            this.setState({
                id: weather.id,
                img: weather.icon,
                isLoading: false,
                description: weather.description,
                data: data,
            });
        });
    }

    componentDidMount() {
        this.getWeathers();
    }

    render() {
        const { isLoading, img, data } = this.state;
        // console.log(weathers);
        const imgUrl = `http://openweathermap.com/img/w/${img}.png`;

        return (
            <section className="container">
                {isLoading ? (
                    <div className="loader">
                        <span className="loader_text">Loading...</span>
                    </div>
                ) : (
                    <div className="weathers">
                        <Weather
                            img={imgUrl}
                            main={data.weather[0].description}
                            temp={data.main.temp}
                        />
                    </div>
                )}
            </section>
        );
    }
}

export default App;
