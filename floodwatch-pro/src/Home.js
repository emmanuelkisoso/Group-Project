import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import FloodDetails from "./components/FloodDetails";

function Home() {
  const [stats, setStats] = useState([]);
  let [initNumber, setInitNumber] = useState(10);

  useEffect(() => {
    fetch("http://localhost:3000/floodstats")
      .then((r) => r.json())
      .then((data) => setStats(data))
      .catch((error) => alert(error.message));
  }, []);

  const simulateCasualtyIncrease = () => {
    setInterval(() => {
      setInitNumber(initNumber + 2);
    }, 10000);
  };

  simulateCasualtyIncrease();

  return (
    <>
      {/* <NavBar /> */}
      <div className="container">
        <div className="row">
          <div className="col-6 border w-25">
            <div className="col-10 border border-danger mx-auto">
              <h5 className="">Casualty count</h5>
              Number of displaced people: {initNumber}
            </div>
          </div>
          <div className="col-6">
            <div className="row border border-danger">
              {stats.map((stat) => (
                <div className="card col-3 m-3" key={stat.id}>
                  <Link to={`/floodDetails/${stat.id}`}><h5 className="card-title badge text-bg-dark m-2">{stat.continent}</h5></Link>
               
                  <div className="card-body">
                    <h5>{stat.location}</h5>
                    {stat.alertLevel === "red" ? (
                      <span className="badge rounded-pill text-bg-danger float-end mb-0">
                        severe
                      </span>
                    ) : (
                      <span className="badge rounded-pill text-bg-warning float-end mb-0">
                        moderate
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default Home;
