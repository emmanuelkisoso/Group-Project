import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";


//Homepage component
function Home() {
  const [stats, setStats] = useState([]);
  let [initNumber, setInitNumber] = useState(10);

  //fetch data from db.json
  useEffect(() => {
    fetch("http://localhost:3000/floodstats")
      .then((r) => r.json())
      .then((data) => setStats(data))
      .catch((error) => alert(error.message));
  }, []);

  // Function to simulate slowly increasing casualty count
  const simulateCasualtyIncrease = () => {
    setInterval(() => {
      setInitNumber(initNumber + 2);
    }, 10000); // Random delay between 10 to 20 minutes
  };
  simulateCasualtyIncrease();

  return (
    <>
    <NavBar />
    <div className="container">
      <div className="row">
        <div className="col-6 border w-25">
          <div className="col-10 border border-danger mx-auto">
            <h5 className="">Casualty count</h5>
            Number of displaced people:
            {initNumber}
          </div>
        </div>
        <div className="col-6">
          <div className="row border border-danger">
            {stats.map((stat) => {
              return (
                <div
                  className="card col-3 m-3"
                  key={stat.id}
                  // style={{ width: "18rem" }}
                >
                  <h5 className="card-title badge text-bg-dark m-2">
                    {stat.continent}
                  </h5>
                  <Link to={`/${stat.id}`}>
                    <img
                      src={stat.pictureUrl}
                      className="card-img-top"
                      alt="pic"
                    />{" "}
                  </Link>
                  <div className="card-body">
                    <h5>{stat.location}</h5>

                    {stat.alertLevel === "red" ? (
                      <span class="badge rounded-pill text-bg-danger float-end mb-0">
                        severe
                      </span>
                    ) : (
                      <span class="badge rounded-pill text-bg-warning float-end mb-0">
                        moderate
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </>
  );
}

export default Home;
