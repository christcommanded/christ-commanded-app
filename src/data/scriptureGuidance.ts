export type GuidanceTone = 'comfort' | 'challenge' | 'clarity';

export interface GuidanceTopic {
  id: string;
  title: string;
  summary: string;
  verseRef: string;
  verseText: string;
  response: string;
  actionSteps: string[];
  prayer: string;
  keywords: string[];
}

export const guidanceTopics: GuidanceTopic[] = [
  {
    id: 'direction',
    title: 'Clarity for the Path Ahead',
    summary: 'When you need wisdom for a decision or new season.',
    verseRef: 'James 1:5',
    verseText: 'If any of you lacks wisdom, let him ask God, who gives generously to all without reproach, and it will be given him.',
    response:
      'Jesus invites you to slow down and ask for wisdom without fear. The Spirit meets you in the unknown with steady light, not a spotlight—trust that the next faithful step will be revealed.',
    actionSteps: [
      'Name the decision and one value you want to honor (e.g., hospitality, integrity, rest).',
      'Invite one trusted believer to pray with you and mirror back what they sense.',
      'Take the smallest obedient step this week and watch for God’s peace to confirm or redirect.',
    ],
    prayer: 'Jesus, thank You for promising wisdom without shaming me for asking. Quiet the noise in my heart so I can notice the next step You are highlighting. I surrender my timeline to Your pace.',
    keywords: ['direction', 'decision', 'clarity', 'future', 'next step', 'wisdom'],
  },
  {
    id: 'rest',
    title: 'Rest for a Weary Heart',
    summary: 'When you feel stretched thin or hurried.',
    verseRef: 'Matthew 11:28-29',
    verseText:
      'Come to me, all who labor and are heavy laden, and I will give you rest. Take my yoke upon you, and learn from me, for I am gentle and lowly in heart, and you will find rest for your souls.',
    response:
      "Jesus is not impatient with your limits. He offers a gentle pace and a yoke that fits your shoulders. Rest is not quitting—it's trusting God to be God while you breathe again.",
    actionSteps: [
      'Set aside 10 minutes today to breathe slowly, name your burdens, and hand them to Jesus.',
      'Choose one commitment you can pause or delegate this week as an act of trust.',
      'Replace doom-scrolling with a Psalm tonight; let Scripture set the tone for rest.',
    ],
    prayer: 'Gentle Savior, I receive Your invitation to rest. Lift what is crushing me and teach my soul to move at Your tempo. Remind me that I am loved before I am productive.',
    keywords: ['rest', 'tired', 'weary', 'burnout', 'hurry', 'pace', 'anxious'],
  },
  {
    id: 'reconciliation',
    title: 'Courage to Reconcile',
    summary: 'When relationships feel tense or fractured.',
    verseRef: 'Colossians 3:13-14',
    verseText:
      'Bear with each other and forgive one another if any of you has a grievance against someone. Forgive as the Lord forgave you. And over all these virtues put on love, which binds them all together in perfect unity.',
    response:
      'The Cross frees you to move toward others with humility. Reconciliation is not ignoring harm; it is choosing love, truth, and patience because Jesus moved toward you first.',
    actionSteps: [
      'Ask the Spirit to reveal any hurt or defensiveness you’re carrying into the conversation.',
      'Write a short note that owns your part and invites a time to listen without interruption.',
      'Commit to praying blessing over the other person for seven days, even as you set wise boundaries.',
    ],
    prayer: 'Lord, You reconciled me when I was far off. Give me courage to seek peace and clarity, and wisdom to honor both truth and grace. Let love be the bond that steadies my steps.',
    keywords: ['forgive', 'conflict', 'marriage', 'family', 'relationship', 'reconcile', 'unity'],
  },
  {
    id: 'generosity',
    title: 'Freedom in Generosity',
    summary: 'When you want to give but feel unsure about resources.',
    verseRef: '2 Corinthians 9:7-8',
    verseText:
      'Each one must give as he has decided in his heart, not reluctantly or under compulsion, for God loves a cheerful giver. And God is able to make all grace abound to you.',
    response:
      'Generosity is a response to grace, not pressure. God delights in shaping your heart more than measuring an amount. He promises enough grace for every good work He assigns you.',
    actionSteps: [
      'Pray over your budget and name one area where you can choose simplicity this month.',
      'Pick a recurring gift—no matter the size—to train your heart toward steady generosity.',
      'Ask God to show you one person or ministry to encourage with a personal note alongside your gift.',
    ],
    prayer: 'Provider God, thank You for meeting my needs. Form my heart to mirror Your open-handed love. Show me how to give with joy and trust that You will supply what every good work requires.',
    keywords: ['money', 'finances', 'give', 'generous', 'tithe', 'donate', 'support'],
  },
];

export const toneAdditions: Record<GuidanceTone, string> = {
  comfort: 'Jesus is near and gentle with you—receive His kindness as you consider these steps.',
  challenge: 'The Spirit is ready to embolden you—take one brave step today and trust God to meet you there.',
  clarity: 'Pay attention to the line in Scripture that glows for you; let that single phrase guide today’s obedience.',
};
