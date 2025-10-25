import { useMemo } from 'react';
import viteLogo from '/vite.svg';

import cccMark from './assets/ccc-mark.svg';
import { homeHighlights } from './data/homeHighlights';
import './pages/PageStyles.css';

const navigationLinks = [
  { href: '#gatherings', label: 'Gather' },
  { href: '#serve', label: 'Serve' },
  { href: '#resources', label: 'Resources' },
];

const resourceLinks = [
  {
    href: 'https://christcommanded.church/prayer',
    label: 'Submit a Prayer Request',
    description: 'Share needs with our intercession teams and receive follow-up care.',
  },
  {
    href: 'https://christcommanded.church/events',
    label: 'Upcoming Gatherings',
    description: 'See weekly rhythms, workshops, and special services across our campuses.',
  },
  {
    href: 'https://christcommanded.church/give',
    label: 'Give Online',
    description: 'Partner with the mission through secure digital giving options.',
  },
];

function App() {
  const highlights = useMemo(() => homeHighlights, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-deep-blue via-deep-blue/95 to-deep-blue/90 text-white">
      <a
        href="#main-content"
        className="absolute left-1/2 top-4 -translate-x-1/2 -translate-y-24 rounded-full bg-white px-5 py-3 text-sm font-semibold text-deep-blue shadow-lg transition focus-visible:translate-y-0"
      >
        Skip to main content
      </a>

      <header className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10" aria-label="Site header">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <img
              src={cccMark}
              width="64"
              height="64"
              className="h-16 w-16 flex-shrink-0"
              alt="Christ Commanded Church emblem"
            />
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-gold">Christ Commanded Church</p>
              <h1 className="text-3xl font-bold leading-tight sm:text-4xl">Living the Gospel Together</h1>
              <p className="mt-2 max-w-xl text-white/80">
                We are a community following the way of Jesus through prayer, hospitality, and mission.
              </p>
            </div>
          </div>
          <nav aria-label="Primary" className="flex flex-col gap-2 sm:items-end">
            <ul className="flex flex-wrap gap-3">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <a
                    className="inline-flex items-center rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white/90 transition-colors hover:bg-white/10"
                    href={link.href}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <a className="cta-link" href="/donations">
              Give Now
            </a>
          </nav>
        </div>
      </header>

      <main id="main-content" className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 pb-16" aria-label="Main content">
        <section
          id="gatherings"
          aria-labelledby="gatherings-heading"
          className="rounded-3xl bg-white/10 p-8 backdrop-blur-md"
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-xl space-y-4">
              <h2 id="gatherings-heading" className="text-3xl font-semibold text-gold">
                Gather in House Churches
              </h2>
              <p className="text-white/80">
                Discover rhythms of worship, shared meals, and discipleship conversations that form us into
                Christlike neighbors. Each gathering equips you to live sent throughout the week.
              </p>
              <div className="flex flex-wrap gap-3">
                <a className="cta-link" href="/membership">
                  Find a House Church
                </a>
                <a className="cta-link secondary-link" href="/prayer-requests">
                  Request Prayer Support
                </a>
              </div>
            </div>
            <div className="space-y-4 rounded-2xl border border-white/20 bg-white/5 p-6">
              <h3 className="text-xl font-semibold text-white">This Week&apos;s Scripture Focus</h3>
              <p className="text-sm uppercase tracking-[0.35em] text-gold">Matthew 28:18-20</p>
              <p className="text-white/80">
                “Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of
                the Holy Spirit.”
              </p>
            </div>
          </div>
        </section>

        <section id="serve" aria-labelledby="serve-heading" className="space-y-6">
          <div className="space-y-2">
            <h2 id="serve-heading" className="text-3xl font-semibold text-gold">
              Serve With Courageous Love
            </h2>
            <p className="max-w-2xl text-white/80">
              Every team is an opportunity to embody the compassion of Jesus. Explore ways to offer your time and talents
              locally and globally.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {highlights.map((highlight) => (
              <article key={highlight.id} className="card" aria-labelledby={`${highlight.id}-title`}>
                <h3 id={`${highlight.id}-title`} className="text-xl font-semibold text-deep-blue">
                  {highlight.title}
                </h3>
                <p className="text-deep-blue/80">{highlight.description}</p>
                <div className="card-footer">
                  <a className="cta-link" href={highlight.actionHref}>
                    {highlight.actionLabel}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="resources" aria-labelledby="resources-heading" className="space-y-6">
          <div className="space-y-2">
            <h2 id="resources-heading" className="text-3xl font-semibold text-gold">
              Stay Connected Wherever You Are
            </h2>
            <p className="max-w-2xl text-white/80">
              Bookmark essential links to stay updated on teachings, community care, and generosity initiatives.
            </p>
          </div>
          <ul className="grid gap-6 md:grid-cols-3">
            {resourceLinks.map((resource) => (
              <li key={resource.href} className="flex flex-col justify-between gap-3 rounded-2xl border border-white/15 bg-white/5 p-6">
                <div>
                  <h3 className="text-xl font-semibold text-white">{resource.label}</h3>
                  <p className="text-white/80">{resource.description}</p>
                </div>
                <a className="cta-link" href={resource.href} target="_blank" rel="noopener noreferrer">
                  {resource.label}
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="mx-auto w-full max-w-6xl px-6 pb-10" aria-label="Site footer">
        <div className="flex flex-col items-start justify-between gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-gold">Christ Commanded Church</p>
            <p className="text-white/70">Gather • Pray • Serve • Love</p>
          </div>
          <a className="inline-flex items-center gap-2 text-white/80 hover:text-white" href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
            <img src={viteLogo} alt="Vite lightning bolt logo" className="h-6 w-6" />
            <span>Built with Vite</span>
          </a>
        </div>
        <p className="mt-6 text-sm text-white/60">&copy; {new Date().getFullYear()} Christ Commanded Church. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
