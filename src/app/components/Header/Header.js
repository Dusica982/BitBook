import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          BitBook
        </a>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Feed <span class="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                People
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Profile
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
