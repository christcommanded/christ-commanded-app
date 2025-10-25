export type Teaching = {
  id: string;
  title: string;
  speaker: string;
  date: string;
  theme: string;
  summary: string;
  ctaLabel: string;
};

export const teachings: Teaching[] = [
  {
    id: 'teaching-1',
    title: 'The Command to Love',
    speaker: 'Pastor Miriam Cole',
    date: 'March 3, 2024',
    theme: 'Community & Compassion',
    summary:
      'Exploring the radical love Jesus calls us to embody in our neighborhoods and families.',
    ctaLabel: 'Watch Teaching',
  },
  {
    id: 'teaching-2',
    title: 'Faith in Motion',
    speaker: 'Elder Daniel Brooks',
    date: 'March 10, 2024',
    theme: 'Active Faith',
    summary:
      'Discover practices for weaving prayer, study, and service into the rhythm of daily life.',
    ctaLabel: 'Listen to Podcast',
  },
  {
    id: 'teaching-3',
    title: 'Kingdom Generosity',
    speaker: 'Pastor Alana Price',
    date: 'March 17, 2024',
    theme: 'Stewardship',
    summary:
      'A conversation on generosity that transforms both the giver and the community.',
    ctaLabel: 'Download Notes',
  },
];
