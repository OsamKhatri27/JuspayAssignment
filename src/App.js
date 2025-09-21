// src/App.jsx
import React, { useState } from 'react';
import Sidebar from './Component/Sidebar';
import AppHeader from './Component/AppHeader';
import OrderTable from './Component/OrderTable';
import { FiMenu } from 'react-icons/fi';
import './App.css'; // Import our stylesheet
import MainDashboard from './Component/MainDashboard';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="dashboard-layout-main">
      <Sidebar isOpen={isSidebarOpen} />
      
      <main className="main-content-container">
        {/* Header for mobile view */}
        <header className="mobile-header">
          <div className="mobile-header__logo">ByeWind</div>
          <button
         
            className="mobile-header__menu-btn" 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <FiMenu />
          </button>
        </header>
        
        {/* Header for desktop view */}
        <AppHeader />
         <div style={{border: 'solid 0.8px #e5e7eb', width: '100%'}}/>
        <Routes>
           <Route path="/" element={<MainDashboard />} />
           <Route path="/ecommerce" element={<OrderTable/>}/>
        </Routes>
      </main>

      {/* Overlay for mobile view when sidebar is open */}
      {isSidebarOpen && (
        <div 
          className="overlay" 
          onClick={() => setIsSidebarOpen(false)}
          style={{position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 999}}
        ></div>
      )}
    </div>
  );
}

export default App;