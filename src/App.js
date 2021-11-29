import React from "react";
import Home from "./Home";
import CountryList from "./CountryList";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import CountryCard from "./CountryCard";
import CountrySingle from "./CountrySingle";
const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/countries">Countries</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/countries" element={<CountryList />} />
        <Route path="name" element={<CountrySingle />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
