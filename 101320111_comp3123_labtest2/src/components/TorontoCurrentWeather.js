import React from "react";
import axios from "axios";

export default class TorontoCurrentWeather extends React.Component {
    state = {
        weather: [],
        main: [],
        wind: []
    }

    componentDidMount() {
        axios.get("http://api.openweathermap.org/data/2.5/weather?q=Toronto&appid={{API_KEY}}")
            .then(res => {
                const weather = res.data;
                this.setState(weather);
            })
    }

    render() {
        return (
            <>
                <div class="col text-start my-3">
                    <h2>Current</h2>
                    { this.state.weather.map(weather =>
                        <>
                            <div className="d-flex justify-content-between align-items-center border-top pt-3">
                                <h3 className="pe-2 mb-0">{weather.main}</h3>
                                <img src={"http://openweathermap.org/img/wn/" + weather.icon + "@2x.png"} height={50}/>
                            </div>

                            <p className="fw-bold mb-1 mt-4">Description</p>
                            <p className="text-muted">{weather.description}</p>
                        </>
                    )}

                    <p className="fw-bold mt-4">Temperature</p>
                    <ul className="list-group">
                        <li className="list-group-item  d-flex justify-content-between align-items-center">
                            <p className="fw-bold pe-4 mb-0">Current temperature</p>
                            <p className="mb-0 text-muted">{(this.state.main.temp - 273.15).toFixed(2)} &#x2103;</p>
                        </li>

                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            <p className="fw-bold pe-4 mb-0">Feels like</p>
                            <p className="mb-0 text-muted">{(this.state.main.feels_like - 273.15).toFixed(2)} &#x2103;</p>
                        </li>
                    </ul>

                    <ul className="list-group pt-3">
                        <li className="list-group-item  d-flex justify-content-between align-items-center">
                            <p className="fw-bold pe-4 mb-0">Temperature (min)</p>
                            <p className="mb-0 text-muted">{(this.state.main.temp_min - 273.15).toFixed(2)} &#x2103;</p>
                        </li>

                        <li className="list-group-item  d-flex justify-content-between align-items-center">
                            <p className="fw-bold pe-4 mb-0">Temperature (max)</p>
                            <p className="mb-0 text-muted">{(this.state.main.temp_max - 273.15).toFixed(2)} &#x2103;</p>
                        </li>
                    </ul>

                    <p className="fw-bold mt-4">Wind</p>
                    <ul className="list-group">
                        <li className="list-group-item  d-flex justify-content-between align-items-center">
                            <p className="fw-bold pe-4 mb-0">Speed</p>
                            <p className="mb-0 text-muted">{this.state.wind.speed} m/s</p>
                        </li>

                        <li className="list-group-item  d-flex justify-content-between align-items-center">
                            <p className="fw-bold pe-4 mb-0">Wind Gust</p>
                            <p className="mb-0 text-muted">{this.state.wind.gust} m/s</p>
                        </li>
                    </ul>

                    <p className="fw-bold mt-4">Pressure &amp; Humidity</p>
                    <ul className="list-group">
                        <li className="list-group-item  d-flex justify-content-between align-items-center">
                            <p className="fw-bold pe-4 mb-0">Pressure</p>
                            <p className="mb-0 text-muted">{this.state.main.pressure} hPa</p>
                        </li>

                        <li className="list-group-item  d-flex justify-content-between align-items-center">
                            <p className="fw-bold pe-4 mb-0">Humidity</p>
                            <p className="mb-0 text-muted">{this.state.main.humidity} %</p>
                        </li>
                    </ul>
                </div>
            </>
        );
    }
}