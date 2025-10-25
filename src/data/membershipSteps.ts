export type MembershipStep = {
  id: string;
  title: string;
  duration: string;
  description: string;
  ctaLabel: string;
};

export const membershipSteps: MembershipStep[] = [
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
];
