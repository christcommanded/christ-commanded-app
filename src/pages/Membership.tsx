import React from 'react';
import './PageStyles.css';
import { membershipSteps } from '../data/membershipSteps';

const Membership: React.FC = () => {
  return (
    <div className="page-section">
      <section className="page-hero">
        <h1>Belong & Become</h1>
        <p>
          Membership at Christ Commanded is about covenant community. Discover the pathway that
          helps you plant deep roots, discern your calling, and join God&apos;s mission with us.
        </p>
        <div className="card-footer" style={{ marginTop: '2rem' }}>
          <a className="cta-link" href="/membership/interest">
            Start the Journey
          </a>
          <a className="cta-link secondary-link" href="/serve">
            Explore Serving Teams
          </a>
        </div>
      </section>

      <section>
        <h2 className="section-heading">Pathway to Membership</h2>
        <p className="section-description">
          Move at your own pace and connect with a pastor or mentor at every step. We&apos;re ready to
          walk with you.
        </p>
        <div className="cards-grid">
          {membershipSteps.map((step) => (
            <article key={step.id} className="card">
              <h3>{step.title}</h3>
              <span>
                <strong>When:</strong> {step.duration}
              </span>
              <p>{step.description}</p>
              <div className="card-footer">
                <a className="cta-link" href={`/membership/${step.id}`}>
                  {step.ctaLabel}
                </a>
                <a className="cta-link secondary-link" href="/mentor-connect">
                  Talk with a Pastor
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Membership;
