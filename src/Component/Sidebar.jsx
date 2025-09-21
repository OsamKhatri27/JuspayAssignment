// src/components/Sidebar.jsx
import React from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import {
  FiStar,
  FiClock,
  FiGrid,
  FiBarChart2,
  FiUser,
  FiBriefcase,
  FiMessageSquare,
  FiBookOpen
} from 'react-icons/fi';

// Make NavLink reusable with `to` prop
const NavLink = ({ icon, text, to }) => (
  <RouterNavLink
    to={to}
    className={({ isActive }) =>
      `sidebaar__nav-link ${isActive ? 'active' : ''}`
    }
  >
    <span className="sidebaar__icon">{icon}</span>
    {text}
  </RouterNavLink>
);

const Sidebar = ({ isOpen }) => {
  return (
    <aside className={`sidebaar ${isOpen ? 'open' : ''}`}>
      <div className="sidebaar__logo">ByeWind</div>
      <nav>
        <div className="sidebaar__nav-section">
          <NavLink icon={<FiStar />} text="Favorites" to="/favorites" />
          <NavLink icon={<FiClock />} text="Recently" to="/recently" />
        </div>

        <div className="sidebaar__nav-section">
          <h3 className="sidebaar__nav-title">Dashboards</h3>
          <NavLink icon={<FiUser />} text="Default" to="/" />
          <NavLink icon={<FiBriefcase />} text="eCommerce" to="/ecommerce" />
          <NavLink icon={<FiBookOpen />} text="Projects" to="/projects" />
          <NavLink icon={<FiMessageSquare />} text="Online Courses" to="/courses" />
        </div>

        <div className="sidebaar__nav-section">
          <h3 className="sidebaar__nav-title">Projects</h3>
          <NavLink icon={<FiGrid />} text="Overview" to="/overview" />
          <NavLink icon={<FiBarChart2 />} text="Projects" to="/projects" />
        </div>

        <div className="sidebaar__nav-section">
          <h3 className="sidebaar__nav-title">Pages</h3>
          <NavLink icon={<FiUser />} text="User Profile" to="/profile" />
          <NavLink icon={<FiBriefcase />} text="Account" to="/account" />
          <NavLink icon={<FiBookOpen />} text="Blog" to="/blog" />
          <NavLink icon={<FiMessageSquare />} text="Social" to="/social" />
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
