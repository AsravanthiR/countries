import React, { Component } from "react";
import CountryCard from "./CountryCard";
import axios from "axios";
import "./loader.css";

class CountryList extends Component {
  state = {
    data: [],
    searchIput: "",
    isLoading: true,
    render() {
      return <div></div>;
    },
  };
  componentDidMount() {
    axios
      .get(
        "https://restcountries.com/v2/all?fields=name,capital,flags,population,languages,currencies"
      )
      .then((res) => {
        this.setState({ data: res.data, isLoading: false });
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
              <CountryCard {...country} key={country.name} />
            ))}
        </div>
      );
    }
  }
}

export default CountryList;
