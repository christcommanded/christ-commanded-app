export type PrayerRequest = {
  id: string;
  name: string;
  focus: string;
  request: string;
  urgency: 'Immediate' | 'This Week' | 'Ongoing';
};

export const prayerRequests: PrayerRequest[] = [
  {
    id: 'prayer-1',
    name: 'Naomi & Caleb',
    focus: 'Family Restoration',
    request:
      'Pray for healing and reconciliation as they navigate a challenging season in their marriage.',
    urgency: 'Immediate',
  },
  {
    id: 'prayer-2',
    name: 'Mission Team Southside',
    focus: 'Local Outreach',
    request:
      'Cover the team in prayer as they launch the spring mentorship program for neighborhood teens.',
    urgency: 'This Week',
  },
  {
    id: 'prayer-3',
    name: 'Morgan Family',
    focus: 'Healing',
    request:
      'Morgan is recovering from surgery—pray for comfort, strength, and a full recovery.',
    urgency: 'Ongoing',
  },
];
