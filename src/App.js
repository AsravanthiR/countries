import React from "react";
import Home from "./Home";
import CountryList from "./CountryList";
import Header from "./Header";

import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";

import CountrySingle from "./CountrySingle";

const RouteWrapper = (props) => {
  const params = useParams();
  return <CountrySingle params={params} {...props} />;
};

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <div className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/countries" element={<CountryList />} />
            <Route path="/countries/:name" element={<RouteWrapper />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}
export default App;
