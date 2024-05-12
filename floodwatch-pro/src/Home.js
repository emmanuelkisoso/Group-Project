import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import floodGif from "./images/flooded-house.png";
import Header from "./Header";
import Footer from "./Footer";

//Homepage component
function Home() {
  const [stats, setStats] = useState([]);
  // let [initNumber, setInitNumber] = useState(10);
  const [activeItem, setActiveItem] = useState("home");

  //fetch data from db.json
  useEffect(() => {
    fetch("http://localhost:3000/floodstats")
      .then((r) => r.json())
      .then((data) => setStats(data))
      .catch((error) => alert(error.message));
  }, []);

  //text animation set up
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  });

  const hiddenItems = document.querySelectorAll(".hidden");
  hiddenItems.forEach((el) => observer.observe(el));

  //handle routing to another page using Link
  // function handleClick(id) {
  //   <Link to={`/${id}`}></Link>;
  // }

  return (
    <>
      <Header item="home" />

      <div className="floodItemsBox">
        {stats.map((stat) => {
          return (
            <div
              key={stat.id}
              className="flexItems"
              // style={{ border: "5px solid white" }}
            >
              <div style={{ width: "100%" }}>
                <Link to={`/${stat.id}}`}>
                  <img
                    src={stat.pictureUrl}
                    alt="pic"
                    // onClick={() => handleClick(stat.id)}
                  />
                </Link>
              </div>

              <div className="content hidden">
                <h3>{stat.location}</h3>

                <div className="alert hidden">
                  <img
                    src={stat.alertLevel === "red" ? floodGif : ""}
                    alt="pic"
                    style={{ width: "30px" }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </>
  );
}
export default Home;
