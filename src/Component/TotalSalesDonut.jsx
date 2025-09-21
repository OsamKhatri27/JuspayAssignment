import React from 'react';

const TotalSalesDonut = () => {
    return (
        <div className="sales-chart-container">
            <h3>Total Sales</h3>
            <div className="donut-chart-wrapper">
                <div className="donut-chart">
                    <div className="donut-chart-center">
                        65%
                    </div>
                </div>
                <div className="sales-legend">
                    <div className="legend-item">
                        <div className="legend-info">
                            <div className="legend-dot" style={{ backgroundColor: 'var(--chart-color-3)' }}></div>
                            Direct
                        </div>
                        <span>$300.56</span>
                    </div>
                    <div className="legend-item">
                        <div className="legend-info">
                            <div className="legend-dot" style={{ backgroundColor: 'var(--chart-color-1)' }}></div>
                            Affiliate
                        </div>
                        <span>$135.18</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TotalSalesDonut;