import React from 'react';

const RevenueChart = () => {
  return (
    <div className="line-chart-container">
      <div className="chart-header">
        <h3>Revenue</h3>
        <div className="chart-legend">
          <div className="legend-item">
            <div className="legend-dot" style={{ backgroundColor: 'var(--chart-color-3)' }}></div>
            Current Week $58,211
          </div>
          <div className="legend-item">
            <div className="legend-dot" style={{ backgroundColor: 'var(--chart-color-4)' }}></div>
            Previous Week $68,768
          </div>
        </div>
      </div>
      <svg viewBox="0 0 500 150" preserveAspectRatio="none">
        {/* Y-Axis Labels and Grid Lines */}
        <text x="-10" y="10" dy=".3em" textAnchor="end" fill="#64748b" fontSize="10">30M</text>
        <line x1="0" y1="10" x2="500" y2="10" stroke="#e2e8f0" strokeWidth="1" />
        <text x="-10" y="75" dy=".3em" textAnchor="end" fill="#64748b" fontSize="10">15M</text>
        <line x1="0" y1="75" x2="500" y2="75" stroke="#e2e8f0" strokeWidth="1" />
        <text x="-10" y="140" dy=".3em" textAnchor="end" fill="#64748b" fontSize="10">0</text>
        <line x1="0" y1="140" x2="500" y2="140" stroke="#e2e8f0" strokeWidth="1" />

        {/* Previous Week Data (Light Blue, Solid Line) */}
        <path d="M 0 75 Q 83 20, 166 75 T 332 100 T 500 40" fill="none" stroke="#a7c8fa" strokeWidth="2" />
        
        {/* Current Week Data (Dark, Dashed Line) */}
        <path d="M 0 100 Q 83 140, 166 100 T 332 30 T 500 50" fill="none" stroke="#1e293b" strokeWidth="2" strokeDasharray="4 4" />

        {/* X-Axis Labels */}
        <g transform="translate(0, 155)" fill="#64748b" fontSize="10" textAnchor="middle">
            <text x="0">Jan</text>
            <text x="100">Feb</text>
            <text x="200">Mar</text>
            <text x="300">Apr</text>
            <text x="400">May</text>
            <text x="500">Jun</text>
        </g>
      </svg>
    </div>
  );
};

export default RevenueChart;