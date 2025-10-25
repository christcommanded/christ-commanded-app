import React, { useEffect, useMemo, useState } from 'react';
import type { MembershipAnnouncement } from '../../data/membership';

interface AnnouncementsTickerProps {
  announcements: MembershipAnnouncement[];
}

const ROTATION_INTERVAL = 7000;

const AnnouncementsTicker: React.FC<AnnouncementsTickerProps> = ({ announcements }) => {
  const safeAnnouncements = useMemo(() => announcements.filter(Boolean), [announcements]);
  const totalAnnouncements = safeAnnouncements.length;
  const hasAnnouncements = totalAnnouncements > 0;
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!hasAnnouncements) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % totalAnnouncements);
    }, ROTATION_INTERVAL);

    return () => window.clearInterval(timer);
  }, [hasAnnouncements, totalAnnouncements]);

  useEffect(() => {
    if (activeIndex >= totalAnnouncements) {
      setActiveIndex(0);
    }
  }, [activeIndex, totalAnnouncements]);

  if (!hasAnnouncements) {
    return null;
  }

  return (
    <section className="membership-section" aria-labelledby="membership-announcements-heading">
      <div className="section-header announcements-header">
        <h2 id="membership-announcements-heading" className="section-heading">
          Community Updates
        </h2>
        <div className="announcements-controls" role="group" aria-label="Announcement navigation">
          <button
            type="button"
            className="announcements-button"
            onClick={() =>
              setActiveIndex((current) =>
                current === 0 ? totalAnnouncements - 1 : current - 1,
              )
            }
            aria-label="Show previous announcement"
          >
            <span aria-hidden="true">‹</span>
          </button>
          <button
            type="button"
            className="announcements-button"
            onClick={() => setActiveIndex((current) => (current + 1) % totalAnnouncements)}
            aria-label="Show next announcement"
          >
            <span aria-hidden="true">›</span>
          </button>
        </div>
      </div>

      <div className="announcements-ticker" role="region" aria-live="polite">
        {safeAnnouncements.map((announcement, index) => {
          const isActive = index === activeIndex;
          return (
            <article
              key={announcement.id}
              id={`announcement-${announcement.id}`}
              className={`announcement ${isActive ? 'announcement--active' : 'announcement--hidden'}`}
              aria-hidden={!isActive}
              tabIndex={isActive ? 0 : -1}
            >
              <p>
                <span className="announcement__label" aria-hidden="true">
                  {announcement.category}
                </span>
                {announcement.message}{' '}
                {announcement.url ? (
                  <a href={announcement.url} className="announcement__link">
                    Learn more
                  </a>
                ) : null}
              </p>
            </article>
          );
        })}

        <div className="announcements-dots" aria-label="Announcement index">
          {safeAnnouncements.map((announcement, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={announcement.id}
                type="button"
                className={`announcements-dot ${isActive ? 'announcements-dot--active' : ''}`}
                aria-label={`Go to announcement ${index + 1}`}
                aria-current={isActive ? 'true' : undefined}
                onClick={() => setActiveIndex(index)}
                aria-controls={`announcement-${announcement.id}`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AnnouncementsTicker;
