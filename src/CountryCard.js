import React from "react";
import number from "easy-number-formatter";

const CountryCard = ({
  name,
  capital,
  languages,
  currencies,
  population,
  flags,
}) => {
  return (
    <div className="country" key={name}>
      <h2>{name} </h2>

      <h3>{capital}</h3>
      <div id="about">
        <img src={flags.png} alt={name} />
      </div>

      <div className="cardContent">
        <p>
          Languages:
          {languages.map((lang, i) => (
            <span key={i}> {lang.name} </span>
          ))}
        </p>
        <p>
          Currencies:
          {currencies.map((mon, i) => (
            <span key={i}> {mon.name} </span>
          ))}
        </p>
        <p> Population: {number.formatNumber(population)}</p>
      </div>
    </div>
  );
};

export default CountryCard;
