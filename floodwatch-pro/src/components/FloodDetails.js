import React, { useState, useEffect } from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
import './FloodDetails.css';

const FloodDetails = () => {
  const [floodData, setFloodData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/floodstats');
        if (response.ok) {
          const data = await response.json();
          setFloodData(data);
        } else {
          console.error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Flood Details</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {floodData.map((flood, index) => (
          <div className="col" key={flood.id || index}>
            <div className="card h-100">
              {flood.pictureUrl && (
                <img src={flood.pictureUrl} className="card-img-top" alt="Flood" />
              )}
              <div className="card-body">
                <h5 className="card-title">{flood.location}</h5>
                <p className="card-text">{flood.description}</p>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item"><strong>Severity:</strong> {flood.severity}</li>
                  <li className="list-group-item"><strong>Water Level:</strong> {flood.waterLevel}</li>
                  <li className="list-group-item"><strong>Reported By:</strong> {flood.reportedBy}</li>
                  <li className="list-group-item"><strong>Last Updated:</strong> {flood.lastUpdated}</li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FloodDetails;