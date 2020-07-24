import React from "react";
import { Switch, Route, withRouter } from "react-router";
import { render } from "@testing-library/react";

//const API_WEATHER = 'http://localhost:8888/weather-service/weathers?cityName=${cityName}';

// Stateless component
const Weather = (props) => {
//class Weather extends React.Component {
  // 1 .
  // class 형태로 변경 후 fetch 선택 도시의 날씨

  // 2 .
  // react Hook 
  // state, setState

  const { cityName } = props.match.params;
  console.log(cityName);
  
  const weatherData = fetch(`http://localhost:8888/weather-service/weathers?cityName=${cityName}`)
    .then((res) => res.json())
    .then((json) => console.log(json));
  
  console.log(weatherData);

  return (
    <div>
      <h1>Weather : {cityName}</h1>
      <p>Here is front page.!</p>

    </div>
  );

};

export default Weather;