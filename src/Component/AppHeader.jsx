// src/components/Header.jsx
import React from 'react';
import { FiSearch, FiBell, FiSettings, FiMaximize } from 'react-icons/fi';

const AppHeader = () => {
  return (
    <header className="header">
      <div className="header__breadcrumb">Dashboards / Default</div>
      <div className="header__actions">
        <FiSearch />
        <FiBell />
        <FiSettings />
        <FiMaximize />
        <div className="header__user-info">
          <div className="header__user-avatar">B</div>
          <span className="header__notification-badge">8</span>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;