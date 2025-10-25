import React from 'react';
import './PageStyles.css';
import { homeHighlights } from '../data/homeHighlights';

const Home: React.FC = () => {
  return (
    <div className="page-section">
      <section className="page-hero">
        <h1>Welcome to Christ Commanded Church</h1>
        <p>
          A community pursuing the way of Jesus through prayer, teaching, and mission. Together we
          practice radical hospitality, Spirit-led generosity, and courageous love for our neighbors.
        </p>
        <div className="card-footer" style={{ marginTop: '2rem' }}>
          <a className="cta-link" href="/teachings">
            Explore Latest Teachings
          </a>
          <a className="cta-link secondary-link" href="/prayer-requests">
            Share a Prayer Need
          </a>
        </div>
      </section>

      <section>
        <h2 className="section-heading">This Week at Christ Commanded</h2>
        <p className="section-description">
          Stay in step with what God is doing in our house churches, gatherings, and mission teams.
          Every touchpoint is an invitation to belong and be sent.
        </p>
        <div className="cards-grid">
          {homeHighlights.map((highlight) => (
            <article key={highlight.id} className="card">
              <h3>{highlight.title}</h3>
              <p>{highlight.description}</p>
              <div className="card-footer">
                <a className="cta-link" href={highlight.actionHref}>
                  {highlight.actionLabel}
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
