import React from 'react';

const ProjectionsChart = () => {
  const data = [
    { month: 'Jan', proj: 70, actual: 80 },
    { month: 'Feb', proj: 85, actual: 95 },
    { month: 'Mar', proj: 60, actual: 75 },
    { month: 'Apr', proj: 85, actual: 90 },
    { month: 'May', proj: 55, actual: 70 },
    { month: 'Jun', proj: 80, actual: 88 },
  ];

  return (
    <div className="projections-chart-container">
      <div className="chart-header">
        <h3>Projections vs Actuals</h3>
      </div>
      <div className="bar-chart-container">
        <div className="y-axis-labels">
            <span>30M</span>
            <span>20M</span>
            <span>10M</span>
            <span>0</span>
        </div>
        {data.map((d, i) => (
          <div key={i} className="bar-group">
            <div className="bar bar-1" style={{ height: `${d.proj}%`}}></div>
            <div className="bar bar-2" style={{ height: `${d.actual}%` }}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectionsChart;