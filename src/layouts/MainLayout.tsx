import React, { ReactNode } from 'react';
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
        <nav className="nav" aria-label="Primary">
          {navLinks.map((link) => (
            <a key={link.to} className="nav-link" href={link.to}>
              {link.label}
            </a>
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
