import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import floodGif from "./images/flooded-house.png";
import Header from "./Header";
import Footer from "./Footer";

//Homepage component
function Home() {
  const [stats, setStats] = useState([]);
  const [data, setData] = useState(stats);

  //fetch data from db.json
  useEffect(() => {
    fetch("http://localhost:3000/floodstats")
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
        setStats(data);
        setData(data);
      })
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

  function handleSearch(value) {
    // if (!value) {
    setData(stats);
    // }
    // if (stats.length !== 0) {
    let result = stats.filter((item) =>
      item.location.toLowerCase().includes(value.toLowerCase())
    );
    setData(result);
    console.log(data);
    // }
  }

  console.log(data);

  return (
    <>
      <Header item="home" onHandleSearch={handleSearch} />

      <div className="floodItemsBox">
        {data.map((stat, index) => {
          return (
            <div
              key={index}
              className="flexItems"
              // style={{ border: "5px solid white" }}
            >
              <div style={{ width: "100%" }}>
                <Link to={`/${stat.id}}`}>
                  <img src={stat.pictureUrl} alt="pic" />
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
