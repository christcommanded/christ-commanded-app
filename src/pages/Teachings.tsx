import React from 'react';
import './PageStyles.css';
import { teachings } from '../data/teachings';

const Teachings: React.FC = () => {
  return (
    <div className="page-section">
      <section className="page-hero">
        <h1>Teachings & Resources</h1>
        <p>
          Grow deeper with sermons, devotionals, and conversations crafted to encourage faith in
          action. Stream, download, or share the message that speaks to your moment.
        </p>
        <div className="card-footer" style={{ marginTop: '2rem' }}>
          <a className="cta-link" href="/teachings/archive">
            Browse Full Archive
          </a>
          <a className="cta-link secondary-link" href="/podcast">
            Subscribe to Podcast
          </a>
        </div>
      </section>

      <section>
        <h2 className="section-heading">Latest Messages</h2>
        <p className="section-description">
          Weekly teachings from our pastoral and teaching teams designed to inspire whole-life
          discipleship.
        </p>
        <div className="cards-grid">
          {teachings.map((teaching) => (
            <article key={teaching.id} className="card">
              <h3>{teaching.title}</h3>
              <span>
                <strong>Speaker:</strong> {teaching.speaker}
              </span>
              <span>
                <strong>Date:</strong> {teaching.date}
              </span>
              <span>
                <strong>Theme:</strong> {teaching.theme}
              </span>
              <p>{teaching.summary}</p>
              <div className="card-footer">
                <a className="cta-link" href={`/teachings/${teaching.id}`}>
                  {teaching.ctaLabel}
                </a>
                <a className="cta-link secondary-link" href={`/teachings/${teaching.id}/notes`}>
                  Study Guide
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Teachings;
