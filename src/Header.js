import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>Countries App</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <h2>Home</h2>
            </Link>
          </li>
          <li>
            <Link to="/countries">
              <h2>Countries</h2>
            </Link>
          </li>
        </ul>
      </nav>{" "}
    </header>
  );
};

export default Header;
