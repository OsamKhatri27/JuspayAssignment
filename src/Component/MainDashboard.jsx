import React from 'react';
import '../../src/App.css';

import KPICard from './KPICard';
import ProjectionsChart from './ProjectionsChart';
import RevenueChart from './RevenueChart';
import TopProductsTable from './TopProductsTable';
import RevenueByLocation from './RevenueByLocation';
import TotalSalesDonut from './TotalSalesDonut';
import { orders } from '../data';

function App() {
  return (
    <div className="dashboard-container">
      <h1>eCommerce</h1>

      {/* Main Flexbox Layout */}
      <div className='dashboard-flex'>

      
      <main className="dashboard-layout">

        {/* Column 1: Main Content */}
        <div className="main-content">
          <div className="kpi-section">
            <div className="kpi-column">
              <KPICard title="Customers" value="3,781" change="+11.01%" isPositive={true} />
              <KPICard title="Revenue" value="$695" change="+15.03%" isPositive={true} />
            </div>
            <div className="kpi-column">
              <KPICard title="Orders" value="1,219" change="-0.03%" isPositive={false} />
              <KPICard title="Growth" value="30.1%" change="+6.08%" isPositive={true} />
            </div>
          </div>
          <div className="card">
            <RevenueChart />
          </div>
          <div className="card">
            <TopProductsTable />
          </div>
        </div>

        {/* Column 2: Sidebar */}
        <div className="sidebar">
          <div className="card">
            <ProjectionsChart />
          </div>
          <div className="card">
            <RevenueByLocation />
          </div>
          <div className="card">
            <TotalSalesDonut />
          </div>
        </div>
        
      </main>
      <div className='notification'>
         <div style={{marginBottom:'50px'}}>
            <p>Activities</p>
        <div>
           {orders.map((order)=>(
             <div className="user-cell" style={{marginBottom:'10px'}}>
                    <img src={order.user.avatar} alt={order.user.name} />
                    <div>
                    <p style={{margin:0}}>{order.feedback}</p>
                     <p style={{fontSize:'11px',margin:0}}>{order.date}</p>
                    </div>
                  </div>
           ))}
        </div>
        </div>

        <div>
            <p>Contacts</p>
        <div>
           {orders.map((order)=>(
             <div className="user-cell" style={{marginBottom:'10px'}}>
                    <img src={order.user.avatar} alt={order.user.name} />
                    <span>{order.user.name}</span>
                  </div>
           ))}
        </div>
        </div>
        
      </div>
      </div>
    </div>
  );
}

export default App;