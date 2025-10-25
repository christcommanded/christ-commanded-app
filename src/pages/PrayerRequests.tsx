import React from 'react';
import './PageStyles.css';
import { prayerRequests } from '../data/prayerRequests';

const PrayerRequests: React.FC = () => {
  return (
    <div className="page-section">
      <section className="page-hero">
        <h1>Pray With Us</h1>
        <p>
          We believe prayer changes stories. Intercede for brothers, sisters, and neighbors who have
          shared needs with our prayer team this week.
        </p>
        <div className="card-footer" style={{ marginTop: '2rem' }}>
          <a className="cta-link" href="/prayer-request-form">
            Submit a Prayer Request
          </a>
          <a className="cta-link secondary-link" href="/prayer-team">
            Join the Prayer Team
          </a>
        </div>
      </section>

      <section>
        <h2 className="section-heading">Community Requests</h2>
        <p className="section-description">
          Lift up these stories throughout your week, and let us know how the Spirit leads you to
          care for those in need.
        </p>
        <div className="cards-grid">
          {prayerRequests.map((item) => (
            <article key={item.id} className="card">
              <h3>{item.focus}</h3>
              <p>{item.request}</p>
              <span>
                <strong>From:</strong> {item.name}
              </span>
              <span>
                <strong>Urgency:</strong> {item.urgency}
              </span>
              <div className="card-footer">
                <a className="cta-link" href="/prayer-commitment">
                  Commit to Pray
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PrayerRequests;
