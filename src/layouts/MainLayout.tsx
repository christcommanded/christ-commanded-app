import React, { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import './MainLayout.css';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/prayer-requests', label: 'Prayer Requests' },
  { to: '/teachings', label: 'Teachings' },
  { to: '/donations', label: 'Donations' },
  { to: '/membership', label: 'Membership' },
];

type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => (
  <div className="layout-root">
    <header className="layout-header">
      <div className="header-content">
        <div className="brand">
          <span className="brand-mark">Christ Commanded</span>
          <span className="brand-subtitle">Living the Gospel together</span>
        </div>
        <nav className="nav">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `nav-link${isActive ? ' nav-link-active' : ''}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <a className="cta-button" href="/donations">
          Give Now
        </a>
      </div>
    </header>

    <main className="layout-main">{children}</main>

    <footer className="layout-footer">
      <div className="footer-content">
        <div>
          <h4>Christ Commanded Church</h4>
          <p>Gather • Pray • Serve • Love</p>
        </div>
        <div className="footer-links">
          <a href="/contact">Contact</a>
          <a href="/events">Events</a>
          <a href="/volunteer">Volunteer</a>
        </div>
      </div>
      <p className="footer-copy">&copy; {new Date().getFullYear()} Christ Commanded Church. All rights reserved.</p>
    </footer>
  </div>
);

export default MainLayout;
