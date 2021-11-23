import React, { Component } from "react";

import axios from "axios";
import number from "easy-number-formatter";
import "./loader.css";

class App extends Component {
  state = {
    data: [],
    searchIput: "",
    isLoading: true,
  };

  componentDidMount() {
    axios
      .get(
        "https://restcountries.com/v2/all?fields=name,capital,flags,population,languages,currencies"
      )
      .then((res) => {
        this.setState({ data: res.data, isLoading: true });
        console.log(this.state.data);
      });
  }
  searchHandler = (e) => {
    this.setState({
      searchIput: e.target.value,
    });
    console.log(this.state.searchIput);
  };
  render() {
    if (this.state.isLoading) {
      return (
        <div>
          <div class="lds-roller ">
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
        <div className="countries">
          <input
            type="text"
            name="search"
            onChange={this.searchHandler.bind(this)}
          />

          {this.state.data
            .filter((country) => {
              return country.name
                .toLowerCase()
                .includes(this.state.searchIput.toLowerCase());
            })
            .map((country) => (
              <div className="country" key={country.name}>
                <h2>{country.name} </h2>

                <h3>{country.capital}</h3>
                <div id="about">
                  <img src={country.flags.png} alt={country.name} />
                </div>

                <div className="cardContent">
                  <p>
                    Languages:
                    {country.languages.map((lang, i) => (
                      <span key={i}> {lang.name} </span>
                    ))}
                  </p>
                  <p>
                    Currencies:
                    {country.currencies.map((mon, i) => (
                      <span key={i}> {mon.name} </span>
                    ))}
                  </p>
                  <p> Population: {number.formatNumber(country.population)}</p>
                </div>
              </div>
            ))}
        </div>
      );
    }
  }
}
export default App;
