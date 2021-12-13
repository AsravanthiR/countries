import React, { Component } from "react";
import CountryCard from "./CountryCard";
import axios from "axios";
import "./loader.css";

class CountryList extends Component {
  state = {
    data: [],
    searchIput: "",
    isLoading: true,
  };
  componentDidMount() {
    axios
      .get(
        "https://restcountries.com/v2/all?fields=name,capital,flags,languages,population,currencies"
      )
      .then((res) => {
        this.setState({ data: res.data, isLoading: false });
        this.state.data.map((country) => console.log(this.state.data));
      });
  }
  searchHandler = (e) => {
    this.setState({
      searchInput: e.target.value,
    });
    console.log(this.state.searchInput);
  };
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
              <CountryCard {...country} key={country.name} />
            ))}
        </div>
      );
    }
  }
}

export default CountryList;
