import React, { Component } from "react";
import axios from "axios";

function getCountry(capital) {
  return axios.get(`https://restcountries.com/v2/capital/${capital}`);
}

function getWeather(capital) {
  return axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${capital}&units=metric&appid=${process.env.REACT_APP_OPENWEATHER_KEY}`
  );
}

class CountrySingle extends Component {
  state = {
    country: {},
    weather: {},
    isLoading: true,
  };

  componentDidMount() {
    Promise.all([
      getCountry(this.props.params.name),
      getWeather(this.props.params.name),
    ]).then((res) => {
      this.setState({
        country: res[0].data[0],
        weather: res[1].data,
        isLoading: false,
      });
      console.log("response", res);
      console.log("state country", this.state.country);
      console.log("state weather", this.state.Weather);
    });
  }
  render() {
    if (this.state.isLoading) {
      return (
        <div>
          <div className="lds-roller ">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      );
    }
    if (!this.state.isLoading) {
      return (
        <div class="statement">
          <h1>
            The current weather in
            {""} {this.state.country.capital} is {this.state.weather.main.temp}{" "}
            degrees
          </h1>
          <div class="weather">
            <img
              src={`https://openweathermap.org/img/wn/${this.state.weather.weather[0].icon}@2x.png`}
              alt={this.state.weather.weather[0].description}
            />
          </div>
        </div>
      );
    }
  }
}
export default CountrySingle;
