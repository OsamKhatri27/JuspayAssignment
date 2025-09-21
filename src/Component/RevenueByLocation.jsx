import React from 'react';

const RevenueByLocation = () => {
  const locations = [
    { name: 'New York', value: '72' },
    { name: 'San Francisco', value: '39' },
    { name: 'Sydney', value: '25' },
    { name: 'Singapore', value: '61' },
  ];

  return (
    <div className="location-container">
      <h3>Revenue by Location</h3>
      <div className="location-map-placeholder">
              </div>
      <div className="location-list">
        <ul>
          {locations.map(loc => (
            <>
               <li key={loc.name} className="location-item">
              <span>{loc.name}</span>
              <span>{loc.value+'K'}</span>
            </li>
            <div className="progress-bar-container">
      <div className="progress-bar" style={{ width: `${loc.value}%` }}>
      </div>
    </div>
            </>
         
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RevenueByLocation;