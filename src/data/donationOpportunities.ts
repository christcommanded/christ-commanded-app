export type DonationOpportunity = {
  id: string;
  title: string;
  impact: string;
  goal: string;
  description: string;
  ctaLabel: string;
};

export const donationOpportunities: DonationOpportunity[] = [
  {
    id: 'donation-1',
    title: 'Neighborhood Pantry',
    impact: 'Feeds 150 families weekly',
    goal: '$7,500 Spring Goal',
    description:
      'Help keep our shelves stocked with fresh produce and essential staples for families in need.',
    ctaLabel: 'Sponsor Groceries',
  },
  {
    id: 'donation-2',
    title: 'Student Mentorship',
    impact: 'Supports 45 middle school students',
    goal: '$4,200 Equipment & Training',
    description:
      'Resource mentors with materials, training, and transportation as they invest in local students.',
    ctaLabel: 'Fund Mentors',
  },
  {
    id: 'donation-3',
    title: 'Global Missions Partnership',
    impact: 'Empowers 3 partner churches',
    goal: '$9,000 Missional Grant',
    description:
      'Provide micro-grants that launch sustainable ministries in our partner communities abroad.',
    ctaLabel: 'Give to Missions',
  },
];
