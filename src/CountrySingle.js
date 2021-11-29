import React, { Component } from "react";
import axios from "axios";
import { promised } from "q";

function getCountry(capital) {
  return axios.get(`https://restcountries.com/v2/capital/${capital}`);
}

function getWeather(capital) {
  return axios.get("https://api.weatherstack.com/current", {
    params: {
      access_key: process.env.REACT_APP_API_KEY,
      query: capital,
    },
  });
}

class CountrySingle extends Component {
  state = {
    country: [],
    weather: [],
  };

  componentDidMount() {
    Promise.all([
      getCountry(this.props.params.name),
      getWeather(this.props.params.name),
    ]).then((res) => {
      this.setState({
        country: res[0].data,
        weather: res[1].data,
        weather: res[1].data,
      });
    });
  }
  render() {
    return (
      <div>
        <h3>CITY : {this.props.params.name}</h3>
      </div>
    );
  }
}

export default CountrySingle;
