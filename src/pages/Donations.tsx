import React from 'react';
import './PageStyles.css';
import { donationOpportunities } from '../data/donationOpportunities';

const Donations: React.FC = () => {
  return (
    <div className="page-section">
      <section className="page-hero">
        <h1>Give With Purpose</h1>
        <p>
          Your generosity fuels gospel-centered mission at home and abroad. Explore giving pathways
          that tangibly meet needs, equip leaders, and launch new ministries.
        </p>
        <div className="card-footer" style={{ marginTop: '2rem' }}>
          <a className="cta-link" href="/donations/recurring">
            Set Up Recurring Giving
          </a>
          <a className="cta-link secondary-link" href="/donations/report">
            View Impact Report
          </a>
        </div>
      </section>

      <section>
        <h2 className="section-heading">Featured Opportunities</h2>
        <p className="section-description">
          Discover the specific initiatives your giving empowers this season. Every gift tells a
          story of hope.
        </p>
        <div className="cards-grid">
          {donationOpportunities.map((opportunity) => (
            <article key={opportunity.id} className="card">
              <h3>{opportunity.title}</h3>
              <span>
                <strong>Impact:</strong> {opportunity.impact}
              </span>
              <span>
                <strong>Goal:</strong> {opportunity.goal}
              </span>
              <p>{opportunity.description}</p>
              <div className="card-footer">
                <a className="cta-link" href={`/donations/${opportunity.id}`}>
                  {opportunity.ctaLabel}
                </a>
                <a className="cta-link secondary-link" href="/donations/pledge">
                  Make a Pledge
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Donations;
