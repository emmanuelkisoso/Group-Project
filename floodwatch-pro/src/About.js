import Footer from "./Footer";
import Header from "./Header";
import "./Home.css";
import { useState } from "react";

function About() {
  const [amount, setAmount] = useState(10);

  function handleDonations(e) {
    e.preventDefault();
    const donation = {
      amount: amount,
    };
    fetch("http://localhost:3000/donations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(donation),
    })
      .then((res) => res.json())
      .then((data) => data);
  }

  return (
    <>
      <Header item="about" />
      <div>
        <h1>About FloodWatch</h1>
        <div className="aboutFloodWatch">
          <p>
            FloodWatch is a web application designed to provide timely and
            accurate information about flooding events around the world. Our
            platform aggregates data from various sources, including official
            reports, news agencies, and user submissions, to deliver
            comprehensive coverage of flood-related incidents.
          </p>
          <p>
            The primary goal of FloodWatch is to help individuals and
            communities stay informed about flood risks in their area, enabling
            them to take proactive measures to protect lives and property.
            Whether you're a resident, emergency responder, or policymaker,
            FloodWatch equips you with the information you need to make informed
            decisions during flood events.
          </p>
        </div>
        <h1>Key Features:</h1>
        <div className="aboutLi">
          <ul>
            <li>Real-time updates on flood alerts and warnings</li>
            <li>
              Detailed reports on flood severity, impact, and response efforts
            </li>
            <li>Interactive map visualization of flood-affected areas</li>
            <li>
              Ability to filter and search for specific locations or incidents
            </li>
            <li>
              User-friendly interface accessible on desktop and mobile devices
            </li>
          </ul>
        </div>
        <h1>Data Source:</h1>
        <div className="aboutFloodWatch">
          <p>
            FloodWatch relies on a variety of data sources to provide
            comprehensive coverage of flooding events. The primary data source
            for our platform is a JSON database containing detailed information
            about recent flooding incidents worldwide. This database is
            regularly updated with verified reports from official sources,
            ensuring the accuracy and reliability of the information presented
            on FloodWatch.
          </p>
        </div>
        {/* Optionally, you can display a map or some visual representation of the flood incidents */}
      </div>

      <h1>Donations</h1>
      <div className="donations">
        <p>Donate to save a family</p>
        <form onSubmit={handleDonations}>
          <label for="amount" className="lugrasimo-regular">
            Donate:
          </label>
          <input
            id="amount"
            type="number"
            placeholder="Enter Amount (Kes)"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <button type="submit">Donate</button>
        </form>
        <div className="payPal">Total donations: {}</div>
      </div>

      <Footer />
    </>
  );
}

export default About;
