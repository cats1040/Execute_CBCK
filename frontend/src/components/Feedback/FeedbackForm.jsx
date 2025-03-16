import React, { useState } from 'react';
import './Feedback.css';

const Feedback = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(5);
  const [quality, setQuality] = useState(5);
  const [service, setService] = useState(5);
  const [comments, setComments] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ name, price, quality, service, comments });
    alert('Thank you for your feedback!');
  };

  return (
    <div id="feedback-container" className="feedback-container">
      <h2 id="feedback-title">Feedback Form</h2>
      <form id="feedback-form" onSubmit={handleSubmit}>
        <div className="form-group" id="name-group">
          <label htmlFor="name-input">Your Name (Optional):</label>
          <input
            id="name-input"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Leave blank to remain anonymous"
          />
        </div>
        <div className="form-group" id="price-group">
          <label htmlFor="price-select">Price (1-5):</label>
          <select id="price-select" value={price} onChange={(e) => setPrice(e.target.value)}>
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num}>
                {num} - {num === 5 ? 'Excellent' : ''}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group" id="quality-group">
          <label htmlFor="quality-select">Quality (1-5):</label>
          <select id="quality-select" value={quality} onChange={(e) => setQuality(e.target.value)}>
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num}>
                {num} - {num === 5 ? 'Excellent' : ''}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group" id="service-group">
          <label htmlFor="service-select">Service (1-5):</label>
          <select id="service-select" value={service} onChange={(e) => setService(e.target.value)}>
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num}>
                {num} - {num === 5 ? 'Excellent' : ''}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group" id="comments-group">
          <label htmlFor="comments-textarea">Additional Comments:</label>
          <textarea
            id="comments-textarea"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            placeholder="Your feedback..."
          />
        </div>
        <button id="submit-button" type="submit">Submit Feedback</button>
      </form>
    </div>
  );
};

export default Feedback;