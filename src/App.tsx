import { useMemo, useState } from 'react';
import viteLogo from '/vite.svg';

import cccMark from './assets/ccc-mark.svg';
import { homeHighlights } from './data/homeHighlights';
import { guidanceTopics, toneAdditions, type GuidanceTone } from './data/scriptureGuidance';
import './pages/PageStyles.css';

const navigationLinks = [
  { href: '#gatherings', label: 'Gather' },
  { href: '#serve', label: 'Serve' },
  { href: '#resources', label: 'Resources' },
  { href: '#ask-jesus', label: 'Ask Jesus' },
  { href: '#mission', label: 'Doctrine & Mission' },
  { href: '#donations', label: 'Give' },
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
  const [prompt, setPrompt] = useState('');
  const [tone, setTone] = useState<GuidanceTone>('comfort');
  const [responseId, setResponseId] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<string | null>(null);

  const activeGuidance = useMemo(() => {
    if (responseId) {
      return guidanceTopics.find((topic) => topic.id === responseId) ?? guidanceTopics[0];
    }

    return null;
  }, [responseId]);

  function handleGuidanceSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const text = prompt.trim().toLowerCase();

    const matched = guidanceTopics.find((topic) =>
      topic.keywords.some((keyword) => text.includes(keyword.toLowerCase())),
    );

    setResponseId((matched ?? guidanceTopics[0]).id);
    setFeedback(
      matched
        ? 'Here is a Scripture-centered encouragement for what you shared.'
        : 'We picked a timeless encouragement. You can mention a topic like “rest,” “finances,” or “direction” for a closer fit.',
    );
  }

  function resetGuidance() {
    setResponseId(null);
    setFeedback(null);
  }

  const missionStatements = [
    {
      title: 'Christ as Cornerstone',
      description:
        'We believe the gospel is the power that saves and shapes every part of life—Jesus is the center of our teaching, worship, and sending.',
    },
    {
      title: 'Spirit-Led Formation',
      description:
        'Prayer, Scripture, and community hospitality are how we become more like Christ. We practice rhythms that make room for the Spirit.',
    },
    {
      title: 'Sent to Serve',
      description:
        'We exist for our neighbors. Every gathering should overflow into courageous love, justice, and generosity in our city and beyond.',
    },
  ];

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
          id="landing"
          aria-labelledby="landing-heading"
          className="rounded-3xl bg-gradient-to-r from-white/10 via-white/5 to-white/10 p-8 shadow-2xl backdrop-blur-sm"
        >
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.3em] text-gold">Welcome</p>
              <h2 id="landing-heading" className="text-4xl font-bold leading-tight sm:text-5xl">
                Hope for today. Courage for the week.
              </h2>
              <p className="max-w-2xl text-white/85">
                Christ Commanded Church is a family shaped by prayer, Scripture, and generosity. Whether you&apos;re new
                to faith or growing as a disciple, we&apos;re here to walk with you.
              </p>
              <div className="flex flex-wrap gap-3">
                <a className="cta-link" href="#ask-jesus">
                  Ask Jesus for Guidance
                </a>
                <a className="cta-link secondary-link" href="#mission">
                  Read Our Mission
                </a>
              </div>
            </div>
            <div className="grid gap-3 rounded-2xl border border-white/15 bg-white/10 p-6 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gold/20 text-center text-lg font-bold text-gold">✶</div>
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-gold">Weekly Rhythm</p>
                  <p className="font-semibold text-white">House Churches across Dallas &amp; beyond</p>
                </div>
              </div>
              <div className="grid gap-2 text-white/80">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Quick Links</p>
                <ul className="grid gap-2 text-sm sm:grid-cols-2">
                  <li>
                    <a className="underline decoration-gold/70 underline-offset-4 hover:text-white" href="/membership">
                      Join a House Church
                    </a>
                  </li>
                  <li>
                    <a className="underline decoration-gold/70 underline-offset-4 hover:text-white" href="/teachings">
                      Latest Teachings
                    </a>
                  </li>
                  <li>
                    <a className="underline decoration-gold/70 underline-offset-4 hover:text-white" href="/prayer-requests">
                      Share a Prayer Request
                    </a>
                  </li>
                  <li>
                    <a className="underline decoration-gold/70 underline-offset-4 hover:text-white" href="/donations">
                      Partner Through Giving
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

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

        <section
          id="ask-jesus"
          aria-labelledby="ask-jesus-heading"
          className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl backdrop-blur-md"
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
            <div className="flex-1 space-y-3">
              <p className="text-sm uppercase tracking-[0.3em] text-gold">AI-supported Scripture Guidance</p>
              <h2 id="ask-jesus-heading" className="text-3xl font-semibold text-white">
                Ask Jesus for guidance
              </h2>
              <p className="text-white/80">
                Share what&apos;s on your heart and we&apos;ll surface a Scripture-centered encouragement with next steps. Your
                words stay private—this tool simply pairs your request with curated responses from pastors and elders.
              </p>
              <form className="space-y-4" onSubmit={handleGuidanceSubmit}>
                <label className="block text-sm font-semibold text-white/80" htmlFor="guidance-question">
                  What do you want to ask Jesus today?
                </label>
                <textarea
                  id="guidance-question"
                  name="guidance-question"
                  className="w-full rounded-xl border border-white/15 bg-deep-blue/60 p-4 text-white shadow-inner outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/50"
                  rows={4}
                  value={prompt}
                  onChange={(event) => setPrompt(event.target.value)}
                  placeholder="Example: I feel anxious about a job change. How should I pray?"
                  required
                />
                <fieldset className="space-y-2">
                  <legend className="text-sm font-semibold text-white/80">Tone</legend>
                  <div className="flex flex-wrap gap-2">
                    {(['comfort', 'challenge', 'clarity'] as GuidanceTone[]).map((option) => (
                      <button
                        key={option}
                        type="button"
                        className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                          tone === option
                            ? 'border-gold bg-gold/20 text-white'
                            : 'border-white/20 bg-white/5 text-white/80 hover:border-white/40'
                        }`}
                        onClick={() => setTone(option)}
                        aria-pressed={tone === option}
                      >
                        {option === 'comfort' && 'Comfort'}
                        {option === 'challenge' && 'Challenge'}
                        {option === 'clarity' && 'Clarity'}
                      </button>
                    ))}
                  </div>
                </fieldset>
                <div className="flex flex-wrap gap-3">
                  <button
                    type="submit"
                    className="cta-link"
                    disabled={!prompt.trim()}
                  >
                    Receive Guidance
                  </button>
                  {responseId ? (
                    <button type="button" className="cta-link secondary-link" onClick={resetGuidance}>
                      Ask Another Question
                    </button>
                  ) : null}
                </div>
              </form>
            </div>

            <div className="flex-1 space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-gold">Scripture Response</p>
              {activeGuidance ? (
                <div className="space-y-4" role="status" aria-live="polite">
                  <h3 className="text-xl font-semibold text-white">{activeGuidance.title}</h3>
                  <blockquote className="rounded-xl border border-white/10 bg-white/5 p-4 text-white/90">
                    <p className="text-lg leading-7 text-white">“{activeGuidance.verseText}”</p>
                    <cite className="mt-2 block text-sm font-semibold text-gold">{activeGuidance.verseRef}</cite>
                  </blockquote>
                  <p className="text-white/85">{activeGuidance.response}</p>
                  <ul className="list-disc space-y-2 pl-5 text-white/80">
                    {activeGuidance.actionSteps.map((step) => (
                      <li key={step}>{step}</li>
                    ))}
                  </ul>
                  <div className="rounded-xl border border-white/10 bg-white/10 p-4 text-white/80">
                    <p className="text-sm font-semibold uppercase tracking-[0.15em] text-gold">Prayer</p>
                    <p className="mt-1">{activeGuidance.prayer}</p>
                    <p className="mt-3 text-sm text-white/70">{toneAdditions[tone]}</p>
                  </div>
                  {feedback ? <p className="text-sm text-white/70">{feedback}</p> : null}
                </div>
              ) : (
                <div className="space-y-2 text-white/70">
                  <p>Share your heart to receive a Scripture-based response with action steps and a prayer.</p>
                  <p className="text-sm text-gold/90">We never store your entry; this is a simple matcher powered by curated content.</p>
                </div>
              )}
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

        <section
          id="mission"
          aria-labelledby="mission-heading"
          className="rounded-3xl border border-white/15 bg-white/5 p-8 backdrop-blur-md"
        >
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.3em] text-gold">Doctrine &amp; Mission</p>
            <h2 id="mission-heading" className="text-3xl font-semibold text-white">
              What anchors Christ Commanded Church
            </h2>
            <p className="text-white/80">
              Our doctrine centers on the life, death, and resurrection of Jesus Christ, the authority of Scripture, and the
              empowering presence of the Holy Spirit. Our mission is to make disciples who embody the love and commands of
              Christ in every sphere of life.
            </p>
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {missionStatements.map((item) => (
              <article key={item.title} className="rounded-2xl border border-white/10 bg-white/10 p-5 shadow">
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-white/80">{item.description}</p>
              </article>
            ))}
          </div>
          <div className="mt-6 rounded-2xl border border-white/15 bg-white/5 p-5 text-white/80">
            <p className="font-semibold text-white">The Great Commandment shapes everything we do.</p>
            <p className="mt-2">
              “You shall love the Lord your God with all your heart and with all your soul and with all your mind. This is the
              great and first commandment. And a second is like it: You shall love your neighbor as yourself.” — Matthew 22:37–39
            </p>
          </div>
        </section>

        <section
          id="donations"
          aria-labelledby="donations-heading"
          className="rounded-3xl border border-white/10 bg-gradient-to-r from-gold/20 via-gold/15 to-white/10 p-8 shadow-2xl backdrop-blur-md"
        >
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.3em] text-deep-blue">Support the mission</p>
              <h2 id="donations-heading" className="text-3xl font-semibold text-deep-blue">
                Partner through generosity
              </h2>
              <p className="max-w-2xl text-deep-blue/80">
                Your gifts fuel church planting, discipleship, compassion funds, and global missions. We steward every gift
                with transparency and gratitude.
              </p>
              <div className="flex flex-wrap gap-3">
                <a className="cta-link" href="/donations">
                  Give Online
                </a>
                <a className="cta-link secondary-link" href="/donations/pledge">
                  Start a Recurring Gift
                </a>
              </div>
            </div>
            <div className="grid gap-3 rounded-2xl border border-white/20 bg-white/80 p-6 text-deep-blue shadow-lg">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-deep-blue">Ways to support</p>
              <ul className="grid gap-2 text-deep-blue/80">
                <li className="flex items-start gap-2">
                  <span aria-hidden="true">•</span>
                  Digital giving via Tithely, PayPal, or Cash App.
                </li>
                <li className="flex items-start gap-2">
                  <span aria-hidden="true">•</span>
                  Monthly partners sustain local outreach and benevolence.
                </li>
                <li className="flex items-start gap-2">
                  <span aria-hidden="true">•</span>
                  Employer matching? Email{' '}
                  <a className="underline decoration-gold underline-offset-4" href="mailto:giving@christcommanded.church">
                    giving@christcommanded.church
                  </a>
                  .
                </li>
              </ul>
            </div>
          </div>
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
