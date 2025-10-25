export type Highlight = {
  id: string;
  title: string;
  description: string;
  actionLabel: string;
  actionHref: string;
};

export const homeHighlights: Highlight[] = [
  {
    id: 'highlight-1',
    title: 'Join a House Church',
    description:
      'Experience discipleship, shared meals, and community care with neighbors throughout the city.',
    actionLabel: 'Find a House Church',
    actionHref: '/membership',
  },
  {
    id: 'highlight-2',
    title: 'Serve This Weekend',
    description:
      'From hospitality to prayer teams, discover ways to be the hands and feet of Jesus.',
    actionLabel: 'Browse Teams',
    actionHref: '/membership',
  },
  {
    id: 'highlight-3',
    title: 'Stories of Transformation',
    description:
      'Celebrate what God is doing through our faith family at home and around the globe.',
    actionLabel: 'Read Stories',
    actionHref: '/teachings',
  },
];
