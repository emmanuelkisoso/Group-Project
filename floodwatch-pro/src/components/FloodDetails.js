import React, { useState, useEffect } from 'react';
import './FloodDetails.css';
import { useParams } from 'react-router-dom';

const FloodDetails = () => {
  const [floodData, setFloodData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://deployment-groupproject.onrender.com/floodstats');
        if (response.ok) {
          const data = await response.json();
          const floodEntry = data.find((item) => item.id === id);
          setFloodData(floodEntry);
        } else {
          console.error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div className="container-fluid" style={{ backgroundColor: 'black', color: '#f5f5f5', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {floodData ? (
        <div className="card h-100" style={{ maxWidth: '960px', width: '100%', backgroundColor: '#808080' }}>
          <div className="row no-gutters h-100">
            <div className="col-md-6" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              {floodData.pictureUrl && (
                <img src={floodData.pictureUrl} className="card-img-top h-100" alt="Flood" style={{ objectFit: 'cover' }} />
              )}
            </div>
            <div className="col-md-6" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div className="card-body">
                <h1 className="text-center mb-4">Flood Details</h1>
                <h5 className="card-title">{floodData.location}</h5>
                <p className="card-text">{floodData.description}</p>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item" style={{ backgroundColor: '#808080', color: '#f5f5f5' }}>
                    <strong>Severity:</strong> {floodData.severity}
                  </li>
                  <li className="list-group-item" style={{ backgroundColor: '#808080', color: '#f5f5f5' }}>
                    <strong>Water Level:</strong> {floodData.waterLevel}
                  </li>
                  <li className="list-group-item" style={{ backgroundColor: '#808080', color: '#f5f5f5' }}>
                    <strong>Reported By:</strong> {floodData.reportedBy || 'Emergency Services'}
                  </li>
                  <li className="list-group-item" style={{ backgroundColor: '#808080', color: '#f5f5f5' }}>
                    <strong>Last Updated:</strong> {floodData.lastUpdated}
                  </li>
                  <li className="list-group-item" style={{ backgroundColor: '#808080', color: '#f5f5f5' }}>
                    <strong>Latitude:</strong> {floodData.latitude}
                  </li>
                  <li className="list-group-item" style={{ backgroundColor: '#808080', color: '#f5f5f5' }}>
                    <strong>Longitude:</strong> {floodData.longitude}
                  </li>
                  <li className="list-group-item" style={{ backgroundColor: '#808080', color: '#f5f5f5' }}>
                    <strong>Alert Level:</strong> {floodData.alertLevel}
                  </li>
                  <li className="list-group-item" style={{ backgroundColor: '#808080', color: '#f5f5f5' }}>
                    <strong>Continent:</strong> {floodData.continent}
                  </li>
                  <li className="list-group-item" style={{ backgroundColor: '#808080', color: '#f5f5f5' }}>
                    <strong>Affected Population:</strong> {floodData.affectedPopulation}
                  </li>
                  <li className="list-group-item" style={{ backgroundColor: '#808080', color: '#f5f5f5' }}>
                    <strong>Evacuations:</strong> {floodData.evacuations}
                  </li>
                  <li className="list-group-item" style={{ backgroundColor: '#808080', color: '#f5f5f5' }}>
                    <strong>Casualties:</strong> {floodData.casualties}
                  </li>
                  <li className="list-group-item" style={{ backgroundColor: '#808080', color: '#f5f5f5' }}>
                    <strong>Infrastructure Damage:</strong> {floodData.infrastructureDamage}
                  </li>
                  <li className="list-group-item" style={{ backgroundColor: '#808080', color: '#f5f5f5' }}>
                    <strong>Economic Impact:</strong> {floodData.economicImpact}
                  </li>
                  <li className="list-group-item" style={{ backgroundColor: '#808080', color: '#f5f5f5' }}>
                    <strong>Response:</strong> {floodData.response}
                  </li>
                  <li className="list-group-item" style={{ backgroundColor: '#808080', color: '#f5f5f5' }}>
                    <strong>Report Status:</strong> {floodData.reportStatus}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p onClick={() => setFloodData(floodData)}>Loading...</p>
      )}
    </div>
  );
};

export default FloodDetails;
