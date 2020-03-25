import React from "react";
import logo from "../../logo.svg";

export default function NavBar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="city tours company" />
      <ul className="nav-links">
        <li>
          <a href="/" className="nav-link active">
            home
          </a>
        </li>
      </ul>
      <ul className="nav-links">
        <li>
          <a href="/" className="nav-link active">
            about
          </a>
        </li>
      </ul>
      <ul className="nav-links">
        <li>
          <a href="/" className="nav-link active">
            tours
          </a>
        </li>
      </ul>
    </nav>
  );
}
