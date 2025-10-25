import React from 'react';
import './PageStyles.css';
import { homeHighlights } from '../data/homeHighlights';
import { useDailyVerse } from '../hooks/useDailyVerse';

const Home: React.FC = () => {
  const { verse, message, isLoading, isError } = useDailyVerse();

  return (
    <div className="page-section">
      <section className="page-hero home-hero">
        <div className="hero-verse">
          <span className="hero-verse__label">Daily Scripture</span>
          {isLoading ? (
            <div className="hero-verse__placeholder" aria-live="polite">
              <div className="hero-verse__loader" />
              <div className="hero-verse__loader hero-verse__loader--short" />
              <span className="hero-verse__loading-text">Preparing today&apos;s encouragement...</span>
            </div>
          ) : isError || !verse ? (
            <div className="hero-verse__placeholder hero-verse__placeholder--error" role="alert">
              <p>{message ?? 'We weren\'t able to load the verse right now. Please check back soon.'}</p>
            </div>
          ) : (
            <>
              <blockquote>{verse.text}</blockquote>
              <cite>
                {verse.reference}
                {verse.version ? ` · ${verse.version}` : ''}
              </cite>
              {message && <p className="hero-verse__note">{message}</p>}
            </>
          )}
        </div>

        <div className="hero-content">
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
