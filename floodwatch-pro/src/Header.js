import "./Home.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function Header({ item, onHandleSearch }) {
  const [activeItem, setActiveItem] = useState(item);
  const [search, setSearch] = useState("");

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
        <input
          type="text"
          placeholder="Search"
          className={activeItem === "about" ? "d-none" : ""}
          name="search"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            onHandleSearch(search);
          }}
        />
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
          to="/report"
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
