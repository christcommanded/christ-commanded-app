export interface MembershipStep {
  id: string;
  title: string;
  duration: string;
  description: string;
  ctaLabel: string;
}

export interface MembershipEvent {
  id: string;
  title: string;
  datetime: string;
  isoDate: string;
  location: string;
  hosts: string;
  description: string;
  registrationUrl?: string;
}

export interface MembershipAnnouncement {
  id: string;
  message: string;
  category: 'Next Step' | 'Reminder' | 'Celebration' | 'Serve';
  url?: string;
}

export interface ContactReason {
  value: string;
  label: string;
  description: string;
}

export interface MembershipData {
  steps: MembershipStep[];
  events: MembershipEvent[];
  announcements: MembershipAnnouncement[];
  contactReasons: ContactReason[];
  contactEmail: string;
}

export const membershipData: MembershipData = {
  steps: [
    {
      id: 'membership-1',
      title: 'Welcome Gathering',
      duration: 'First Sunday of each month',
      description:
        'Share a meal with pastors and leaders, hear our story, and discover ways to connect immediately.',
      ctaLabel: 'RSVP for Welcome',
    },
    {
      id: 'membership-2',
      title: 'Foundations Course',
      duration: '4-week interactive workshop',
      description:
        'Dive into our values, explore spiritual gifts, and develop a personalized discipleship rhythm.',
      ctaLabel: 'Join the Course',
    },
    {
      id: 'membership-3',
      title: 'Serve & Commit',
      duration: 'Flexible Serving Teams',
      description:
        'Partner with ministries that match your passions and officially become a Christ Commanded member.',
      ctaLabel: 'Find Your Team',
    },
  ],
  events: [
    {
      id: 'event-vision-brunch',
      title: 'Vision Brunch & Ministry Fair',
      datetime: 'Saturday, April 6 · 10:00 AM',
      isoDate: '2024-04-06T10:00:00-05:00',
      location: 'Community Hall — 2418 Rivers Way',
      hosts: 'Pastors Lena & Malik',
      description:
        'Meet ministry leaders, explore serving teams, and enjoy brunch with other prospective members.',
      registrationUrl: 'https://example.org/events/vision-brunch',
    },
    {
      id: 'event-story-night',
      title: 'Story Night: Testimonies of Transformation',
      datetime: 'Friday, April 19 · 7:00 PM',
      isoDate: '2024-04-19T19:00:00-05:00',
      location: 'The Chapel — 2418 Rivers Way',
      hosts: 'Discipleship Team',
      description:
        'Hear from members who recently completed the pathway and learn practical ways to stay rooted.',
      registrationUrl: 'https://example.org/events/story-night',
    },
    {
      id: 'event-serve-lab',
      title: 'Serve Lab & Team Coaching',
      datetime: 'Sunday, May 5 · 12:30 PM',
      isoDate: '2024-05-05T12:30:00-05:00',
      location: 'NextGen Center — 2418 Rivers Way',
      hosts: 'Connections Coaches',
      description:
        'Rotate through hands-on breakout labs with ministry mentors to discover your best next step.',
    },
  ],
  announcements: [
    {
      id: 'announcement-1',
      message: 'Membership covenant renewals happen during the 11 AM gathering on April 14.',
      category: 'Reminder',
      url: 'https://example.org/membership/renewal',
    },
    {
      id: 'announcement-2',
      message: 'Childcare is provided during all pathway events — RSVP your family when you register.',
      category: 'Next Step',
    },
    {
      id: 'announcement-3',
      message: 'We welcomed 18 new members last month! Celebrate with us and say hello this Sunday.',
      category: 'Celebration',
    },
  ],
  contactReasons: [
    {
      value: 'next-step',
      label: 'Plan my next step',
      description: 'Figure out where you should plug in along the membership pathway.',
    },
    {
      value: 'serve',
      label: 'Join a serving team',
      description: 'Explore current opportunities and meet a serving team coach.',
    },
    {
      value: 'care',
      label: 'Request care or prayer',
      description: 'Share a pastoral care need or request prayer from our team.',
    },
    {
      value: 'general',
      label: 'Ask a general question',
      description: 'Connect with the membership office for any other needs.',
    },
  ],
  contactEmail: 'membership@christcommanded.org',
};

