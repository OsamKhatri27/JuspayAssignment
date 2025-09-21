import React from 'react';

const KPICard = ({ title, value, change, isPositive }) => {
  const changeClass = isPositive ? 'positive' : 'negative';
  const arrow = isPositive ? '↗' : '↘';

  return (
    <div className={`kpi-card kpi-card-${title}`}>
      <h3>{title}</h3>
      <p className="value">{value}</p>
      <div className={`change ${changeClass}`}>
        <span className="arrow">{arrow}</span>
        <span>{change}</span>
      </div>
    </div>
  );
};

export default KPICard;