import React, { useState } from 'react';
import './FloodReportForm.css'

const FloodReportForm = () => {
  const [formData, setFormData] = useState({
    location: '',
    continent: '',
    infrastructureDamage: '',
    time: '',
    date: '',
    severityLevel: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3000/reportforms`,{
    method:"POST",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify()
    })
    .then(res =>(res))
    .then(data =>(data))


    setFormSubmitted(true);
  };

  return (
    <div className="flood-report-form-container">
      {formSubmitted ? (
        <div className="submission-message">
          <h2>Thank you for reporting the flood incident.</h2>
          <p>We have received your report and will dispatch emergency assistance to the affected area as soon as possible.</p>
          <p>Your prompt action has helped us respond quickly to this critical situation. We appreciate your cooperation.</p>
        </div>
      ) : (
        <form className="flood-report-form" onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="location">Location:</label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="continent">Continent:</label>
            <select
              id="continent"
              name="continent"
              value={formData.continent}
              onChange={handleInputChange}
              required
            >
              <option value="">Select continent</option>
              <option value="africa">Africa</option>
              <option value="south-america">South America</option>
              <option value="australia">Australia</option>
              <option value="north-america">North America</option>
              <option value="asia">Asia</option>
              <option value="europe">Europe</option>
            </select>
          </div>
          <div className="form-field">
            <label htmlFor="infrastructureDamage">Infrastructure Damage:</label>
            <textarea
              id="infrastructureDamage"
              name="infrastructureDamage"
              value={formData.infrastructureDamage}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="time">Time:</label>
            <input
              type="time"
              id="time"
              name="time"
              value={formData.time}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="date">Date:</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="severityLevel">Severity Level:</label>
            <select
              id="severityLevel"
              name="severityLevel"
              value={formData.severityLevel}
              onChange={handleInputChange}
              required
            >
              <option value="">Select severity level</option>
              <option value="moderate">Moderate</option>
              <option value="high">High</option>
            </select>
          </div>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default FloodReportForm;
