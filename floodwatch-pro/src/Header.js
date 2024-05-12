import "./Home.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function Header() {
  const [activeItem, setActiveItem] = useState("home");

  return (
    <div className="header">
      <Link
        to="/"
        className={`custom-link ${activeItem === "home" ? "active" : ""}`}
        onClick={() => setActiveItem("home")}
      >
        FloodWatch
      </Link>
      <div className="search">
        <input type="text" placeholder="Search" name="search" />
        <button>Search</button>
      </div>
      <div className="menuItems">
        <Link
          to="/about"
          className={`custom-link ${activeItem === "about" ? "active" : ""}`}
          onClick={() => setActiveItem("about")}
        >
          About
        </Link>
        <Link
          to="/"
          className={`custom-link ${activeItem === "report" ? "active" : ""}`}
          onClick={() => setActiveItem("report")}
        >
          Report
        </Link>
        <Link
          to="/tips"
          className={`custom-link ${activeItem === "tips" ? "active" : ""}`}
          onClick={() => setActiveItem("tips")}
        >
          Safety Tips
        </Link>
        {/* <div className="animation start-home"></div> */}
      </div>
    </div>
  );
}

export default Header;
