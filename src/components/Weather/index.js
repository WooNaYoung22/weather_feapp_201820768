import React from "react";
import { Switch, Route, withRouter } from "react-router";
import { render } from "@testing-library/react";

class Weather extends React.Component {

  state = {
    weather: "default",
    weather_description: "default",
    temperature: 0,
  }

  componentDidMount() {

    const { cityName } = this.props.match.params;
    console.log(cityName);
    const { weather } = this.state;
    const { weather_description } = this.state;
    const { temperature } = this.state;
    
    const weatherData = fetch(`http://localhost:8888/weather-service/weathers?cityName=${cityName}`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          weather: data.weather[0].main,
          weather_description: data.weather[0].description,
          temperature: (data.main.temp-273.15).toFixed(2),
        });
      })
      .catch(e => console.log(e));
  }

  render() {
    const { cityName } = this.props.match.params;
    const { weather, weather_description, temperature } = this.state;

    return (
      <div>
        <h1>[ Weather Information ]</h1>
        <h2>City name - {cityName}</h2>
        <h2>Weather - {weather}</h2>
        <h2>Weather details - {weather_description}</h2>
        <h2>Temperature - {temperature}</h2>

      </div>
    );
  }
};

export default Weather;