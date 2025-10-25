import React from 'react';
import './PageStyles.css';
import { donationOpportunities } from '../data/donationOpportunities';

const givingPlatforms = [
  {
    id: 'tithely',
    name: 'Tithely Online Giving',
    description:
      'Give securely through our Tithely portal to support weekly ministries, outreach, and benevolence needs. You can choose one-time or recurring schedules.',
    url: 'https://tithe.ly/give?c=christcommandedchurch',
    details: 'Fast, secure, and tax-receipted giving for tithes and offerings.',
  },
  {
    id: 'paypal',
    name: 'PayPal Missions Fund',
    description:
      'Fuel our missionaries and church planters worldwide. PayPal allows you to cover fees and leave notes for specific mission fields.',
    url: 'https://www.paypal.com/donate/?hosted_button_id=CHRISTCOMMANDED',
    details: 'Designate support for missions teams, church plants, and training initiatives.',
  },
  {
    id: 'cashapp',
    name: 'Cash App Compassion',
    description:
      'Send rapid relief for families in crisis, student scholarships, and local compassion projects directly from your mobile device.',
    url: 'https://cash.app/$ChristCommanded',
    details: 'Use $ChristCommanded in Cash App to partner with our compassion response fund.',
  },
];

const qrCodes = [
  {
    id: 'tithely-qr',
    title: 'Scan for Tithely',
    description: 'Open the Tithely giving portal instantly to set up digital tithes and offerings.',
    imageSrc: '/images/qr-tithely.svg',
    alt: 'QR code linking to the Christ Commanded Church Tithely giving portal',
  },
  {
    id: 'cashapp-qr',
    title: 'Scan for Cash App',
    description: 'Launch Cash App with our $ChristCommanded profile ready to give.',
    imageSrc: '/images/qr-cashapp.svg',
    alt: 'QR code linking to the Christ Commanded Church Cash App profile',
  },
];

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

      <section>
        <h2 className="section-heading">Digital Giving Channels</h2>
        <p className="section-description">
          Choose the platform that fits your household best. Each partner provides secure giving
          that flows straight into the ministry budgets you designate.
        </p>
        <div className="cards-grid">
          {givingPlatforms.map((platform) => (
            <article key={platform.id} className="card card--giving">
              <h3>{platform.name}</h3>
              <p>{platform.description}</p>
              <span className="card__detail">{platform.details}</span>
              <div className="card-footer">
                <a
                  className="cta-link"
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Give via {platform.name.split(' ')[0]}
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="qr-section">
        <h2 className="section-heading">Quick Give with QR Codes</h2>
        <p className="section-description">
          Use your phone camera to launch our trusted giving partners instantly during worship
          services or while you are on the go.
        </p>
        <div className="qr-grid">
          {qrCodes.map((qr) => (
            <figure key={qr.id} className="qr-card">
              <img src={qr.imageSrc} alt={qr.alt} loading="lazy" />
              <figcaption>
                <h3>{qr.title}</h3>
                <p>{qr.description}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="contact-section">
        <h2 className="section-heading">Need Assistance with Your Gift?</h2>
        <p className="section-description">
          Our finance and stewardship team is ready to help you set up recurring giving, update
          payment methods, or answer tax receipt questions.
        </p>
        <div className="contact-details">
          <div>
            <h3>Talk with Us</h3>
            <p>
              Email <a href="mailto:giving@christcommanded.church">giving@christcommanded.church</a>{' '}
              or call <a href="tel:12145550184">(214) 555-0184</a> Monday–Thursday, 9 a.m.–4 p.m. CT.
            </p>
          </div>
          <div>
            <h3>Mail a Check</h3>
            <p>
              Christ Commanded Church Finance Office
              <br />
              812 Kingdom Way, Suite 200
              <br />
              Dallas, TX 75201
            </p>
          </div>
          <div>
            <h3>Employer Matching</h3>
            <p>
              Request our nonprofit documentation by emailing
              {' '}
              <a href="mailto:matching@christcommanded.church">matching@christcommanded.church</a> so we
              can help activate a matching gift through your workplace.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donations;
