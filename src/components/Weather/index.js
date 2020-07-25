import React from "react";
import { Switch, Route, withRouter } from "react-router";
import { render } from "@testing-library/react";

//const API_WEATHER = 'http://localhost:8888/weather-service/weathers?cityName=${cityName}';

// Stateless component
//const Weather = (props) => {
//class
class Weather extends React.Component {

  state = {
    weather: "",
    weather_description: "",
    temperature: 0,
  }

  componentDidMount() {

    //const { cityName } = props.match.params;
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
      .then().catch();
      //.catch(e => console.log(e));
  }

  render() {
    const { cityName } = this.props.match.params;
    const { weather, weather_description, temperature } = this.state;

    return (
      <div>
        <p>Here is front page.!</p>
        <h1>City name - {cityName}</h1>
        <h1>Weather - {weather}</h1>
        <h1>Weather details - {weather_description}</h1>
        <h1>Temperature - {temperature}</h1>

      </div>
    );
  }
};

export default Weather;