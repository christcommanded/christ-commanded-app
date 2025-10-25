import React from 'react';
import type { MembershipEvent } from '../../data/membership';

interface EventsListProps {
  events: MembershipEvent[];
}

const EventsList: React.FC<EventsListProps> = ({ events }) => {
  if (!events.length) {
    return null;
  }

  return (
    <section className="membership-section" aria-labelledby="membership-events-heading">
      <div className="section-header">
        <h2 id="membership-events-heading" className="section-heading">
          Upcoming Gatherings
        </h2>
        <p className="section-description">
          Reserve your spot at an upcoming membership event. Each gathering is designed to help you
          build meaningful connections and discover your place in our community.
        </p>
      </div>

      <ul className="events-list" role="list">
        {events.map((event) => (
          <li key={event.id} className="event-card" aria-label={`${event.title} on ${event.datetime}`}>
            <div className="event-card__header">
              <h3>{event.title}</h3>
              <time dateTime={event.isoDate} className="event-card__date">
                {event.datetime}
              </time>
            </div>

            <p className="event-card__description">{event.description}</p>

            <dl className="event-card__details">
              <div>
                <dt>Location</dt>
                <dd>{event.location}</dd>
              </div>
              <div>
                <dt>Hosts</dt>
                <dd>{event.hosts}</dd>
              </div>
            </dl>

            <div className="event-card__footer">
              {event.registrationUrl ? (
                <a
                  href={event.registrationUrl}
                  className="cta-link"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Reserve a Seat
                </a>
              ) : (
                <span className="event-card__status" role="status">
                  Registration coming soon
                </span>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default EventsList;
